/* ==================================================================
   ui.jsx — every reusable piece of the interface.

   Each component here emits only class names that exist in styles.css.
   If you add a class, add the rule too, or it will silently do nothing.
   ================================================================== */

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ============================== Icons ==============================
   Inline so the site has no icon dependency. Every icon inherits
   currentColor and sizes off the `size` prop.
   ================================================================== */

const svg = (props, children) => (
  <svg
    width={props.size || 18}
    height={props.size || 18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props.rest}
  >
    {children}
  </svg>
);

export const Icon = {
  home: (p = {}) => svg(p, <><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></>),
  user: (p = {}) => svg(p, <><circle cx="12" cy="8" r="3.5" /><path d="M4.5 20a7.5 7.5 0 0 1 15 0" /></>),
  flask: (p = {}) => svg(p, <><path d="M10 3v6.5L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.5V3" /><path d="M8.5 3h7" /><path d="M7.4 14.5h9.2" /></>),
  briefcase: (p = {}) => svg(p, <><rect x="3" y="7.5" width="18" height="13" rx="2" /><path d="M8.5 7.5V5.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2" /><path d="M3 12.5h18" /></>),
  cube: (p = {}) => svg(p, <><path d="M12 2.8 20.5 7v10L12 21.2 3.5 17V7z" /><path d="M3.5 7 12 11.4 20.5 7" /><path d="M12 11.4V21.2" /></>),
  trophy: (p = {}) => svg(p, <><path d="M7 4h10v5a5 5 0 0 1-10 0z" /><path d="M7 5.5H4.5V7a3.5 3.5 0 0 0 3 3.4" /><path d="M17 5.5h2.5V7a3.5 3.5 0 0 1-3 3.4" /><path d="M12 14v3.5" /><path d="M8.5 20.5h7" /><path d="M9.5 20.5c0-1.7 1.1-3 2.5-3s2.5 1.3 2.5 3" /></>),
  heart: (p = {}) => svg(p, <path d="M12 20s-7.5-4.7-7.5-9.5A4 4 0 0 1 12 7.6 4 4 0 0 1 19.5 10.5C19.5 15.3 12 20 12 20z" />),
  mail: (p = {}) => svg(p, <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.6 6.5 8.4 6 8.4-6" /></>),
  phone: (p = {}) => svg(p, <path d="M6.5 3.5h3l1.5 4-2 1.4a12 12 0 0 0 6.1 6.1l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z" />),
  pin: (p = {}) => svg(p, <><path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" /><circle cx="12" cy="10" r="2.6" /></>),
  arrow: (p = {}) => svg(p, <><path d="M5 12h13" /><path d="m13 6.5 5.5 5.5L13 17.5" /></>),
  back: (p = {}) => svg(p, <><path d="M19 12H6" /><path d="M11 6.5 5.5 12 11 17.5" /></>),
  chev: (p = {}) => svg(p, <path d="m6.5 9.5 5.5 5 5.5-5" />),
  link: (p = {}) => svg(p, <><path d="M10.5 13.5a4 4 0 0 0 5.7 0l2.6-2.6a4 4 0 1 0-5.7-5.7L11.7 6.6" /><path d="M13.5 10.5a4 4 0 0 0-5.7 0l-2.6 2.6a4 4 0 1 0 5.7 5.7l1.4-1.4" /></>),
  doc: (p = {}) => svg(p, <><path d="M6 3h7.5L19 8.5V21H6z" /><path d="M13.5 3v5.5H19" /><path d="M9 13h6" /><path d="M9 16.5h6" /></>),
  globe: (p = {}) => svg(p, <><circle cx="12" cy="12" r="9" /><path d="M3.2 10h17.6" /><path d="M3.2 14h17.6" /><path d="M12 3a15 15 0 0 1 0 18" /><path d="M12 3a15 15 0 0 0 0 18" /></>),
};

/* ============================= Reveal =============================
   Fails safe: if IntersectionObserver never fires, the CSS media query
   for reduced motion still shows content, and we add `in` on mount for
   anything already in view.
   ================================================================== */

export function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setSeen(true), delay);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={seen ? "reveal in" : "reveal"}>
      {children}
    </div>
  );
}

