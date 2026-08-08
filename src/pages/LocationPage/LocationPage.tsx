import texture from "../../assets/white-texture.png";
import villa from "../../assets/villa.jpg";
import { FlowerDecoration } from "../../components/FlowerDecoration/FlowerDecoration";
import { MapSection } from "../../components/MapSection/MapSection";

export function LocationPage() {
  return (
    <div
      className="ws-texture-section ws-texture-section--full"
      style={{ backgroundImage: `url(${texture})` }}
    >
      <section className="ws-hero-villa">
        <img src={villa} alt="Villa Canton" className="villa" />

        <div className="ws-hero-overlay" />
        <div className="ws-hero-title">
          <h1>Villa Canton</h1>
          <p>Trescore Balneario (BG)</p>
        </div>
      </section>
      <div className="ws-page">
        <div className="ws-letter">
        <MapSection />
          <p>
            Immersa nella splendida tenuta settecentesca di Trescore
            Balneario, questa magnifica villa è circondata da un parco
            secolare e da un suggestivo giardino all'italiana, un luogo dove
            eleganza, storia e natura si incontrano creando un'atmosfera
            davvero unica.
          </p>
          <p>
            La cerimonia civile, l'aperitivo, la cena e i festeggiamenti si
            svolgeranno tutti all'interno della villa, permettendoci di
            condividere ogni momento della giornata insieme, senza
            spostamenti.
          </p>
          <p>
            Vi aspettiamo alle ore 16:00 per dare inizio a questa meravigliosa
            serata, che proseguirà tra emozioni, buon cibo, musica e tante
            occasioni per festeggiare insieme.
          </p>
          <p>
            Per chi arriverà in auto, è disponibile un comodo parcheggio
            gratuito, direttamente in loco, situato di fronte all'ingresso
            della Villa.
          </p>
          <p>
            Non vediamo l'ora di accogliervi e vivere con noi ogni istante di
            questa giornata speciale.
          </p>
        </div>
      </div>
      <FlowerDecoration />
    </div>
  );
}
