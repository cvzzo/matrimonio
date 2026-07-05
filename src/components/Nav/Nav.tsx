import { NAV_ITEMS } from "../../constants/wedding";
import type { NavItem } from "../../types";
import "./Nav.css";

interface NavProps {
  scrolled: boolean;
  currentPage: string;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onNavigate: (id: string) => void;
}

export function Nav({
  scrolled,
  currentPage,
  menuOpen,
  onToggleMenu,
  onNavigate,
}: NavProps) {
  return (
    <>
      <nav
        className={`ws-nav${scrolled || currentPage !== "home" ? " scrolled" : ""}`}
      >
        <div className="ws-nav-logo" onClick={() => onNavigate("home")}>
          S &amp; D
        </div>
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
        {NAV_ITEMS.map((item: NavItem) => (
          <a
            key={item.id}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate(item.id);
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
