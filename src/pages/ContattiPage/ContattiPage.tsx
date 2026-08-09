import type { SVGProps } from "react";
import texture from "../../assets/white-texture.png?quality=75&format=webp";
import heroImg from "./Assets/DSC08163.jpg?w=1920&quality=80&format=webp";
import "./ContattiPage.css";

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M17.5 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
      <path d="M12 2a10 10 0 0 0-8.5 15.28L2 22l4.85-1.27A10 10 0 1 0 12 2zm0 18.2c-1.5 0-2.98-.4-4.27-1.16l-.31-.18-2.88.76.77-2.8-.2-.32A8.2 8.2 0 1 1 12 20.2z" />
    </svg>
  );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7.5 8 5.5 8-5.5" />
    </svg>
  );
}

export function ContattiPage() {
  return (
    <div
      className="ws-texture-section ws-texture-section--full"
      style={{ backgroundImage: `url(${texture})` }}
    >
      <section className="ws-hero-villa">
        <img src={heroImg} alt="Contatti" className="villa" />

        <div className="ws-hero-overlay" />
        <div className="ws-hero-title">
          <h1>Contatti</h1>
        </div>
      </section>
      <div className="ws-page">
        <p className="ws-contatti-subtitle">Siamo qui per ogni domanda,</p>
          <p className="ws-contatti-outro-title">Non esitare a scriverci!</p>
      
        <div className="ws-contatti-list">
          <a
            className="ws-contact-card"
            href="https://wa.me/393486546406"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ws-contact-icon">
              <WhatsAppIcon />
            </span>
            <span className="ws-contact-text">
              <span className="ws-contact-label">Silvia · WhatsApp</span>
              <span className="ws-contact-value">+39 348 654 6406</span>
            </span>
          </a>
          <a
            className="ws-contact-card"
            href="https://wa.me/393388097059"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ws-contact-icon">
              <WhatsAppIcon />
            </span>
            <span className="ws-contact-text">
              <span className="ws-contact-label">Davide · WhatsApp</span>
              <span className="ws-contact-value">+39 338 809 7059</span>
            </span>
          </a>
          <a
            className="ws-contact-card"
            href="mailto:silviaedavide2027@gmail.com"
          >
            <span className="ws-contact-icon">
              <MailIcon />
            </span>
            <span className="ws-contact-text">
              <span className="ws-contact-label">Email</span>
              <span className="ws-contact-value">
                silviaedavide2027@gmail.com
              </span>
            </span>
          </a>
        </div>
        <div className="ws-contatti-outro">
          <p className="ws-contatti-outro-sub">
            Risponderemo il prima possibile
          </p>
        </div>
      </div>
    </div>
  );
}
