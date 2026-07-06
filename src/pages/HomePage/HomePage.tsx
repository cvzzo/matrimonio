import texture from "../../assets/white-texture.png";
import video from "../../assets/video.mp4";
import { Divider } from "../../components/Divider/Divider";
import { FlowerDecoration } from "../../components/FlowerDecoration/FlowerDecoration";
import type { CountdownTime } from "../../types";
import "./HomePage.css";

interface HomePageProps {
  countdown: CountdownTime;
}

export function HomePage({ countdown }: HomePageProps) {
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
          <div className="ws-countdown-grid">
            {(
              [
                { val: countdown.giorni, label: "Giorni" },
                { val: countdown.ore, label: "Ore" },
                { val: countdown.minuti, label: "Minuti" },
                { val: countdown.secondi, label: "Secondi" },
              ] as { val: number; label: string }[]
            ).map((item, i) => (
              <span key={item.label} className="ws-countdown-col">
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
          <div className="ws-letter">
            <p className="citazione">
              "Incontri milioni di persone e nessuno ti tocca veramente.
              <p>Poi incontri una persona, e la tua vita cambia per sempre."</p>
            </p>
          </div>
          <div className="citazione-nome">Fëdor Dostoevskij</div>
        </section>

        {/* FIORI */}
        <FlowerDecoration />
      </div>
    </div>
  );
}
