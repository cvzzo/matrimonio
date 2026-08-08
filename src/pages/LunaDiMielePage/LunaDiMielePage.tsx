import texture from "../../assets/white-texture.png";
import heroImg from "./Assets/DSC08339.jpg";
import "./LunaDiMielePage.css";

export function LunaDiMielePage() {
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
          <p style={{ textAlign: "center" }}>
            Il regalo più grande che possiate farci è la vostra presenza nel
            nostro giorno più speciale, ma se desiderate accompagnarci anche
            nei nostri primi passi da marito e moglie, abbiamo deciso di
            raccogliere i vostri pensieri per la nostra luna di miele.
          </p>
          <p>
            La meta che abbiamo scelto è la Sardegna, un'isola magica, che
            amiamo profondamente. Ci lasceremo cullare dalle meraviglie di
            Chia, e dalla sua spettacolare costa di Su Giudeu, con le sue dune
            di sabbia dorata e un mare così cristallino da togliere il fiato.
          </p>
          <p>
            Ma c'è un motivo ancora più speciale che ci ha fatto battere il
            cuore per questa destinazione: la possibilità di avere accanto a
            noi Nala, la nostra cagnolina. Lei è a tutti gli effetti un
            membro della nostra famiglia e non potevamo immaginare di
            iniziare questo nuovo capitolo senza la sua allegria e le
            impronte delle sue zampine sulla sabbia accanto alle nostre.
          </p>
          <p style={{ textAlign: "center" }}>Grazie di cuore,</p>
        </div>
        <div className="ws-letter-signature">Silvia &amp; Davide</div>
        {/* TODO: Inserisci IBAN, intestatario e causale */}
        <div className="ws-placeholder-block ws-lm-outro">
          <p>💝 IBAN: TODO</p>
          <p>Intestato a: TODO</p>
          <p>Causale: TODO</p>
        </div>
      </div>
    </div>
  );
}
