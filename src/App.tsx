import { useState, useEffect, useRef } from "react";
import texture from "./assets/white-texture.png";
import fiori from "./assets/nuovifiori.png";
import video from "./assets/video.mp4";
import villa from "./assets/villa.jpg";

const WEDDING_DATE = new Date("2027-06-20T16:00:00");

// URL embed — formato diretto, nessuna API key richiesta
const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=45.7000277,9.8411298&z=17&output=embed";

const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/place/Villa+Canton/@45.7000314,9.8385495,17z/data=!3m1!4b1!4m6!3m5!1s0x47815c1ab61e55d5:0x9e7b9c902b300478!8m2!3d45.7000277!4d9.8411298!16s%2Fg%2F1v_0hmcx?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D";

const VENUE_NAME = "Villa Canton";
const VENUE_ADDRESS = "Via G. Paglia, 18, 24069 Trescore Balneario BG";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "storia", label: "La Nostra Storia" },
  {id: "location", label: "Location"},
  { id: "programma", label: "Programma" },
  { id: "dresscode", label: "Dress Code" },
  { id: "lunadimiele", label: "Luna di Miele" },
  { id: "rsvp", label: "R.S.V.P." },
  { id: "gallery", label: "Gallery" },
  { id: "contatti", label: "Contatti" },
  { id: "faq", label: "FAQ" },

];

// ---- Types ----
interface CountdownTime {
  giorni: number;
  ore: number;
  minuti: number;
  secondi: number;
}

interface NavItem {
  id: string;
  label: string;
}

// ---- Hook countdown ----
function useCountdown(targetDate: Date): CountdownTime {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    giorni: 0,
    ore: 0,
    minuti: 0,
    secondi: 0,
  });
  useEffect(() => {
    const calc = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0)
        return setTimeLeft({ giorni: 0, ore: 0, minuti: 0, secondi: 0 });
      setTimeLeft({
        giorni: Math.floor(diff / 86400000),
        ore: Math.floor((diff % 86400000) / 3600000),
        minuti: Math.floor((diff % 3600000) / 60000),
        secondi: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const t = setInterval(calc, 1000);
    return () => clearInterval(t);
  }, [targetDate]);
  return timeLeft;
}

