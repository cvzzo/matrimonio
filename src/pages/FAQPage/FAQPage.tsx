import { useState } from "react";
import { Link } from "react-router-dom";
import texture from "../../assets/white-texture.png?quality=75&format=webp";
import faqImg from "./Assets/DSC08076.jpg?w=1920&quality=80&format=webp";
import { FAQS } from "../../constants/wedding";
import "./FAQPage.css";

export function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div
      className="ws-texture-section ws-texture-section--full"
      style={{ backgroundImage: `url(${texture})` }}
    >
      <section className="ws-hero-villa">
        <img src={faqImg} alt="FAQ" className="villa" />

        <div className="ws-hero-overlay" />
        <div className="ws-hero-title">
          <h1>F A Q</h1>
        </div>
      </section>
      <div className="ws-page">
        <p className="ws-page-sub">Domande frequenti</p>
        {FAQS.map((faq, i) => (
          <div
            className={`ws-faq-item${open === i ? " open" : ""}`}
            key={i}
          >
            <div
              className="ws-faq-q"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.q}
              <span className="ws-faq-toggle">+</span>
            </div>
            <div className="ws-faq-a-wrap">
              <div className="ws-faq-a">
                <p>{faq.a}</p>
                {faq.to && (
                  <Link className="ws-faq-btn" to={faq.to}>
                    {faq.linkLabel ?? "Vai alla pagina"} →
                  </Link>
                )}
                {faq.href && (
                  <a
                    className="ws-faq-btn"
                    href={faq.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {faq.linkLabel ?? "Apri il link"} →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
