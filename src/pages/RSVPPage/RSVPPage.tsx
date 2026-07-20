import texture from "../../assets/white-texture.png";
import { RSVP_DEADLINE } from "../../constants/wedding";
import "./RSVPPage.css";

export function RSVPPage() {
  return (
    <div
      className="ws-texture-section ws-texture-section--full"
      style={{ backgroundImage: `url(${texture})` }}
    >
      <div className="ws-page">
        <h1 className="ws-page-title">RSVP</h1>
        <p className="ws-page-sub">Ci sarete?</p>
        <div className="ws-letter">
          <p style={{ textAlign: "center" }}>
            Per aiutarci a organizzare tutto al meglio, vi chiediamo la
            cortesia di confermare la vostra presenza entro e non oltre il{" "}
            {RSVP_DEADLINE}.
          </p>
          <p style={{ textAlign: "center" }}>
            Qui sotto potrete confermare per voi e per la vostra famiglia,
            segnalandoci eventuali allergie, intolleranze o menù speciali.
          </p>
        </div>
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
          <label>Tipo di menù</label>
          <select>
            <option>Adulto</option>
            <option>Bambino (sotto i 9 anni)</option>
          </select>
          <label>Allergie o intolleranze</label>
          <textarea
            rows={3}
            placeholder="Scrivi qui eventuali allergie, intolleranze o menù speciali..."
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
