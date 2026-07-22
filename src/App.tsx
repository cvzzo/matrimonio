import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { useCountdown } from "./hooks/useCountdown";
import { WEDDING_DATE } from "./constants/wedding";
import { HomePage } from "./pages/HomePage/HomePage";
import { StoriaPage } from "./pages/StoriaPage/StoriaPage";
import { LocationPage } from "./pages/LocationPage/LocationPage";
import { RSVPPage } from "./pages/RSVPPage/RSVPPage";
import { ProgrammaPage } from "./pages/ProgrammaPage/ProgrammaPage";
import { LunaDiMielePage } from "./pages/LunaDiMielePage/LunaDiMielePage";
import { DressCodePage } from "./pages/DressCodePage/DressCodePage";
import { GalleryPage } from "./pages/GalleryPage/GalleryPage";
import { FAQPage } from "./pages/FAQPage/FAQPage";
import { ContattiPage } from "./pages/ContattiPage/ContattiPage";
import "./App.css";

export default function App() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const countdown = useCountdown(WEDDING_DATE);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="ws-app">
      <Nav
        scrolled={scrolled}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen(!menuOpen)}
      />

      <Routes>
        <Route path="/" element={<HomePage countdown={countdown} />} />
        <Route path="/storia" element={<StoriaPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/rsvp" element={<RSVPPage />} />
        <Route path="/programma" element={<ProgrammaPage />} />
        <Route path="/lunadimiele" element={<LunaDiMielePage />} />
        <Route path="/dresscode" element={<DressCodePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contatti" element={<ContattiPage />} />
      </Routes>
    </div>
  );
}
