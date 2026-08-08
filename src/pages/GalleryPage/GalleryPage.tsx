import { useEffect, useState } from "react";
import texture from "../../assets/white-texture.png";
import heroImg from "./Assets/DSC08297.jpg";
import "./GalleryPage.css";

// Importa automaticamente tutte le foto presenti in ./Assets
const photoModules = import.meta.glob<string>("./Assets/*.{jpg,jpeg,JPG,JPEG,png,PNG}", {
  eager: true,
  import: "default",
});
const photos = Object.entries(photoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({
    src,
    name: path.split("/").pop() ?? "",
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
              src={photo.src}
              alt="Silvia e Davide"
              loading="lazy"
              className="ws-gallery-img"
              onClick={() => setOpenSrc(photo.src)}
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
