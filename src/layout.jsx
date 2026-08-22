/* ==================================================================
   layout.jsx — the shell every page sits inside: sticky pill navbar,
   scroll-to-top on route change, and the footer.
   ================================================================== */

import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { NAV, FOOTER_NAV, PROFILE } from "./data";
import { Icon } from "./ui";

/* ============================== Navbar ============================= */

function NavItem({ item, onNavigate }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const away = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const esc = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", away);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", away);
      document.removeEventListener("keydown", esc);
    };
  }, [open]);

  if (!item.children) {
    return (
      <div className="pill-item">
        <NavLink
          to={item.to}
          end={item.to === "/"}
          className={({ isActive }) => (isActive ? "pill-link active" : "pill-link")}
          onClick={onNavigate}
        >
          {item.label}
        </NavLink>
      </div>
    );
  }

  const childActive = item.children.some((c) => pathname.startsWith(c.to));

  return (
    <div
      className="pill-item"
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={childActive ? "pill-link active" : "pill-link"}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <span className="chev">{Icon.chev({ size: 14 })}</span>
      </button>

      {open ? (
        <div className="dropdown">
          {item.children.map((c) => (
            <Link key={c.to} to={c.to} onClick={() => setOpen(false)}>
              {c.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function Navbar() {
  const [menu, setMenu] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setMenu(false), [pathname]);

  /* Dropdown parents are flattened for the mobile sheet — a nested
     accordion on a seven-item menu is more tapping than it's worth. */
  const flat = NAV.flatMap((i) => (i.children ? i.children : [i]));

  return (
    <nav className="nav-wrap">
      <div className="pill">
        {NAV.map((item) => (
          <NavItem key={item.label} item={item} />
        ))}
        <span className="pill-divider" />
        <a className="pill-link cv" href={PROFILE.cv} target="_blank" rel="noreferrer">
          CV
        </a>
      </div>

      <button
        className="burger"
        aria-label="Menu"
        aria-expanded={menu}
        onClick={() => setMenu((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      {menu ? (
        <div className="mobile-menu">
          {flat.map((i) => (
            <Link key={i.to} to={i.to} onClick={() => setMenu(false)}>
              {i.label}
            </Link>
          ))}
          <a href={PROFILE.cv} target="_blank" rel="noreferrer">
            CV
          </a>
        </div>
      ) : null}
    </nav>
  );
}

/* ============================== Footer ============================= */

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Link className="brand" to="/">
            {PROFILE.first} <span>{PROFILE.last}</span>
          </Link>
          <p className="footer-tag">{PROFILE.tagline}</p>
          <p className="footer-loc">{PROFILE.location}</p>
        </div>

        <div>
          <h5>Explore</h5>
          {FOOTER_NAV.map((i) => (
            <Link key={i.to} to={i.to}>
              {i.label}
            </Link>
          ))}
        </div>

        <div>
          <h5>Get in touch</h5>
          <a href={`mailto:${PROFILE.email}`}>
            {Icon.mail({ size: 15 })} {PROFILE.email}
          </a>
          {PROFILE.phone ? (
            <a href={`tel:${PROFILE.phone.replace(/[^\d+]/g, "")}`}>
              {Icon.phone({ size: 15 })} {PROFILE.phone}
            </a>
          ) : null}
          <a href={PROFILE.cv} target="_blank" rel="noreferrer">
            {Icon.doc({ size: 15 })} Curriculum vitae
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {year} {PROFILE.fullName}
        </p>
        
      </div>
    </footer>
  );
}

/* ============================== Shell ============================== */

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
