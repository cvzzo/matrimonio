import "./Home.css";
// Importa il file video invece dell'immagine
import videoBanner from "../../assets/videosilvia.mp4";
import fiori from "../../assets/fiori.svg";
import CountdownComponent from "../../components/countdown/Countdown";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <video
          src={videoBanner}
          className="banner-video"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <h1 className="titolo">Silvia & Davide</h1>
      <h2 className="giorno-matrimonio">20 | GIUGNO | 2027</h2>
      <CountdownComponent />
      <div className="divider" />
      <h2 className="section-title" id="storia">LA NOSTRA STORIA</h2>
      <p className="storia">
        La nostra storia e’ iniziata nel 2015 tra i banchi di scuola. Eravamo il
        giorno e la notte. In poco tempo, senza neanche rendercene conto, ci
        siamo innamorati e la luce del giorno ha iniziato a illuminare anche la
        notte più buia.
      </p>
      <p className="storia">
        Ne abbiamo passate tante, attimi meravigliosi e momenti indimenticabili.
        Anche se a volte il nostro cammino è stato tortuoso, noi siamo sempre
        rimasti uniti e abbiamo superato ogni difficolta’ insieme.
      </p>
      <p className="storia">
        Il primo grande passo l’abbiamo fatto nel 2022, andando a vivere insieme
        e iniziando così a costruire la nostra famiglia. Poco meno di un anno
        dopo è arrivata Nala, la nostra cagnolina. Con lei abbiamo imparato
        l’amore incondizionato, fatto di piccoli gesti quotidiani che non
        necessitano parole.
      </p>
      <p className="storia">
        Dieci anni dopo il nostro primo bacio, il 3 novembre 2025, e’ arrivata
        la proposta tanto attesa. Un istante che ha dato inizio ad un nuovo
        capitolo della nostra vita, un grande passo verso il nostro futuro
        insieme. In quell’attimo abbiamo capito che tutto ciò che avevamo
        costruito, ogni sogno e ogni ostacolo, ci aveva condotti proprio qui.
      </p>
      <p className="storia">
        Siamo pronti a scrivere insieme il resto della nostra storia, a
        sceglierci ancora una volta e a giurarci amore eterno. Non vediamo l’ora
        di condividere questo giorno unico e speciale con voi.
      </p>

      <h2 className="firma">
        Silvia & Davide
      </h2>
      <img src={fiori} alt="Fiori" className="fiori"/>
    </div>
  );
};

export default Home;
