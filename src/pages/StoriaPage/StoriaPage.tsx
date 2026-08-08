import texture from "../../assets/white-texture.png";
import heroImg from "../GalleryPage/Assets/DSC07998.jpg";
import silvia_piccola from "./Assets/silvia_piccola.jpg";
import davide_piccolo from "./Assets/davide_piccolo.jpg";
import nalapiccola from "./Assets/nala_piccola.jpg";
import maglione from "./Assets/davide_maglione.jpg";
import bacio from "./Assets/bacio.jpg"
import nala_anello from "./Assets/NALA_ANELLO.jpg";
import { FlowerDecoration } from "../../components/FlowerDecoration/FlowerDecoration";
import "./StoriaPage.css";

export function StoriaPage() {
  return (
    <div
      className="ws-texture-section ws-texture-section--full"
      style={{ backgroundImage: `url(${texture})` }}
    >
      <section className="ws-hero-villa">
        <img src={heroImg} alt="La nostra storia" className="villa" />

        <div className="ws-hero-overlay" />
        <div className="ws-hero-title">
          <h1>La nostra storia</h1>
        </div>
      </section>
      <div className="ws-page">
        <div className="ws-letter">
          <div className="capitolo-storia">
            <h2 className="titolo-capitolo-storia">Le nostre radici</h2>
            <p style={{ textAlign: "center" }}>
              La nostra storia inizia molto prima di quel giorno del 2015 in cui
              ci siamo incontrati.
            </p>
            <div className="capitolo-storia-row">
              <img
                className="capitolo-storia-img"
                src={davide_piccolo}
                width="200"
                height="200"
                alt="Immagine della nostra storia"
              />
              <p>
                L'8 aprile 1994 nasce Davide: un bambino tranquillo,
                infinitamente curioso e pasticcione. Cresce più al mare che a
                casa, passando ogni weekend tra spiagge, sole e compiti di
                scuola sotto l’ombrellone. Ama giocare con suo fratello, aiutare
                la mamma in cucina e, già da allora, possiede un talento che non
                l'ha mai abbandonato: addormentarsi praticamente ovunque e in
                tempo record.
              </p>
            </div>
            <div className="capitolo-storia-row capitolo-storia-row--img-right">
              <img
                className="capitolo-storia-img"
                src={silvia_piccola}
                width="200"
                height="200"
                alt="Immagine della nostra storia"
              />
              <p>
                Due anni dopo, il 6 marzo 1996, nasce Silvia: una bambina con il
                caschetto nero, la frangetta e un sorriso contagioso.
                Paffutella, piena di energia e creatività, trascorre le giornate
                tra corsi di danza, colori e fogli da riempire di disegni. Ama
                giocare con le Barbie insieme al suo papà, andare in bicicletta
                con il nonno e circondarsi di tutto ciò che è rosa. Quando in
                televisione iniziava il Festivalbar era impossibile tenerla
                ferma: ballava e cantava per tutta la casa.
              </p>
            </div>
            <p>
              Per anni le nostre vite scorrono su strade diverse. Silvia sceglie
              la scuola di moda e i corsi di canto nel pomeriggio, mentre Davide
              frequenta l'istituto per geometri e la sua amata palestra. Due
              percorsi differenti, due caratteri diversi, due mondi che ancora
              non sanno di essere destinati a incontrarsi. Ma il destino aveva
              altri piani.
            </p>
          </div>
          <div className="capitolo-storia">
            <h2 className="titolo-capitolo-storia">Destinati ad incontrarci</h2>
            <div className="capitolo-storia-row">
              <img
                className="capitolo-storia-img"
                src={maglione}
                width="200"
                height="200"
                alt="Immagine della nostra storia"
              />
              <p>
                Terminati gli studi superiori, entrambi decidiamo di seguire ciò
                che ci appassiona davvero. Silvia realizza il sogno che
                custodisce fin da bambina: diventare parrucchiera. Del resto,
                aveva già allenato le sue capacità tagliando e colorando i
                capelli di tutte le sue bambole. Davide, invece, ha da tempo
                trasformato il suo tempo libero in una piccola barberia
                improvvisata, tagliando i capelli agli amici e scoprendo una
                passione sempre più forte per questo mestiere. Così, nel 2015,
                ci ritroviamo tra i banchi del corso per parrucchieri a Monza.
              </p>
            </div>
            <div className="capitolo-storia-row capitolo-storia-row--img-right">
              <img
                className="capitolo-storia-img"
                src={bacio}
                width="200"
                height="200"
                alt="Immagine della nostra storia"
              />{" "}
              <p>
                Per Silvia non era un periodo semplice: arrivava da momenti
                difficili e da un capitolo della sua vita che aveva lasciato
                profonde ferite. Ma proprio quando meno se lo aspettava, è
                arrivato Davide. Con la sua calma, la sua semplicità e la sua
                capacità di rendere tutto più leggero, è riuscito a riportare il
                sereno dove prima c'era confusione. Inizialmente eravamo
                semplicemente due compagni di corso. Poi sono arrivati i
                messaggi, le chiacchiere, le risate e il desiderio di
                trascorrere del tempo insieme anche fuori dalla scuola. Giorno
                dopo giorno abbiamo scoperto quanto fosse bello condividere non
                solo una passione, ma anche sogni, valori e progetti. E senza
                accorgercene, in poco tempo, ci siamo innamorati.
              </p>
            </div>
          </div>
          <div className="capitolo-storia">
            <h2 className="titolo-capitolo-storia">Un amore che cresce</h2>
            <div className="capitolo-storia-row">
              <img
                className="capitolo-storia-img"
                src={nalapiccola}
                width="200"
                height="200"
                alt="Immagine della nostra storia"
              />
              <p>
                Dopo sette anni insieme, nel 2022, decidiamo di compiere uno dei
                passi più importanti della nostra storia: andare a convivere.
                Inizia così una nuova avventura fatta di quotidianità, sogni
                condivisi e nuove responsabilità. La nostra casa diventa il
                luogo perfetto dove costruire, giorno dopo giorno, il nostro
                futuro. A inizio 2023 Nala entra ufficialmente nelle nostre
                vite, conquistando immediatamente il suo posto nel cuore e nella
                famiglia. Da quel giorno le nostre giornate sono diventate più
                allegre, movimentate e... sicuramente più pelose! Per noi Nala è
                molto più di un cane: è la nostra bambina, la nostra compagna di
                avventure e una delle più grandi gioie della nostra vita. Negli
                anni abbiamo affrontato momenti bellissimi, ma anche sfide e
                difficoltà. Ogni ostacolo, però, ci ha insegnato qualcosa e ci
                ha resi più forti, più uniti e più consapevoli del valore del
                nostro amore. E poi arriva il 3 novembre 2025...
              </p>
            </div>
          </div>
          <div className="capitolo-storia">
            <h2 className="titolo-capitolo-storia">La proposta</h2>
            <div className="capitolo-storia-row capitolo-storia-row--img-right">
              <img
                className="capitolo-storia-img"
                src={nala_anello}
                width="200"
                height="200"
                alt="Immagine della nostra storia"
              />{" "}
              <p>
                Dopo anni di attesa, sogni e qualche velata domanda del tipo
                "allora, quando?", Davide decide che è arrivato il momento di
                fare la domanda più importante. Nessun castello da favola,
                nessuna folla, nessun gesto eclatante. Solo un video in
                televisione: un modo semplice ma profondamente sincero per dire
                alla ragazza giusta che è l'amore della sua vita. E mentre
                Silvia, rigorosamente in pigiama, piange senza riuscire a
                trattenere l'emozione, Davide si inginocchia e le mette l'anello
                al dito. Lei dice sì. Qualcuno potrebbe pensare che questo sia
                il lieto fine della nostra storia. Ma non lo è. Perché questo
                non è il finale: è semplicemente il primo capitolo del resto
                della nostra vita insieme. E non vediamo l’ora di viverlo
                circondati dalle persone che amiamo.
              </p>
            </div>
          </div>
        </div>
        <div className="ws-letter-signature">Silvia &amp; Davide</div>
      </div>
      <FlowerDecoration />
    </div>
  );
}
