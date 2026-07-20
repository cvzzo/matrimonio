import type { NavItem } from "../types";

export const WEDDING_DATE = new Date("2027-06-20T16:00:00");

// URL embed — formato diretto, nessuna API key richiesta
export const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=45.7000277,9.8411298&z=17&output=embed";

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
  { id: "rsvp", label: "R.S.V.P." },
  { id: "gallery", label: "Gallery" },
  { id: "contatti", label: "Contatti" },
  { id: "faq", label: "FAQ" },
];

export const PROGRAMMA_ITEMS = [
  {
    time: "16:00",
    title: "Arrivo in location",
    desc: "Vi aspettiamo a Villa Canton per dare inizio alla nostra giornata.",
    icon: "pin",
  },
  {
    time: "16:30",
    title: "Tisana fresca di benvenuto",
    desc: "Un momento di relax per accogliervi prima della cerimonia.",
    icon: "tea",
  },
  {
    time: "17:00",
    title: "Cerimonia civile",
    desc: "Ci scambieremo le promesse davanti a voi, nel parco della villa.",
    icon: "rings",
  },
  {
    time: "18:00",
    title: "Aperitivo in giardino",
    desc: "Festeggiamo insieme tra i profumi del giardino all'italiana.",
    icon: "cocktail",
  },
  {
    time: "19:30",
    title: "Cena",
    desc: "La festa continua a tavola, tutti insieme.",
    icon: "dinner",
  },
  {
    time: "21:00",
    title: "Taglio della torta e first dance",
    desc: "Il momento più dolce della serata, da condividere con tutti voi.",
    icon: "cake",
  },
  {
    time: "21:30",
    title: "Buffet di dolci",
    desc: "Golosità per tutti gli ospiti.",
    icon: "dessert",
  },
  {
    time: "23:00",
    title: "Si balla!",
    desc: "La pista si apre: musica e festa fino a notte fonda.",
    icon: "disco",
  },
];

export const RSVP_DEADLINE = "20 Aprile 2027";

export const DRESS_CODE_AVOID = [
  {
    color: "Bianco",
    hex: "#ffffff",
    note: "come da tradizione, lasciamolo alla sposa",
  },
  {
    color: "Azzurro",
    hex: "#a9c4da",
    note: "riservato allo sposo e ai testimoni",
  },
  {
    color: "Lilla",
    hex: "#c7b3dd",
    note: "il colore scelto per le damigelle",
  },
  {
    color: "Nero",
    hex: "#2a2a2a",
    note: "non adatto a un giorno così speciale",
  },
  {
    color: "Rosso",
    hex: "#a83a2c",
    note: "non adatto a un giorno così speciale",
  },
];

export const FAQS = [
  // TODO: Rispondi a tutte le domande con le informazioni reali
  {
    q: "Dove si svolge il matrimonio?",
    a: "TODO — aggiungere indirizzo completo e indicazioni stradali",
  },
  {
    q: "C'è un dress code?",
    a: "TODO — es. Elegante / Smart casual / Tema colore specifico",
  },
  {
    q: "Ci sono opzioni per i bambini?",
    a: "TODO — indicare se i bambini sono invitati e se ci sono servizi dedicati",
  },
  {
    q: "Come arrivo alla venue?",
    a: "TODO — indicazioni, parcheggio disponibile, eventuale navetta",
  },
  {
    q: "Dove posso dormire?",
    a: "TODO — aggiungere hotel consigliati o B&B nelle vicinanze",
  },
  {
    q: "Posso portare un +1?",
    a: "TODO — specificare la policy sugli accompagnatori",
  },
  {
    q: "Entro quando devo confermare la presenza?",
    a: "TODO — data limite RSVP",
  },
];
