import texture from "../../assets/white-texture.png";
import nalaAnello from "../../assets/NALA_ANELLO.jpg";
import hero from "../../assets/hero.png";
import "./GalleryPage.css";

export function GalleryPage() {
  return (
    <div
      className="ws-texture-section ws-texture-section--full"
      style={{ backgroundImage: `url(${texture})` }}
    >
      <div className="ws-page">
        <h1 className="ws-page-title">Gallery</h1>
        <div className="ws-letter">
          <p className="citazione" style={{ textAlign: "center" }}>
            "Di qualsiasi cosa siano fatte le nostre anime, la mia e la sua
            sono uguali"
          </p>
        </div>
        <div className="citazione-nome">Emily Brontë</div>
        {/* TODO: Sostituire con le foto scattate in Corsica */}
        <div className="ws-gallery-grid">
          <img src={hero} alt="Silvia e Davide" className="ws-gallery-img" />
          <img
            src={nalaAnello}
            alt="Nala con l'anello"
            className="ws-gallery-img"
          />
          <div className="ws-gallery-placeholder">
            <p>📷 TODO — foto Corsica</p>
          </div>
          <div className="ws-gallery-placeholder">
            <p>📷 TODO — foto Corsica</p>
          </div>
        </div>
      </div>
    </div>
  );
}
