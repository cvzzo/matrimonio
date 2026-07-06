import texture from "../../assets/white-texture.png";
import "./LunaDiMielePage.css";

export function LunaDiMielePage() {
  return (
    <div
      className="ws-texture-section ws-texture-section--full"
      style={{ backgroundImage: `url(${texture})` }}
    >
      <div className="ws-page">
        <h1 className="ws-page-title">Luna di Miele</h1>
        <p className="ws-page-sub">Il nostro viaggio da sogno</p>
        {/* TODO: Aggiungi destinazione e descrizione narrativa del viaggio */}
        <div className="ws-placeholder-block">
          <p>🌍 TODO — Destinazione e descrizione del viaggio</p>
        </div>
        <div className="ws-lm-grid">
          {[
            {
              label: "Destinazione",
              todo: "TODO — es. Maldive, Giappone, Polinesia…",
            },
            { label: "Periodo", todo: "TODO — es. Luglio 2027" },
            {
              label: "Wishlist",
              todo: "TODO — esperienze e attività desiderate",
            },
            {
              label: "Come contribuire",
              todo: "TODO — link lista nozze o istruzioni bonifico",
            },
          ].map(({ label, todo }) => (
            <div className="ws-lm-card" key={label}>
              <h3>{label}</h3>
              <p className="ws-lm-todo">{todo}</p>
            </div>
          ))}
        </div>
        {/* TODO: Inserisci IBAN o link alla lista nozze */}
        <div className="ws-placeholder-block ws-lm-outro">
          <p>💝 TODO — IBAN o link lista nozze per contribuire al viaggio</p>
        </div>
      </div>
    </div>
  );
}