// ---- CSS ----
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Great+Vibes&family=Montserrat:wght@300;400;500&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }
  body, #root { font-family: 'Cormorant Garamond', serif; }
  .ws-app { min-height: 100vh; background: #f8f6f2; }

  /* NAV */
  .ws-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    padding: 1rem 2rem;
    display: flex; align-items: center; justify-content: space-between;
    transition: background 0.4s, backdrop-filter 0.4s;
  }
  .ws-nav.scrolled {
    background: rgba(248,246,242,0.96);
    backdrop-filter: blur(8px);
    box-shadow: 0 1px 20px rgba(0,0,0,0.06);
  }
  .ws-nav-logo {
    font-family: 'Great Vibes', cursive; font-size: 1.8rem;
    color: #fff; cursor: pointer;
    transition: color 0.4s; text-shadow: 0 1px 8px rgba(0,0,0,0.3);
  }
  .ws-nav.scrolled .ws-nav-logo { color: #5a4a3a; text-shadow: none; }
  .ws-hamburger {
    background: none; border: none; cursor: pointer;
    display: flex; flex-direction: column; gap: 5px; padding: 4px;
  }
  .ws-hamburger span {
    display: block; width: 24px; height: 1.5px;
    background: #fff; transition: background 0.4s, transform 0.3s, opacity 0.3s;
  }
  .ws-nav.scrolled .ws-hamburger span { background: #5a4a3a; }
  .ws-hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
  .ws-hamburger.open span:nth-child(2) { opacity: 0; }
  .ws-hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

  .ws-menu-overlay {
    position: fixed; inset: 0; z-index: 99;
    background: rgba(90,74,58,0.97);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 2rem; opacity: 0; pointer-events: none; transition: opacity 0.35s;
  }
  .ws-menu-overlay.open { opacity: 1; pointer-events: all; }
  .ws-menu-overlay a {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.85rem; letter-spacing: 0.25em; text-transform: uppercase;
    color: #f0ebe3; text-decoration: none; transition: color 0.2s;
  }
  .ws-menu-overlay a:hover { color: #d4b896; }

  /* HERO */
  .ws-hero {
    position: relative; height: 60vh; overflow: hidden;
    display: flex; flex-direction: column; align-items: center; justify-content: flex-end;
  }
    .ws-hero-villa{
    position: relative; height: 60vh; overflow: hidden;
    display: flex; flex-direction: column; align-items: center; justify-content: flex-end;
    }

      .villa{
position: absolute; inset: 0; width: 100%; height: 100%;
    object-fit: cover; z-index: 0;
      }

  .ws-hero video {
    position: absolute; inset: 0; width: 100%; height: 100%;
    object-fit: cover; z-index: 0;
  }
  .ws-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.5) 100%);
    z-index: 1;
  }
  .ws-hero-placeholder {
    position: absolute; inset: 0;
    background: linear-gradient(135deg, #b8a89a 0%, #8c7b6b 40%, #c4a882 100%);
    z-index: 0; display: flex; align-items: center; justify-content: center;
  }
  .ws-hero-placeholder-text {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase;
    color: rgba(255,255,255,0.5);
  }
  .ws-hero-title {
    position: relative; z-index: 2;
    text-align: center; padding-bottom: 5vh;
    transform: translateY(20px); opacity: 0;
    animation: fadeUp 1.2s 0.3s forwards;
  }
  .ws-hero-title h1 {
    font-family: 'Great Vibes', cursive;
    font-size: clamp(3.5rem, 10vw, 7rem);
    color: #fff; text-shadow: 0 2px 30px rgba(0,0,0,0.25); line-height: 1;
  }
  .ws-hero-title p {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(0.7rem, 2vw, 0.85rem);
    letter-spacing: 0.4em; color: rgba(255,255,255,0.85); margin-top: 0.8rem;
  }
  @keyframes fadeUp { to { transform: translateY(0); opacity: 1; } }

  /* TEXTURE — il valore viene iniettato a runtime tramite style inline su .ws-app */
  .ws-texture-section {
    position: relative;
    background-size: cover;
    background-attachment: local;
  }
  .ws-texture-section::before {
    content: ''; position: absolute; inset: 0;
    background: rgba(248,246,242,0.30); z-index: 0;
  }
  .ws-texture-section > * { position: relative; z-index: 1; }

  /* COUNTDOWN */
  .ws-countdown { padding: 2rem 2rem 4rem; text-align: center; }
  .ws-section-label {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.72rem; letter-spacing: 0.3em; text-transform: uppercase;
    color: #a08060; margin-bottom: 2.5rem;
  }
  .ws-countdown-grid {
    display: flex; justify-content: center; gap: clamp(1rem, 4vw, 3rem); flex-wrap: wrap;
  }
  .ws-countdown-item { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 0.3rem; }
  .ws-countdown-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3rem, 8vw, 5.5rem);
    font-weight: 300; color: #3a2e24; line-height: 1; min-width: 2ch; display: block;
  }
  .ws-countdown-label {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.65rem; letter-spacing: 0.25em; text-transform: uppercase;
    color: #a08060; margin-top: 0.4rem;
  }
  .ws-countdown-sep {
    font-size: clamp(2rem, 5vw, 4rem);
    color: #c9b49a; align-self: flex-start; padding-top: 0.3rem; font-weight: 300;
  }

  /* DIVIDER */
  .ws-divider {
    display: flex; align-items: center; gap: 1rem;
    padding: 0 2rem; max-width: 400px; margin: 0 auto;
  }
  .ws-divider-line { flex: 1; height: 1px; background: #c9b49a; }
  .ws-divider-diamond { width: 6px; height: 6px; background: #c9b49a; transform: rotate(45deg); }

  /* STORY */
  .ws-story { padding: 4rem 2rem 2rem; max-width: 720px; margin: 0 auto; }
  .ws-story h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.72rem; letter-spacing: 0.3em; text-transform: uppercase;
    color: #a08060; text-align: center; margin-bottom: 3rem;
  }
  .ws-letter { font-size: clamp(1rem, 2.5vw, 1.15rem); line-height: 1.85; color: #3a2e24; text-align: center; }
  .ws-letter p { margin-bottom: 1.8rem; }
  .ws-letter-signature { 
  font-family: 'Montserrat', sans-serif; font-size: 0.9rem; letter-spacing: 0.2em; text-transform: uppercase; color: #a08060; margin-top: 1rem;
    text-align: center;
  }

  .citazione{
    font-style: italic; color: #5a4a3a; line-height: 1.6; font-size: clamp(1.4rem, 3vw, 1.4rem);
  }
  .citazione-nome{
    font-family: 'Montserrat', sans-serif; font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; color: #a08060; margin-top: 1rem;
    text-align: center;
  }


  
  /* MAP SECTION */
  .ws-map-section { padding: 3rem 2rem 4rem; max-width: 900px; margin: 0 auto; }
  .ws-map-section h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.72rem; letter-spacing: 0.3em; text-transform: uppercase;
    color: #a08060; text-align: center; margin-bottom: 0.6rem;
  }
  .ws-map-venue-name {
    font-family: 'Great Vibes', cursive; font-size: 2rem; color: #5a4a3a;
    text-align: center; margin-bottom: 0.3rem;
  }
  .ws-map-venue-address {
    font-family: 'Montserrat', sans-serif; font-size: 0.72rem;
    letter-spacing: 0.1em; color: #a08060; text-align: center; margin-bottom: 1.8rem;
  }
  .ws-map-iframe-wrap {
    width: 100%; border: 1px solid #e0d5c8; overflow: hidden;
    position: relative;
  }
  .ws-map-iframe-wrap iframe { width: 100%; height: 380px; border: 0; display: block; }
  .ws-map-placeholder {
    width: 100%; height: 380px;
    background: #ede8e0;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.8rem;
    border: 1px dashed #c9b49a;
  }
  .ws-map-placeholder span {
    font-family: 'Montserrat', sans-serif; font-size: 0.72rem;
    letter-spacing: 0.15em; text-transform: uppercase; color: #a08060;
  }
  .ws-map-btn {
    display: inline-block; margin-top: 1.2rem;
    padding: 0.75rem 2rem;
    background: #5a4a3a; color: #f0ebe3;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase;
    text-decoration: none; transition: background 0.2s;
  }
  .ws-map-btn:hover { background: #3a2e24; }

  /* FLOWERS */
  .ws-flowers { width: 100%; display: flex; justify-content: center; overflow: hidden; }
  .ws-flowers img { width: 100%; object-fit: contain; display: block; }

  /* OTHER PAGES */
  .ws-page { padding: 8rem 2rem 4rem; max-width: 800px; margin: 0 auto; }
  .ws-page-title {
    font-family: 'Great Vibes', cursive; font-size: clamp(2.5rem, 8vw, 4rem);
    color: #5a4a3a; text-align: center; margin-bottom: 3rem;
  }
  .ws-page-sub {
    font-family: 'Montserrat', sans-serif; font-size: 0.7rem; letter-spacing: 0.3em;
    text-transform: uppercase; color: #a08060; text-align: center; margin-bottom: 3rem;
  }
  .ws-placeholder-block {
    background: rgba(200,180,160,0.12); border: 1px dashed #c9b49a;
    padding: 3rem 2rem; text-align: center; margin-bottom: 2rem;
  }
  .ws-placeholder-block p {
    font-family: 'Montserrat', sans-serif; font-size: 0.75rem;
    letter-spacing: 0.15em; text-transform: uppercase; color: #b09070;
  }

  /* FORM */
  .ws-form { display: flex; flex-direction: column; gap: 1rem; max-width: 500px; margin: 0 auto; }
  .ws-form input, .ws-form select, .ws-form textarea {
    width: 100%; padding: 0.85rem 1rem; border: 1px solid #c9b49a;
    background: rgba(255,255,255,0.6); font-family: 'Cormorant Garamond', serif;
    font-size: 1rem; color: #3a2e24; outline: none; transition: border-color 0.2s;
  }
  .ws-form input:focus, .ws-form select:focus, .ws-form textarea:focus { border-color: #8a6a4a; }
  .ws-form button {
    padding: 1rem; background: #5a4a3a; color: #f0ebe3; border: none; cursor: pointer;
    font-family: 'Montserrat', sans-serif; font-size: 0.75rem;
    letter-spacing: 0.25em; text-transform: uppercase; transition: background 0.2s;
  }
  .ws-form button:hover { background: #3a2e24; }
  .ws-form label {
    font-family: 'Montserrat', sans-serif; font-size: 0.7rem;
    letter-spacing: 0.15em; text-transform: uppercase; color: #a08060; margin-bottom: -0.5rem;
  }

  /* FAQ */
  .ws-faq-item { border-bottom: 1px solid #e0d5c8; padding: 1.2rem 0; }
  .ws-faq-q {
    font-family: 'Montserrat', sans-serif; font-size: 0.75rem;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: #5a4a3a; cursor: pointer;
    display: flex; justify-content: space-between; align-items: center;
  }
  .ws-faq-a { font-size: 1rem; color: #7a6050; line-height: 1.7; margin-top: 0.8rem; padding-left: 0.5rem; }

  /* TIMELINE */
  .ws-timeline { position: relative; padding-left: 2rem; }
  .ws-timeline::before {
    content: ''; position: absolute; left: 0; top: 0; bottom: 0;
    width: 1px; background: #c9b49a;
  }
  .ws-tl-item { position: relative; margin-bottom: 2rem; }
  .ws-tl-item::before {
    content: ''; position: absolute; left: -2.3rem; top: 0.4rem;
    width: 7px; height: 7px; border-radius: 50%;
    background: #c9b49a; border: 2px solid #f8f6f2; box-shadow: 0 0 0 1px #c9b49a;
  }
  .ws-tl-time {
    font-family: 'Montserrat', sans-serif; font-size: 0.65rem;
    letter-spacing: 0.2em; text-transform: uppercase; color: #a08060; margin-bottom: 0.2rem;
  }
  .ws-tl-title { font-size: 1.2rem; font-weight: 400; color: #3a2e24; margin-bottom: 0.2rem; }
  .ws-tl-desc { font-size: 0.95rem; color: #7a6050; line-height: 1.6; }

  /* LUNA DI MIELE */
  .ws-lm-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-top: 2rem; }
  .ws-lm-card { background: rgba(255,255,255,0.5); border: 1px solid #e0d5c8; padding: 1.5rem; text-align: center; }
  .ws-lm-card h3 {
    font-family: 'Montserrat', sans-serif; font-size: 0.7rem;
    letter-spacing: 0.2em; text-transform: uppercase; color: #a08060; margin-bottom: 0.8rem;
  }
  .ws-lm-card p { font-size: 1rem; color: #5a4a3a; line-height: 1.6; }

  /* FOOTER */
  .ws-footer {
    text-align: center; padding: 2rem;
    font-family: 'Montserrat', sans-serif; font-size: 0.65rem;
    letter-spacing: 0.2em; text-transform: uppercase; color: #a08060;
    background: rgba(248,246,242,0.95); border-top: 1px solid #e0d5c8;
  }

  .bottom-clear{
    height: 120px;
    }

  @media (max-width: 640px) {
    .ws-nav { padding: 1rem; }
    .ws-page { padding: 6rem 1.2rem 3rem; }
    .ws-countdown-sep { display: none; }
    .ws-story { padding: 3rem 1.2rem 1rem; }
    .ws-map-section { padding: 2rem 1.2rem 3rem; }
    .ws-map-iframe-wrap iframe, .ws-map-placeholder { height: 260px; }
  }
`;

// ---- Sub-components ----

function Divider() {
  return (
    <div className="ws-divider">
      <div className="ws-divider-line" />
      <div className="ws-divider-diamond" />
      <div className="ws-divider-line" />
    </div>
  );
}

function FlowerDecoration() {
  return (
    <div className="ws-flowers">
      <img
        src={fiori}
        alt="decorazione floreale"
        style={{ filter: "saturate(0.8) brightness(0.95)" }}
      />
    </div>
  );
}

function MapSection() {
  return (
    <section className="ws-map-section">
      <h2>Dove ci sposiamo</h2>
      <div className="ws-map-venue-name">{VENUE_NAME}</div>
      <div className="ws-map-venue-address">{VENUE_ADDRESS}</div>

      <div className="ws-map-iframe-wrap">
        <iframe
          src={MAPS_EMBED_URL}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Venue matrimonio"
        />
      </div>

      <div style={{ textAlign: "center" }}>
        {/* TODO: Verifica che il link si apra sul posto giusto prima di pubblicare */}
        <a
          href={MAPS_DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ws-map-btn"
        >
          Apri in Google Maps →
        </a>
      </div>
    </section>
  );
}

// ---- HOME ----
interface HomePageProps {
  countdown: CountdownTime;
}

function HomePage({ countdown }: HomePageProps) {
  return (
    <div>
      {/* HERO */}
      <section className="ws-hero">
        <video autoPlay muted loop playsInline>
          <source src={video} type="video/mp4" />
        </video>

        <div className="ws-hero-overlay" />
        <div className="ws-hero-title">
          <h1>Silvia &amp; Davide</h1>
          {/* TODO: Verifica che la data sia corretta */}
          <p>20 &nbsp;|&nbsp; Giugno &nbsp;|&nbsp; 2027</p>
        </div>
      </section>

      {/* COUNTDOWN + STORIA + MAPPA */}
      <div
        className="ws-texture-section"
        style={{ backgroundImage: `url(${texture})` }}
      >
        {/* COUNTDOWN */}
        <section className="ws-countdown">
          {/* <p className="ws-section-label">Manca ancora</p> */}
          <div className="ws-countdown-grid">
            {(
              [
                { val: countdown.giorni, label: "Giorni" },
                { val: countdown.ore, label: "Ore" },
                { val: countdown.minuti, label: "Minuti" },
                { val: countdown.secondi, label: "Secondi" },
              ] as { val: number; label: string }[]
            ).map((item, i) => (
              <span
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "clamp(1rem,4vw,3rem)",
                }}
              >
                {i > 0 && <span className="ws-countdown-sep">·</span>}
                <div className="ws-countdown-item">
                  <span className="ws-countdown-num">
                    {String(item.val ?? 0).padStart(2, "0")}
                  </span>
                  <span className="ws-countdown-label">{item.label}</span>
                </div>
              </span>
            ))}
          </div>
        </section>

        <Divider />

        {/* STORIA */}
        <section className="ws-story">
          {/* <h2>La Nostra Storia</h2> */}
          <div className="ws-letter">
            <p className="citazione">
              "Incontri milioni di persone e nessuno ti tocca veramente.
              <p>Poi incontri una persona, e la tua vita cambia per sempre."</p>
            </p>
            {/* <p>
              Ne abbiamo passate tante, attimi meravigliosi e momenti indimenticabili. Anche
              se a volte il nostro cammino è stato tortuoso, noi siamo sempre rimasti uniti
              e abbiamo superato ogni difficoltà insieme.
            </p>
            <p>
              Il primo grande passo l'abbiamo fatto nel 2022, andando a vivere insieme e
              iniziando così a costruire la nostra famiglia. Poco meno di un anno dopo è
              arrivata Nala, la nostra cagnolina. Con lei abbiamo imparato l'amore
              incondizionato, fatto di piccoli gesti quotidiani.
            </p>
            <p>
              Dieci anni dopo il nostro primo bacio, il 3 novembre 2025, è arrivata la
              proposta tanto attesa. Siamo pronti a scrivere insieme il resto della nostra
              storia, a sceglierci ancora una volta e a giurarci amore eterno.
            </p>
            <p>Non vediamo l'ora di condividere questo giorno unico e speciale con voi.</p> */}
          </div>
          <div className="citazione-nome">Fëdor Dostoevskij</div>
        </section>
        {/* <div className="bottom-clear"/> */}

        {/* <Divider /> */}

        {/* MAPPA */}
        {/* <MapSection /> */}

        {/* FIORI */}
        <FlowerDecoration />
      </div>
    </div>
  );
}

// ---- PAGINA STORIA (standalone) ----
function StoriaPage() {
  return (
    <div
      className="ws-texture-section"
      style={{ minHeight: "100vh", backgroundImage: `url(${texture})` }}
    >
      <div className="ws-page">
        <h1 className="ws-page-title">La Nostra Storia</h1>
        {/* TODO: Stesso testo della home — aggiorna entrambi se modifichi */}
        <div className="ws-letter">
          <p>
            La nostra storia è iniziata nel 2015 tra i banchi di scuola. Eravamo
            il giorno e la notte. In poco tempo, senza neanche rendercene conto,
            ci siamo innamorati e la luce del giorno ha iniziato a illuminare
            anche la notte più buia.
          </p>
          <p>
            Ne abbiamo passate tante, attimi meravigliosi e momenti
            indimenticabili. Anche se a volte il nostro cammino è stato
            tortuoso, noi siamo sempre rimasti uniti e abbiamo superato ogni
            difficoltà insieme.
          </p>
          <p>
            Il primo grande passo l'abbiamo fatto nel 2022, andando a vivere
            insieme e iniziando così a costruire la nostra famiglia. Poco meno
            di un anno dopo è arrivata Nala, la nostra cagnolina.
          </p>
          <p>
            Dieci anni dopo il nostro primo bacio, il 3 novembre 2025, è
            arrivata la proposta tanto attesa. Siamo pronti a scrivere insieme
            il resto della nostra storia.
          </p>
        </div>
        <div className="ws-letter-signature">Silvia &amp; Davide</div>
      </div>
        <FlowerDecoration />
    </div>
  );
}

function LocationPage() {
  return (
    <div
      className="ws-texture-section"
      style={{ minHeight: "100vh", backgroundImage: `url(${texture})` }}
      >
      <section className="ws-hero-villa">
      <img src={villa} alt="Villa Canton" className="villa" />
        {/* <video autoPlay muted loop playsInline> */}
        {/* </video> */}

        <div className="ws-hero-overlay" />
        <div className="ws-hero-title">
          <h1>Villa Canton</h1>
          {/* TODO: Verifica che la data sia corretta */}
          <p>Trescore Balneario (BG)</p>
        </div>
      </section>
      <div className="ws-page">
        <MapSection/>
        {/* <h1 className="ws-page-title">Location</h1> */}
        {/* <p className="ws-page-sub">Villa Canton, Trescore Balneario (BG)</p> */}
        {/* <div className="ws-placeholder-block">
          <p>📍 Via G. Paglia, 18, 24069 Trescore Balneario BG</p>
        </div> */}
        {/* <div className="ws-map-iframe-wrap">
          <iframe
            src={MAPS_EMBED_URL}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Venue matrimonio"
          />
        </div>
        <div style={{ textAlign: "center" }}>
          </div> */}
      </div>
        <FlowerDecoration />
    </div>
  );
}
// ---- RSVP ----
function RSVPPage() {
  return (
    <div
      className="ws-texture-section"
      style={{ minHeight: "100vh", backgroundImage: `url(${texture})` }}
    >
      <div className="ws-page">
        <h1 className="ws-page-title">RSVP</h1>
        {/* TODO: Imposta la data limite per la conferma */}
        <p className="ws-page-sub">
          Conferma la tua presenza entro il TODO — data limite
        </p>
        <div className="ws-form">
          <label>Nome e Cognome</label>
          <input type="text" placeholder="Mario Rossi" />
          <label>Email</label>
          <input type="email" placeholder="mario@esempio.it" />
          <label>Numero di ospiti</label>
          {/* TODO: Aggiusta il numero massimo di ospiti consentiti */}
          <select>
            <option>Solo io</option>
            <option>Io + 1</option>
            <option>Io + 2</option>
            <option>Io + 3</option>
          </select>
          <label>Intolleranze alimentari</label>
          <textarea
            rows={3}
            placeholder="Scrivi qui eventuali intolleranze o allergie..."
          />
          <label>Partecipi?</label>
          <select>
            <option>Sì, ci sarò! 🎉</option>
            <option>Purtroppo non riesco a venire</option>
          </select>
          {/* TODO: Collega il form a un backend / servizio (Formspree, EmailJS, Supabase, ecc.) */}
          <button type="button">Invia conferma</button>
        </div>
      </div>
    </div>
  );
}

// ---- PROGRAMMA ----
const PROGRAMMA_ITEMS = [
  // TODO: Verifica e aggiusta tutti gli orari e le descrizioni
  {
    time: "14:30",
    title: "Accoglienza degli ospiti",
    desc: "Vi aspettiamo nel giardino della villa per un aperitivo di benvenuto.",
  },
  {
    time: "15:30",
    title: "Cerimonia",
    desc: "TODO — aggiungere tipo di cerimonia (civile/religiosa) e luogo esatto",
  },
  {
    time: "16:30",
    title: "Cocktail & Foto",
    desc: "Festeggiamo insieme con un aperitivo all'aperto mentre i nostri fotografi immortalano i momenti.",
  },
  {
    time: "19:30",
    title: "Cena",
    desc: "TODO — aggiungere dettagli venue e menu",
  },
  {
    time: "23:00",
    title: "Taglio della torta",
    desc: "Il momento più dolce della serata, da condividere con tutti voi.",
  },
  {
    time: "23:30",
    title: "Festa & Balli",
    desc: "La musica ci accompagnerà fino a notte fonda — preparatevi a ballare!",
  },
];

function ProgrammaPage() {
  return (
    <div
      className="ws-texture-section"
      style={{ minHeight: "100vh", backgroundImage: `url(${texture})` }}
    >
      <div className="ws-page">
        <h1 className="ws-page-title">Il Programma</h1>
        {/* TODO: Aggiorna la data se cambia */}
        <p className="ws-page-sub">20 Giugno 2027</p>
        <div className="ws-placeholder-block" style={{ marginBottom: "3rem" }}>
          <p>📍 Villa Canton · Via G. Paglia 18, Trescore Balneario (BG)</p>
        </div>
        <div className="ws-timeline">
          {PROGRAMMA_ITEMS.map((item) => (
            <div className="ws-tl-item" key={item.time}>
              <div className="ws-tl-time">{item.time}</div>
              <div className="ws-tl-title">{item.title}</div>
              <div className="ws-tl-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---- LUNA DI MIELE ----
function LunaDiMielePage() {
  return (
    <div
      className="ws-texture-section"
      style={{ minHeight: "100vh", backgroundImage: `url(${texture})` }}
    >
      <div className="ws-page">
        <h1 className="ws-page-title">Luna di Miele</h1>
        <p className="ws-page-sub">Il nostro viaggio da sogno</p>
        {/* TODO: Aggiungi destinazione e descrizione narrativa del viaggio */}
        <div className="ws-placeholder-block">
          <p>🌍 TODO — Destinazione e descrizione del viaggio</p>
        </div>
        <div className="ws-lm-grid">
          {[
            {
              label: "Destinazione",
              todo: "TODO — es. Maldive, Giappone, Polinesia…",
            },
            { label: "Periodo", todo: "TODO — es. Luglio 2027" },
            {
              label: "Wishlist",
              todo: "TODO — esperienze e attività desiderate",
            },
            {
              label: "Come contribuire",
              todo: "TODO — link lista nozze o istruzioni bonifico",
            },
          ].map(({ label, todo }) => (
            <div className="ws-lm-card" key={label}>
              <h3>{label}</h3>
              <p
                style={{
                  color: "#b09070",
                  fontStyle: "italic",
                  fontSize: "0.9rem",
                }}
              >
                {todo}
              </p>
            </div>
          ))}
        </div>
        {/* TODO: Inserisci IBAN o link alla lista nozze */}
        <div className="ws-placeholder-block" style={{ marginTop: "2rem" }}>
          <p>💝 TODO — IBAN o link lista nozze per contribuire al viaggio</p>
        </div>
      </div>
    </div>
  );
}

// ---- FAQ ----
const FAQS = [
  // TODO: Rispondi a tutte le domande con le informazioni reali
  {
    q: "Dove si svolge il matrimonio?",
    a: "TODO — aggiungere indirizzo completo e indicazioni stradali",
  },
  {
    q: "C'è un dress code?",
    a: "TODO — es. Elegante / Smart casual / Tema colore specifico",
  },
  {
    q: "Ci sono opzioni per i bambini?",
    a: "TODO — indicare se i bambini sono invitati e se ci sono servizi dedicati",
  },
  {
    q: "Come arrivo alla venue?",
    a: "TODO — indicazioni, parcheggio disponibile, eventuale navetta",
  },
  {
    q: "Dove posso dormire?",
    a: "TODO — aggiungere hotel consigliati o B&B nelle vicinanze",
  },
  {
    q: "Posso portare un +1?",
    a: "TODO — specificare la policy sugli accompagnatori",
  },
  {
    q: "Entro quando devo confermare la presenza?",
    a: "TODO — data limite RSVP",
  },
];

function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div
      className="ws-texture-section"
      style={{ minHeight: "100vh", backgroundImage: `url(${texture})` }}
    >
      <div className="ws-page">
        <h1 className="ws-page-title">FAQ</h1>
        <p className="ws-page-sub">Domande frequenti</p>
        {FAQS.map((faq, i) => (
          <div className="ws-faq-item" key={i}>
            <div
              className="ws-faq-q"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.q}
              <span style={{ fontSize: "1.2rem", color: "#c9b49a" }}>
                {open === i ? "−" : "+"}
              </span>
            </div>
            {open === i && <div className="ws-faq-a">{faq.a}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- CONTATTI ----
function ContattiPage() {
  return (
    <div
      className="ws-texture-section"
      style={{ minHeight: "100vh", backgroundImage: `url(${texture})` }}
    >
      <div className="ws-page">
        <h1 className="ws-page-title">Contatti</h1>
        <p className="ws-page-sub">Siamo qui per ogni domanda</p>
        {/* TODO: Sostituisci con il numero reale di Silvia */}
        <div className="ws-placeholder-block">
          <p>📱 TODO — Telefono Silvia: +39 000 000 0000</p>
        </div>
        {/* TODO: Sostituisci con il numero reale di Davide */}
        <div className="ws-placeholder-block">
          <p>📱 TODO — Telefono Davide: +39 000 000 0000</p>
        </div>
        {/* TODO: Sostituisci con l'email di contatto */}
        <div className="ws-placeholder-block">
          <p>✉️ TODO — Email: silvia.davide2027@email.com</p>
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <p
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "2rem",
              color: "#7a6050",
            }}
          >
            Non esitare a scriverci!
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1rem",
              color: "#a08060",
              marginTop: "0.5rem",
            }}
          >
            Risponderemo il prima possibile 🤍
          </p>
        </div>
      </div>
    </div>
  );
}

// ---- ROOT ----
export default function WeddingSite() {
  const [page, setPage] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const countdown = useCountdown(WEDDING_DATE);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [page]);

  const navigate = (id: string) => {
    setPage(id);
    setMenuOpen(false);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="ws-app">
        {/* ── NAV ── */}
        <nav
          className={`ws-nav${scrolled || page !== "home" ? " scrolled" : ""}`}
        >
          <div className="ws-nav-logo" onClick={() => navigate("home")}>
            S &amp; D
          </div>
          <button
            className={`ws-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Apri menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        {/* ── MENU OVERLAY ── */}
        <div className={`ws-menu-overlay${menuOpen ? " open" : ""}`}>
          {NAV_ITEMS.map((item: NavItem) => (
            <a
              key={item.id}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* ── PAGINE ── */}
        {page === "home" && <HomePage countdown={countdown} />}
        {page === "storia" && <StoriaPage />}
        {page === "location" && <LocationPage />}
        {page === "rsvp" && <RSVPPage />}
        {page === "programma" && <ProgrammaPage />}
        {page === "lunadimiele" && <LunaDiMielePage />}
        {page === "faq" && <FAQPage />}
        {page === "contatti" && <ContattiPage />}

        {/* ── FOOTER ── */}
        {/* <footer className="ws-footer"> */}
        {/* TODO: Aggiorna il nome della venue nel footer se vuoi */}
        {/* <p>Silvia &amp; Davide &nbsp;·&nbsp; 20 Giugno 2027 &nbsp;·&nbsp; Con amore 🤍</p> */}
        {/* </footer> */}
      </div>
    </>
  );
}
