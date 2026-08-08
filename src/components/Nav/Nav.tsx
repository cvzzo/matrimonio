import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../../constants/wedding";
import type { NavItem } from "../../types";
import "./Nav.css";

interface NavProps {
  scrolled: boolean;
  menuOpen: boolean;
  onToggleMenu: () => void;
}

function pathFor(id: string): string {
  return id === "home" ? "/" : `/${id}`;
}

export function Nav({ scrolled, menuOpen, onToggleMenu }: NavProps) {
  const location = useLocation();
  // Pagine con hero a tutta pagina: barra trasparente in cima come la home
  const transparentTopPaths = [
    "/",
    "/storia",
    "/location",
    "/programma",
    "/dresscode",
    "/lunadimiele",
    "/rsvp",
    "/gallery",
    "/contatti",
    "/faq",
  ];
  const hasHero = transparentTopPaths.includes(location.pathname);
  // Pagine con hero fotografica scura: logo/hamburger chiari finché la barra è trasparente
  const lightTop = [
    "/storia",
    "/programma",
    "/dresscode",
    "/lunadimiele",
    "/rsvp",
    "/gallery",
    "/contatti",
    "/faq",
  ].includes(location.pathname);

  return (
    <>
      <nav
        className={`ws-nav${scrolled || !hasHero ? " scrolled" : ""}${
          lightTop ? " light-top" : ""
        }${menuOpen ? " menu-open" : ""}`}
      >
        <Link className="ws-nav-logo" to="/">
          S &amp; D
        </Link>
        <button
          className={`ws-hamburger${menuOpen ? " open" : ""}`}
          onClick={onToggleMenu}
          aria-label="Apri menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`ws-menu-overlay${menuOpen ? " open" : ""}`}>
        {NAV_ITEMS.map((item: NavItem) => {
          const path = pathFor(item.id);
          const isActive = location.pathname === path;
          return (
            <Link
              key={item.id}
              to={path}
              className={isActive ? "active" : undefined}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}
