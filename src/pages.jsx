/* ==================================================================
   pages.jsx — one component per route. All content comes from data.js;
   nothing here should need editing to change what the site says.
   ================================================================== */

import { Link, useParams } from "react-router-dom";

import { PROFILE, RESEARCH, EXPERIENCE, PROJECTS, AWARDS, VOLUNTEER } from "./data";
import {
  AwardCard,
  BackLink,
  Btn,
  Bullets,
  ConnectPanel,
  Icon,
  OrgCard,
  PageHead,
  ProjectCard,
  ResearchCard,
  ResearchFull,
  Reveal,
  Section,
  SectionHead,
  Tags,
  VolPanel,
} from "./ui";

/* =============================== Home ============================== */

export function Home() {
  const research = RESEARCH.filter((r) => r.featured);
  const programmes = EXPERIENCE.filter((e) => e.featured);
  const ventures = PROJECTS.filter((p) => p.featured);
  const awards = AWARDS.filter((a) => a.featured);

  return (
    <main className="page">
      <Section>
        <div className="hero">
          <span className="orb orb-a" />
          <span className="orb orb-b" />
          <div className="hero-inner">
            <div className="hero-split">
              <div className="hero-text">
                <h1 className="hero-name">
                  <span className="ln-1">{PROFILE.first}</span>
                  <span className="ln-2">{PROFILE.last}</span>
                </h1>
                <p className="hero-tag">{PROFILE.tagline}</p>
                <div className="cta-row">
                  <Btn to="/research" kind="primary">
                    Read the research {Icon.arrow({ size: 16 })}
                  </Btn>
                  <Btn to="/about" kind="ghost">
                    About me
                  </Btn>
                </div>
              </div>

              {PROFILE.photo ? (
                <div className="hero-photo">
                  <img src={PROFILE.photo} alt={PROFILE.fullName} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead icon={Icon.trophy({ size: 20 })} title="Awards & Recognition" to="/awards" />
        <div className="grid-2">
          {awards.map((a) => (
            <Reveal key={a.title}>
              <AwardCard item={a} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead icon={Icon.flask({ size: 20 })} title="Research" to="/research" />
        <div className="stack">
          {research.map((r) => (
            <Reveal key={r.slug}>
              <ResearchCard item={r} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          icon={Icon.briefcase({ size: 20 })}
          title="Programmes & internships"
          to="/work"
        />
        <div className="grid-2">
          {programmes.map((e) => (
            <Reveal key={e.slug}>
              <OrgCard item={e} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead icon={Icon.cube({ size: 20 })} title="Ventures" to="/projects" />
        <div className="grid-3">
          {ventures.map((p) => (
            <Reveal key={p.name}>
              <ProjectCard item={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <ConnectPanel
            title="Let's talk"
            body="I'm always glad to hear from people working on consumer behaviour, attention, or anything built from scratch. Questions and cold emails both welcome."
            email={PROFILE.email}
            cv={PROFILE.cv}
          />
        </Reveal>
      </Section>
    </main>
  );
}

/* =============================== About ============================= */

export function About() {
  const facts = [
    { label: "Focus", value: "Business, consumer behaviour, real estate" },
    { label: "School", value: "Hiranandani Upscale School, Chennai" },
    { label: "Programme", value: "IB Diploma · Class of 2027" },
    { label: "Higher level", value: "Business Management, Economics, Mathematics AI" },
    { label: "Standard level", value: "ESS, English Language & Literature, Spanish Ab Initio" },
    { label: "Languages", value: "English, Hindi, Spanish (Ab Initio)" },
    { label: "Based in", value: PROFILE.location },
    { label: "Off the page", value: "Basketball, chess, guitar, cooking" },
  ];

  return (
    <main className="page">
      <PageHead
        icon={Icon.user({ size: 26 })}
        title="About"
        sub="How the research, the internships, and the side ventures fit together."
      />

      <div className="about-split">
        <div className="prose">
          {PROFILE.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {PROFILE.aboutPhoto ? (
          <figure className="about-photo">
            <img src={PROFILE.aboutPhoto} alt={PROFILE.fullName} />
          </figure>
        ) : null}
      </div>

      <div className="fact-grid">
        {facts.map((f) => (
          <div key={f.label}>
            <span>{f.label}</span>
            <strong>{f.value}</strong>
          </div>
        ))}
      </div>
    </main>
  );
}

/* ============================== Research =========================== */

export function ResearchIndex() {
  return (
    <main className="page">
      <PageHead
        icon={Icon.flask({ size: 26 })}
        title="Research"
        sub="Two studies of how people are persuaded — one about what a label claims, one about what a feed costs."
      />

      {/* Cards, not full articles: the nav no longer lists the studies
          individually, so this page is how you reach them. */}
      <div className="stack">
        {RESEARCH.map((r) => (
          <Reveal key={r.slug}>
            <ResearchCard item={r} />
          </Reveal>
        ))}
      </div>
    </main>
  );
}

export function ResearchDetail() {
  const { slug } = useParams();
  const item = RESEARCH.find((r) => r.slug === slug);

  if (!item) return <NotFound />;

  return (
    <main className="page">
      <BackLink to="/research">All research</BackLink>
      <ResearchFull item={item} />
    </main>
  );
}

/* ============================= Programmes ========================== */

export function Work() {
  return (
    <main className="page">
      <PageHead
        icon={Icon.briefcase({ size: 26 })}
        title="Programmes"
        sub="Internships, selective cohorts, and summer programmes — where the classroom work met a real operating business."
      />

      <div className="grid-2">
        {EXPERIENCE.map((e) => (
          <Reveal key={e.slug}>
            <OrgCard item={e} />
          </Reveal>
        ))}
      </div>
    </main>
  );
}

export function WorkDetail() {
  const { slug } = useParams();
  const item = EXPERIENCE.find((e) => e.slug === slug);

  if (!item) return <NotFound />;

  return (
    <main className="page">
      <BackLink to="/work">All programmes</BackLink>

      <header className="detail-head">
        {item.logo ? <img className="detail-logo" src={item.logo} alt="" /> : null}
        <div>
          <h1>{item.role}</h1>
          <p className="detail-org">{item.org}</p>
          <div className="detail-meta">
            <span className="date-pill">{item.dates}</span>
            <span>{item.location}</span>
            {item.badge ? <span className="badge badge-solid">{item.badge}</span> : null}
          </div>
        </div>
      </header>

      <div className="detail-panel">
        <h2>Overview</h2>
        <p>{item.desc}</p>

        <h2>What I did</h2>
        <Bullets items={item.bullets} />

        <Tags items={item.tags} flat />
      </div>
    </main>
  );
}

/* ============================== Ventures =========================== */

export function Projects() {
  return (
    <main className="page">
      <PageHead
        icon={Icon.cube({ size: 26 })}
        title="Ventures"
        sub="Things built, run, and — in one case — sold by the plate."
      />

      <div className="stack">
        {PROJECTS.map((p) => (
          <Reveal key={p.name}>
            <ProjectCard item={p} wide />
          </Reveal>
        ))}
      </div>
    </main>
  );
}

/* =============================== Awards ============================ */

export function Awards() {
  return (
    <main className="page">
      <PageHead
        icon={Icon.trophy({ size: 26 })}
        title="Awards"
        sub="Recognition from business, debate, and sport."
      />

      <div className="grid-2">
        {AWARDS.map((a) => (
          <Reveal key={a.title}>
            <AwardCard item={a} />
          </Reveal>
        ))}
      </div>
    </main>
  );
}

/* ============================ Leadership =========================== */

export function Volunteering() {
  return (
    <main className="page">
      <PageHead
        icon={Icon.heart({ size: 26 })}
        title="Leadership"
        sub="Houses, communities, classrooms, and tournaments — the work that only counts if other people show up."
      />

      <Reveal>
        <VolPanel stats={VOLUNTEER.stats} orgs={VOLUNTEER.orgs} />
      </Reveal>

      <div className="stack spaced">
        {VOLUNTEER.orgs.map((o) => (
          <Reveal key={o.name}>
            <article className="card card-wide">
              <div className="card-top">
                <div>
                  <h3>{o.name}</h3>
                  <p className="card-org">{o.role}</p>
                </div>
              </div>
              <p className="card-desc">{o.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </main>
  );
}

/* ============================== Contact ============================ */

/* ---------------- contact form ----------------

   The contact form is a Google Form embedded in an iframe. No API key,
   no third-party form service, nothing to configure in the code.

   To change the questions, edit the form at forms.google.com — the
   site picks up the change automatically.

   Responses land in the form's Responses tab. Make sure email alerts
   are on: Responses -> three dots -> "Get email notifications for new
   responses". Without that, submissions arrive silently. */

const GOOGLE_FORM_URL = "https://forms.gle/9wpUS6FVjNQDCgpG7";

function ContactForm() {
  return (
    <div className="form-embed">
      <iframe src={GOOGLE_FORM_URL} title="Contact form" loading="lazy">
        Loading the contact form…
      </iframe>
    </div>
  );
}

export function Contact() {
  return (
    <main className="page">
      <PageHead
        icon={Icon.user({ size: 26 })}
        title="Get in touch"
        sub="Questions, collaborations, and cold emails all welcome — send a note and I'll reply."
      />

      <Reveal>
        <ContactForm />
      </Reveal>
    </main>
  );
}

/* ================================ 404 ============================== */

export function NotFound() {
  return (
    <main className="page notfound">
      <h1>404</h1>
      <p>That page doesn't exist. It may have been renamed, or never written.</p>
      <div className="cta-row centered">
        <Link className="btn btn-primary" to="/">
          Back home
        </Link>
      </div>
    </main>
  );
}
