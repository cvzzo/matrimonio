import texture from "../../assets/white-texture.png";
import villa from "../../assets/villa.jpg";
import { FlowerDecoration } from "../../components/FlowerDecoration/FlowerDecoration";
import { MapSection } from "../../components/MapSection/MapSection";
import "./LocationPage.css";

export function LocationPage() {
  return (
    <div
      className="ws-texture-section"
      style={{ minHeight: "100vh", backgroundImage: `url(${texture})` }}
    >
      <section className="ws-hero-villa">
        <img src={villa} alt="Villa Canton" className="villa" />

        <div className="ws-hero-overlay" />
        <div className="ws-hero-title">
          <h1>Villa Canton</h1>
          {/* TODO: Verifica che la data sia corretta */}
          <p>Trescore Balneario (BG)</p>
        </div>
      </section>
      <div className="ws-page">
        <MapSection />
      </div>
      <FlowerDecoration />
    </div>
  );
}
