import texture from "../../assets/white-texture.png";
import heroImg from "./Assets/DSC08163.jpg";
import "./ContattiPage.css";

export function ContattiPage() {
  return (
    <div
      className="ws-texture-section ws-texture-section--full"
      style={{ backgroundImage: `url(${texture})` }}
    >
      <section className="ws-hero-villa">
        <img src={heroImg} alt="Contatti" className="villa" />

        <div className="ws-hero-overlay" />
        <div className="ws-hero-title">
          <h1>Contatti</h1>
        </div>
      </section>
      <div className="ws-page">
        <p className="ws-page-sub">Siamo qui per ogni domanda</p>
        <a
          className="ws-placeholder-block ws-contatti-link"
          href="https://wa.me/393486546406"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>💬 Silvia: +39 348 654 6406</p>
        </a>
        <a
          className="ws-placeholder-block ws-contatti-link"
          href="https://wa.me/393388097059"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>💬 Davide: +39 338 809 7059</p>
        </a>
        <a
          className="ws-placeholder-block ws-contatti-link"
          href="mailto:silviaedavide2027@gmail.com"
        >
          <p>✉️ silviaedavide2027@gmail.com</p>
        </a>
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