/* ========================== Page furniture ========================= */

export function PageHead({ icon, title, sub }) {
  return (
    <header className="page-head">
      <h1>
        {icon ? <span className="sec-ico">{icon}</span> : null}
        {title}
      </h1>
      {sub ? <p>{sub}</p> : null}
    </header>
  );
}

export function SectionHead({ icon, title, to, cta = "View all" }) {
  return (
    <div className="sec-head">
      <h2>
        {icon ? <span className="sec-ico">{icon}</span> : null}
        {title}
      </h2>
      {to ? (
        <Link className="view-all" to={to}>
          {cta} {Icon.arrow({ size: 15 })}
        </Link>
      ) : null}
    </div>
  );
}

export function Section({ children }) {
  return <section className="section">{children}</section>;
}

export function BackLink({ to, children }) {
  return (
    <Link className="back-link" to={to}>
      {Icon.back({ size: 16 })} {children}
    </Link>
  );
}

/* ============================= Buttons ============================= */

export function Btn({ to, href, kind = "primary", children, ...rest }) {
  const cls = `btn btn-${kind}`;
  if (to) return <Link className={cls} to={to} {...rest}>{children}</Link>;
  return (
    <a className={cls} href={href} {...rest}>
      {children}
    </a>
  );
}

/* ========================== Tags & bullets ========================= */

export function Tags({ items = [], max = 0, flat = false }) {
  const [open, setOpen] = useState(false);
  if (!items.length) return null;
  const hidden = max > 0 && !open ? items.length - max : 0;
  const shown = hidden > 0 ? items.slice(0, max) : items;

  return (
    <ul className={flat ? "tags flat" : "tags"}>
      {shown.map((t) => (
        <li className="tag" key={t}>
          {t}
        </li>
      ))}
      {hidden > 0 ? (
        <li>
          <button className="tag tag-more" onClick={() => setOpen(true)}>
            +{hidden} more
          </button>
        </li>
      ) : null}
    </ul>
  );
}

export function Bullets({ items = [], small = false }) {
  if (!items.length) return null;
  return (
    <ul className={small ? "bullets small" : "bullets"}>
      {items.map((b, i) => (
        <li key={i}>
          <span className="bullet-arrow">→</span>
          {b}
        </li>
      ))}
    </ul>
  );
}

/* ============================= Research ============================ */

export function ResearchCard({ item }) {
  return (
    <Link className="research-card" to={`/research/${item.slug}`}>
      <div className="research-card-top">
        <span className="research-status">{item.status}</span>
        <span className="research-dates">{item.dates}</span>
      </div>
      <h3>{item.title}</h3>
      <p className="research-sub">{item.subtitle}</p>
      <p className="card-desc">{item.lead}</p>
      <Tags items={item.tags} max={4} />
    </Link>
  );
}

