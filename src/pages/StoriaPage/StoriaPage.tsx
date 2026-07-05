import texture from "../../assets/white-texture.png";
import foto_quadrata from "../../assets/SILVIA_PICCOLA.jpg";
import { FlowerDecoration } from "../../components/FlowerDecoration/FlowerDecoration";
import "./StoriaPage.css";

export function StoriaPage() {
  return (
    <div
      className="ws-texture-section"
      style={{ minHeight: "100vh", backgroundImage: `url(${texture})` }}
    >
      <div className="ws-page">
        <h1 className="ws-page-title">La Nostra Storia</h1>

        <div className="ws-letter">
          <div className="capitolo-storia">
            <h2>Le nostre radici</h2>
            <p>
              La nostra storia inizia molto prima di quel giorno del 2015 in cui
              ci siamo incontrati.
            </p>
            <div style={{ textAlign: "left", margin: "2rem 0", display: "flex", alignItems: "start", gap: "2rem" }}>

            <img src={foto_quadrata} width="200" height="200" alt="Immagine della nostra storia" />
            <p>
              L'8 aprile 1994 nasce Davide: un bambino tranquillo, con la
              battuta sempre pronta e una passione per il calcio. Cresce più al
              mare che a casa, passando ogni weekend tra spiagge, sole e compiti
              di scuola. Ama fare il giullare con amici e parenti, aiutare la
              sua mamma in cucina e, già da allora, possiede un talento che non
              l'ha mai abbandonato: addormentarsi praticamente ovunque e in
              tempo record.
            </p>
            </div>
            <p>
              Due anni dopo, il 6 marzo 1996, nasce Silvia. Una bambina con il
              caschetto nero, la frangetta e un sorriso contagioso. Paffutella,
              piena di energia e creatività, trascorre le giornate tra corsi di
              danza, colori, pennelli e fogli da riempire di disegni. Ama
              giocare con le Barbie insieme al suo papà, andare in bicicletta
              con il nonno e circondarsi di tutto ciò che è rosa. Quando in
              televisione iniziava il Festivalbar, era impossibile tenerla
              ferma: ballava per tutta casa come se fosse sul palco.
            </p>
            <p>
              Le nostre vite scorrono per anni su strade diverse. Silvia sceglie
              la scuola di moda, e i corsi di canto e pianoforte nel pomeriggio,
              mentre Davide frequenta l'istituto per geometri e la sua amata
              palestra. Due percorsi differenti, due caratteri diversi, due
              mondi che ancora non sanno di essere destinati a incontrarsi. Ma
              il destino aveva altri piani.
            </p>
          </div>
          <div className="capitolo-storia">
            <h2>Destinati ad incontrarci</h2>
            <p>
              Terminati gli studi superiori, entrambi decidiamo di seguire ciò
              che ci appassiona davvero. Silvia realizza il sogno che custodisce
              fin da bambina: diventare parrucchiera. Del resto, aveva già
              allenato le sue capacità tagliando e colorando i capelli di tutte
              le sue bambole. Davide, invece, aveva da tempo trasformato il suo
              tempo liberò in una piccola barberia improvvisata, tagliando i
              capelli agli amici e scoprendo una passione sempre più forte per
              questo mestiere. Così, nel 2015, ci ritroviamo tra i banchi del
              corso per parrucchieri a Monza.
            </p>
            <p>
              Per Silvia non era un periodo semplice: arrivava da momenti
              difficili e da un capitolo della sua vita che aveva lasciato
              profonde ferite. Ma proprio quando meno se lo aspettava, è
              arrivato Davide. Con la sua calma, la sua semplicità e la sua
              capacità di rendere tutto più leggero, è riuscito a riportare
              serenità dove prima c'era confusione. Inizialmente eravamo
              semplicemente due compagni di corso. Poi sono arrivati i messaggi,
              le chiacchiere, le risate e il desiderio di trascorrere del tempo
              insieme anche fuori dalla scuola. Giorno dopo giorno abbiamo
              scoperto quanto fosse bello condividere non solo una passione, ma
              anche sogni, valori e progetti. E senza quasi accorgercene, ci
              siamo innamorati.
            </p>
          </div>
          <div className="capitolo-storia">
            <h2>Un amore che cresce</h2>
            <p>
              Dopo sette anni insieme, nel 2022, decidiamo di compiere uno dei
              passi più importanti della nostra storia: andare a convivere.
              Inizia così una nuova avventura fatta di quotidianità, sogni
              condivisi, progetti e nuove responsabilità. La nostra casa diventa
              il luogo dove costruire, giorno dopo giorno, il nostro futuro.
              A inizio 2023 Nala, la nostra cagnolina, entra ufficialmente
              nelle nostre vite e conquista immediatamente il suo posto nel
              cuore e nella famiglia. Da quel giorno le nostre giornate sono
              diventate più allegre, più movimentate e sicuramente più pelose.
              Per noi Nala è molto più di un cane: è la nostra bambina, la
              nostra compagna di avventure e una delle più grandi gioie della
              nostra vita. Negli anni abbiamo affrontato momenti bellissimi, ma
              anche sfide e difficoltà. Ogni ostacolo, però, ci ha insegnato
              qualcosa e ci ha resi più forti, più uniti e più consapevoli del
              valore del nostro amore. E poi arriva il 3 novembre 2025...
            </p>
          </div>
          <div className="capitolo-storia">
            <h2>La proposta</h2>
          </div>
          <p>
            Dopo anni di attesa, sogni e qualche velata domanda del tipo
            "allora, quando?", Davide decide che è arrivato il momento di fare
            la domanda più importante. Nessun castello da favola, nessuna folla,
            nessun gesto eclatante. Solo un video in televisione, un modo
            semplice ma profondamente sincero per dire alla ragazza giusta che è
            l'amore della sua vita. E mentre Silvia, rigorosamente in pigiama,
            piange senza riuscire a trattenere l'emozione, Davide si inginocchia
            e le mette l'anello al dito.
          </p>
          <p>Lei dice sì.</p>
          <p>
            Qualcuno potrebbe pensare che questo sia il lieto fine della nostra
            storia. Ma non lo è. Perché questo non è il finale. È semplicemente
            il primo capitolo del resto della nostra vita insieme. E non vediamo
            l'ora di viverlo circondati dalle persone che amiamo.
          </p>
        </div>
        <div className="ws-letter-signature">Silvia &amp; Davide</div>
      </div>
      <FlowerDecoration />
    </div>
  );
}
