import { useEffect, useState } from "react";
import texture from "../../assets/white-texture.png?quality=75&format=webp";
import heroImg from "./Assets/DSC08297.jpg?w=1920&quality=80&format=webp";
import "./GalleryPage.css";

// Thumbnail leggere per la griglia
const thumbModules = import.meta.glob<string>("./Assets/*.jpg", {
  eager: true,
  import: "default",
  query: "?w=600&quality=70&format=webp",
});
// Versione grande, caricata solo quando si apre il lightbox
const fullModules = import.meta.glob<string>("./Assets/*.jpg", {
  eager: true,
  import: "default",
  query: "?w=1600&quality=80&format=webp",
});
const photos = Object.keys(thumbModules)
  .sort((a, b) => a.localeCompare(b))
  .map((path) => ({
    name: path.split("/").pop() ?? "",
    thumb: thumbModules[path],
    full: fullModules[path],
  }));

export function GalleryPage() {
  const [openSrc, setOpenSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!openSrc) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenSrc(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openSrc]);

  return (
    <div
      className="ws-texture-section ws-texture-section--full"
      style={{ backgroundImage: `url(${texture})` }}
    >
      <section className="ws-hero-villa">
        <img src={heroImg} alt="Gallery" className="villa" />

        <div className="ws-hero-overlay" />
        <div className="ws-hero-title">
          <h1>Gallery</h1>
        </div>
      </section>
      <div className="ws-page">
        <div className="ws-letter">
          <p className="citazione" style={{ textAlign: "center" }}>
            "Di qualsiasi cosa siano fatte le nostre anime, la mia e la sua
            sono uguali"
          </p>
        </div>
        <div className="citazione-nome">Emily Brontë</div>

        <div className="ws-gallery-grid">
          {photos.map((photo) => (
            <img
              key={photo.name}
              src={photo.thumb}
              alt="Silvia e Davide"
              loading="lazy"
              className="ws-gallery-img"
              onClick={() => setOpenSrc(photo.full)}
            />
          ))}
        </div>
      </div>

      {openSrc && (
        <div
          className="ws-lightbox"
          onClick={() => setOpenSrc(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="ws-lightbox-close"
            aria-label="Chiudi"
            onClick={() => setOpenSrc(null)}
          >
            &times;
          </button>
          <img src={openSrc} alt="Silvia e Davide" className="ws-lightbox-img" />
        </div>
      )}
    </div>
  );
}
