import texture from "../../assets/white-texture.png";
import heroImg from "./Assets/DSC08279.jpg";
import { PROGRAMMA_ITEMS } from "../../constants/wedding";
import { PROGRAMMA_ICONS } from "./ProgrammaIcons";
import "./ProgrammaPage.css";

export function ProgrammaPage() {
  return (
    <div
      className="ws-texture-section ws-texture-section--full"
      style={{ backgroundImage: `url(${texture})` }}
    >
      <section className="ws-hero-villa">
        <img src={heroImg} alt="Il Programma" className="villa" />

        <div className="ws-hero-overlay" />
        <div className="ws-hero-title">
          <h1>Il Programma</h1>
        </div>
      </section>
      <div className="ws-page">
        {/* TODO: Aggiorna la data se cambia */}
        {/* <p className="ws-page-sub">20 Giugno 2027</p>
        <div className="ws-placeholder-block ws-programma-venue">
          <p>📍 Villa Canton · Via G. Paglia 18, Trescore Balneario (BG)</p>
        </div> */}
        <div className="ws-tlv2">
          {PROGRAMMA_ITEMS.map((item, i) => {
            const isLeft = i % 2 === 0;
            const IconComponent = PROGRAMMA_ICONS[item.icon];
            return (
              <div
                className={`ws-tlv2-row ${
                  isLeft ? "ws-tlv2-row--left" : "ws-tlv2-row--right"
                }`}
                key={item.time}
              >
                <div className="ws-tlv2-node">
                  <IconComponent className="ws-tlv2-icon-svg" />
                </div>
                <div className="ws-tlv2-text">
                  <span className="ws-tlv2-time">{item.time}</span>
                  <div className="ws-tlv2-title">{item.title}</div>
                  <div className="ws-tlv2-desc">{item.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
