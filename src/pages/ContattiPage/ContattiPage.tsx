import texture from "../../assets/white-texture.png";
import "./ContattiPage.css";

export function ContattiPage() {
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
        <div className="ws-contatti-outro">
          <p className="ws-contatti-outro-title">Non esitare a scriverci!</p>
          <p className="ws-contatti-outro-sub">
            Risponderemo il prima possibile 🤍
          </p>
        </div>
      </div>
    </div>
  );
}
