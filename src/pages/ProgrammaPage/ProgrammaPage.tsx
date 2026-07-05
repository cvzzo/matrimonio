import texture from "../../assets/white-texture.png";
import { PROGRAMMA_ITEMS } from "../../constants/wedding";
import "./ProgrammaPage.css";

export function ProgrammaPage() {
  return (
    <div
      className="ws-texture-section"
      style={{ minHeight: "100vh", backgroundImage: `url(${texture})` }}
    >
      <div className="ws-page">
        <h1 className="ws-page-title">Il Programma</h1>
        {/* TODO: Aggiorna la data se cambia */}
        <p className="ws-page-sub">20 Giugno 2027</p>
        <div className="ws-placeholder-block" style={{ marginBottom: "3rem" }}>
          <p>📍 Villa Canton · Via G. Paglia 18, Trescore Balneario (BG)</p>
        </div>
        <div className="ws-timeline">
          {PROGRAMMA_ITEMS.map((item) => (
            <div className="ws-tl-item" key={item.time}>
              <div className="ws-tl-time">{item.time}</div>
              <div className="ws-tl-title">{item.title}</div>
              <div className="ws-tl-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
