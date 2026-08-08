import type { NavItem } from "../types";

export const WEDDING_DATE = new Date("2027-06-20T16:00:00");

// URL embed — formato diretto, nessuna API key richiesta
// export const MAPS_EMBED_URL =
//   "https://maps.google.com/maps?q=45.7000277,9.8411298&z=17&output=embed";

export const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/place/Villa+Canton/@45.7000314,9.8385495,17z/data=!3m1!4b1!4m6!3m5!1s0x47815c1ab61e55d5:0x9e7b9c902b300478!8m2!3d45.7000277!4d9.8411298!16s%2Fg%2F1v_0hmcx?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D";

export const VENUE_NAME = "Villa Canton";
export const VENUE_ADDRESS = "Via G. Paglia, 18, 24069 Trescore Balneario BG";

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "storia", label: "La Nostra Storia" },
  { id: "location", label: "Location" },
  { id: "programma", label: "Programma" },
  { id: "dresscode", label: "Dress Code" },
  { id: "lunadimiele", label: "Luna di Miele" },
  { id: "rsvp", label: "RSVP" },
  { id: "gallery", label: "Gallery" },
  { id: "contatti", label: "Contatti" },
  { id: "faq", label: "FAQ" },
];

export const PROGRAMMA_ITEMS = [
  {
    time: "16:00",
    title: "Arrivo in location",
    desc: "Vi aspettiamo per dare inizio alla nostra giornata",
    icon: "pin",
  },
  {
    time: "16:30",
    title: "Tisana fresca di benvenuto",
    desc: "Un momento di relax per accogliervi prima della cerimonia",
    icon: "tea",
  },
  {
    time: "17:00",
    title: "Cerimonia civile",
    desc: "Scambio delle promesse nel parco della villa",
    icon: "rings",
  },
  {
    time: "18:00",
    title: "Aperitivo in giardino",
    desc: "Festeggiamo insieme tra i profumi del giardino all'italiana",
    icon: "cocktail",
  },
  {
    time: "19:30",
    title: "Cena",
    desc: "La festa continua a tavola tutti insieme",
    icon: "dinner",
  },
  {
    time: "21:00",
    title: "Taglio della torta e first dance",
    desc: "Il momento più dolce ed emozionante della serata",
    icon: "cake",
  },
  {
    time: "21:30",
    title: "Buffet di dolci",
    desc: "Ogni tipo di golosità vi attende per un assaggio",
    icon: "dessert",
  },
  {
    time: "23:00",
    title: "Si balla!",
    desc: "Si scende in pista per scatenarsi fino a notte fonda",
    icon: "confetti",
  },
];

export const RSVP_DEADLINE = "20 Aprile 2027";

export const DRESS_CODE_AVOID = [
  {
    color: "Lilla",
    hexes: ["#c7b3dd"],
    note: "il colore scelto per le damigelle",
  },
  {
    color: "Azzurro",
    hexes: ["#a9c4da"],
    note: "riservato allo sposo e ai testimoni",
  },
  {
    color: "Bianco",
    hexes: ["#ffffff"],
    note: "come da tradizione, lasciamolo alla sposa",
  },
  {
    color: "Rosso e Nero",
    hexes: ["#a83a2c", "#2a2a2a"],
    note: "non adatti a un giorno così speciale",
  },
];

export const FAQS: {
  q: string;
  a: string;
  to?: string;
  href?: string;
  linkLabel?: string;
}[] = [
  // TODO: Rispondi a tutte le domande con le informazioni reali
  {
    q: "Dove si svolge il matrimonio?",
    a: "Il matrimonio si svolgerà presso la splendida Villa Canton, situata a Trescore Balneario (BG).",
    to: "/location",
    linkLabel: "Vai alla location",
  },
  {
    q: "Come arrivo alla location?",
    a: "Villa Canton si trova in Via G. Paglia 18, Trescore Balneario (BG). È disponibile un comodo parcheggio gratuito in loco, proprio di fronte all'ingresso.",
    href: MAPS_DIRECTIONS_URL,
    linkLabel: "Apri Maps",
  },
  {
    q: "C'è un dress code?",
    a: "Vi chiediamo gentilmente di evitare alcuni colori, per maggiori dettagli consultate la sezione Dress Code.",
    to: "/dresscode",
    linkLabel: "Vai al dress code",
  },
  {
    q: "Posso portare un +1?",
    a: "Vi chiediamo gentilmente di contattarci per valutare eventuali ospiti aggiuntivi.",
    to: "/contatti",
    linkLabel: "Contattaci",
  },
  {
    q: "Entro quando devo confermare la presenza?",
    a: "Vi chiediamo di confermare la vostra presenza compilando il form entro e non oltre il 20 Aprile 2027.",
    to: "/rsvp",
    linkLabel: "Vai al form RSVP",
  },
  {
    q: "Ci sono opzioni per i bambini?",
    a: "In location è presente un'area giochi dedicata ai bambini ed è possibile richiedere per loro il menù baby all'interno del form RSVP.",
    to: "/rsvp",
    linkLabel: "Vai al form RSVP",
  },
  {
    q: "Come possiamo fare per il regalo di nozze?",
    a: "Non abbiamo una lista nozze, ma potrete trovare tutte le informaizoni per aiutarci ad organizzare la nostra luna di miele nella sezione dedicata.",
    to: "/lunadimiele",
    linkLabel: "Vai alla Luna di Miele",
  },
  {
    q: "Come si svolgerà la giornata?",
    a: "L'arrivo degli ospiti è previsto per le ore 16:00, il programma completo lo troverete nella pagina dedicata. ",
    to: "/programma",
    linkLabel: "Vai al programma",
  }
];