export function ResearchFull({ item }) {
  return (
    <article className="research-full" id={item.slug}>
      <header className="research-head">
        <div className="research-card-top">
          <span className="research-status">{item.status}</span>
          <span className="research-dates">{item.dates}</span>
        </div>
        <h2>{item.title}</h2>
        <p className="research-org">
          {item.org}
          {item.subtitle ? ` · ${item.subtitle}` : ""}
        </p>
      </header>

      <p className="research-lead">{item.lead}</p>

      {item.sections?.map((s) => (
        <div className="research-block" key={s.heading}>
          <h3>{s.heading}</h3>
          <p>{s.body}</p>
        </div>
      ))}

      {item.pipeline?.length ? (
        <div className="research-block">
          <h3>Method</h3>
          <Bullets items={item.pipeline} small />
        </div>
      ) : null}

      {item.outcomes?.length ? (
        <div className="research-block">
          <h3>Outcomes</h3>
          <ul className="outcomes">
            {item.outcomes.map((o, i) => (
              <li key={i}>
                <span className="outcome-dot" />
                {o}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <footer className="research-foot">
        <Tags items={item.tags} />
        {item.link ? (
          <a className="research-link" href={item.link} target="_blank" rel="noreferrer">
            Read it {Icon.arrow({ size: 15 })}
          </a>
        ) : null}
      </footer>
    </article>
  );
}

/* ============================ Programmes =========================== */

function initials(name = "") {
  return name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

export function OrgCard({ item }) {
  return (
    <Link className="org-card" to={`/work/${item.slug}`}>
      <div className="org-head">
        {item.logo ? (
          <img className="org-logo" src={item.logo} alt="" />
        ) : (
          <div className="org-logo org-logo-fallback">{initials(item.org)}</div>
        )}
        <div>
          <h3>{item.org}</h3>
          <p className="org-loc">{item.location}</p>
        </div>
      </div>

      <div className="org-body">
        <div className="org-role-row">
          <h4>{item.role}</h4>
          <div className="org-role-meta">
            <span className="date-pill">{item.dates}</span>
            {item.badge ? <span className="badge">{item.badge}</span> : null}
          </div>
        </div>
        <p className="card-desc">{item.desc}</p>
        <Tags items={item.tags} max={4} />
      </div>
    </Link>
  );
}

/* ============================= Ventures ============================ */

export function ProjectCard({ item, wide = false }) {
  return (
    <article className={wide ? "card card-wide" : "card"}>
      <div className="card-top">
        <div>
          <h3>{item.name}</h3>
          {item.org ? <p className="card-org">{item.org}</p> : null}
        </div>
        {item.meta ? <span className="date-pill">{item.meta}</span> : null}
      </div>

      <p className="card-desc">{item.desc}</p>
      {wide ? <Bullets items={item.bullets} /> : null}

      <div className="card-foot">
        <Tags items={item.tags} max={wide ? 0 : 4} />
        {item.code || item.live ? (
          <div className="icon-links">
            {item.code ? (
              <a href={item.code} target="_blank" rel="noreferrer" aria-label="Source">
                {Icon.doc({ size: 18 })}
              </a>
            ) : null}
            {item.live ? (
              <a href={item.live} target="_blank" rel="noreferrer" aria-label="Live site">
                {Icon.link({ size: 18 })}
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}

/* ============================== Awards ============================= */

export function AwardCard({ item }) {
  const inner = (
    <>
      <span className="award-ico">{item.icon}</span>
      <div>
        <h4>{item.title}</h4>
        <p>{item.meta}</p>
        {item.detail ? <p className="award-detail">{item.detail}</p> : null}
      </div>
    </>
  );

  return item.link ? (
    <a className="award" href={item.link} target="_blank" rel="noreferrer">
      {inner}
    </a>
  ) : (
    <div className="award">{inner}</div>
  );
}

/* ============================ Leadership =========================== */

export function VolPanel({ stats = [], orgs = [] }) {
  return (
    <div className="vol-panel">
      <div className="vol-stats">
        {stats.map((s) => (
          <div key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
      {orgs.length ? (
        <div className="vol-orgs">
          {orgs.map((o) => (
            <span className="vol-chip" key={o.name}>
              {o.name}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/* ============================= Contact ============================= */

export function ContactCard({ icon, label, value, href }) {
  const inner = (
    <>
      {icon}
      <div>
        <h4>{label}</h4>
        <p>{value}</p>
      </div>
    </>
  );
  return href ? (
    <a className="contact-card" href={href} target="_blank" rel="noreferrer">
      {inner}
    </a>
  ) : (
    <div className="contact-card">{inner}</div>
  );
}

export function ConnectPanel({ title, body, email, cv }) {
  return (
    <div className="connect">
      <h2 className="connect-title">{title}</h2>
      <p>{body}</p>
      <div className="cta-row">
        <Btn href={`mailto:${email}`} kind="primary">
          {Icon.mail({ size: 17 })} Send an email
        </Btn>
        {cv ? (
          <Btn href={cv} kind="ghost">
            {Icon.doc({ size: 17 })} Download CV
          </Btn>
        ) : null}
      </div>
    </div>
  );
}
