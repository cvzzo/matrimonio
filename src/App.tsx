import { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import "./App.css";
import Faq from "./pages/faq/Faq";
import Contatti from "./pages/contatti/Contatti";
import Lunadimiele from "./pages/lunadimiele/Lunadimiele";
import Rsvp from "./pages/rsvp/rsvp";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-shell" id="top">
      <header className="app-header">
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Apri menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ×
        </button>
        <nav>
          <a href="/" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#storia" onClick={() => setMenuOpen(false)}>
            La nostra storia
          </a>
          <a href="/contatti" onClick={() => setMenuOpen(false)}>
            Contatti
          </a>
          <a href="/lunadimiele" onClick={() => setMenuOpen(false)}>
            Luna di miele
          </a>
          <a href="/rsvp" onClick={() => setMenuOpen(false)}>
            RSVP
          </a>
          <a href="/faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
        </nav>
      </div>

      <div className={`overlay ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)} />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/lunadimiele" element={<Lunadimiele />} />
        <Route path="/rsvp" element={<Rsvp />} />
      </Routes>
    </div>
  );
}

export default App;
