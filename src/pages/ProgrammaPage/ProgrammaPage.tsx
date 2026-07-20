import texture from "../../assets/white-texture.png";
import { PROGRAMMA_ITEMS } from "../../constants/wedding";
import { PROGRAMMA_ICONS } from "./ProgrammaIcons";
import "./ProgrammaPage.css";

export function ProgrammaPage() {
  return (
    <div
      className="ws-texture-section ws-texture-section--full"
      style={{ backgroundImage: `url(${texture})` }}
    >
      <div className="ws-page">
        <h1 className="ws-page-title">Il Programma</h1>
        {/* TODO: Aggiorna la data se cambia */}
        <p className="ws-page-sub">20 Giugno 2027</p>
        <div className="ws-placeholder-block ws-programma-venue">
          <p>📍 Villa Canton · Via G. Paglia 18, Trescore Balneario (BG)</p>
        </div>
        <div className="ws-tlv2">
          {PROGRAMMA_ITEMS.map((item, i) => {
            const isLeft = i % 2 === 0;
            const textBlock = (
              <div className="ws-tlv2-text">
                <div className="ws-tlv2-title">{item.title}</div>
                <div className="ws-tlv2-time-row">
                  {isLeft ? (
                    <>
                      <span className="ws-tlv2-time">{item.time}</span>
                      <span className="ws-tlv2-dash" />
                    </>
                  ) : (
                    <>
                      <span className="ws-tlv2-dash" />
                      <span className="ws-tlv2-time">{item.time}</span>
                    </>
                  )}
                </div>
                <div className="ws-tlv2-desc">{item.desc}</div>
              </div>
            );
            const IconComponent = PROGRAMMA_ICONS[item.icon];
            return (
              <div className="ws-tlv2-row" key={item.time}>
                <div className="ws-tlv2-col ws-tlv2-side--left">
                  {isLeft && textBlock}
                </div>
                <div className="ws-tlv2-node">
                  <IconComponent className="ws-tlv2-icon-svg" />
                </div>
                <div className="ws-tlv2-col ws-tlv2-side--right">
                  {!isLeft && textBlock}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
