import { useState } from "react";
import texture from "../../assets/white-texture.png";
import { FAQS } from "../../constants/wedding";
import "./FAQPage.css";

export function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div
      className="ws-texture-section ws-texture-section--full"
      style={{ backgroundImage: `url(${texture})` }}
    >
      <div className="ws-page">
        <h1 className="ws-page-title">FAQ</h1>
        <p className="ws-page-sub">Domande frequenti</p>
        {FAQS.map((faq, i) => (
          <div className="ws-faq-item" key={i}>
            <div
              className="ws-faq-q"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.q}
              <span className="ws-faq-toggle">
                {open === i ? "−" : "+"}
              </span>
            </div>
            {open === i && <div className="ws-faq-a">{faq.a}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
