import texture from "../../assets/white-texture.png";
import heroImg from "./Assets/DSC08239.jpg";
import { DRESS_CODE_AVOID } from "../../constants/wedding";
import "./DressCodePage.css";

export function DressCodePage() {
  return (
    <div
      className="ws-texture-section ws-texture-section--full"
      style={{ backgroundImage: `url(${texture})` }}
    >
      <section className="ws-hero-villa">
        <img src={heroImg} alt="Dress Code" className="villa" />

        <div className="ws-hero-overlay" />
        <div className="ws-hero-title">
          <h1>Dress Code</h1>
        </div>
      </section>
      <div className="ws-page">
        <p className="ws-page-sub">
          Non vediamo l'ora di vedervi al nostro grande giorno!
        </p>
        <div className="ws-letter">
          <p style={{ textAlign: "center" }}>
            L'abito perfetto è quello che vi fa sentire bene, ma per aiutarvi
            nella scelta della palette, vi lasciamo alcune indicazioni. Abbiamo
            riservato alcuni colori speciali per noi, per i testimoni e per le
            damigelle.{" "}
          </p>
          <p style={{ textAlign: "center", fontWeight: "bolder", color: "#263E5F", textTransform: "uppercase" }}>
            Vi chiediamo quindi di evitare:
          </p>
        </div>
        <div className="ws-dc-grid">
          {DRESS_CODE_AVOID.map(({ color, hex, note }) => (
            <div className="ws-dc-card" key={color}>
              <span className="ws-dc-swatch" style={{ background: hex }} />
              <h3>{color}</h3>
              <p>{note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
