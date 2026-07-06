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
  const isHome = location.pathname === "/";

  return (
    <>
      <nav className={`ws-nav${scrolled || !isHome ? " scrolled" : ""}`}>
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
        {NAV_ITEMS.map((item: NavItem) => (
          <Link key={item.id} to={pathFor(item.id)}>
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
