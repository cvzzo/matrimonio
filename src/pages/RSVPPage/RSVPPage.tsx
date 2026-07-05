import texture from "../../assets/white-texture.png";
import "./RSVPPage.css";

export function RSVPPage() {
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
