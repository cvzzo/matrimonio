import { useState } from "react";
import texture from "../../assets/white-texture.png?quality=75&format=webp";
import heroImg from "./Assets/DSC08339.jpg?w=1920&quality=80&format=webp";
import "./LunaDiMielePage.css";

const IBAN = "IT81D0301503200000006240105";
const INTESTATARIO = "Silvia & Davide";

export function LunaDiMielePage() {
  const [copied, setCopied] = useState(false);

  async function copyIban() {
    try {
      await navigator.clipboard.writeText(IBAN);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard non disponibile */
    }
  }

  return (
    <div
      className="ws-texture-section ws-texture-section--full"
      style={{ backgroundImage: `url(${texture})` }}
    >
      <section className="ws-hero-villa">
        <img src={heroImg} alt="Viaggio di Nozze" className="villa" />

        <div className="ws-hero-overlay" />
        <div className="ws-hero-title">
          <h1>Viaggio di Nozze</h1>
        </div>
      </section>
      <div className="ws-page">
        <p className="ws-page-sub">Sardegna · Chia</p>
        <div className="ws-letter">
          <p>
            Verso la Nostra Luna di Miele La vostra presenza nel nostro giorno
            più bello è in assoluto il regalo più grande che potessimo
            desiderare.
            <br />
            Condividere questo inizio con le persone che amiamo è ciò che
            renderà tutto davvero magico. Se oltre al vostro affetto e ai vostri
            sorrisi desiderate aiutarci a realizzare un piccolo grande sogno,
            potete regalarci un pezzetto della nostra Luna di Miele.
            <br />
            La destinazione è ancora tutta da decidere, ma stiamo già sognando
            il nostro primo viaggio da marito e moglie: un'avventura speciale
            dove collezionare i primi ricordi di questa nuova vita insieme.
            <br />
            Grazie di cuore per camminare al nostro fianco e per aiutarci a
            spiccare il volo verso questo nuovo inizio!
          </p>
        </div>
        <div className="ws-letter-signature">Silvia &amp; Davide</div>

        <div className="ws-gift-card">
          <h3 className="ws-gift-title">Un pensiero per il viaggio</h3>
          <div className="ws-gift-row">
            <span className="ws-gift-label">IBAN</span>
            <span className="ws-gift-value ws-gift-iban">{IBAN}</span>
          </div>
          <div className="ws-gift-row">
            <span className="ws-gift-label">Intestato a</span>
            <span className="ws-gift-value">{INTESTATARIO}</span>
          </div>
          <div className="ws-gift-row">
            <span className="ws-gift-label">Causale</span>
            <span className="ws-gift-value">Regalo di Nozze</span>
          </div>
          <button
            type="button"
            className="ws-gift-copy"
            onClick={copyIban}
          >
            {copied ? "IBAN copiato ✓" : "Copia IBAN"}
          </button>
        </div>
      </div>
    </div>
  );
}
