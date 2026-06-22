import { useReveal } from "../hooks/useReveal";
import { TIMELINE, VALUES } from "../data";

/**
 * About Page
 * ─ Hero split (bio + stats card)
 * ─ Career Timeline
 * ─ Engineering Values grid
 * ─ Quote / CTA
 */
export default function AboutPage({ setPage }) {
  useReveal();

  return (
    <main style={{ paddingTop: 88 }}>
      {/* Ambient blobs */}
      <div
        className="ambient-blob"
        style={{ position: "absolute", top: "8%", left: "-8%", zIndex: 0 }}
        aria-hidden="true"
      />
      <div
        className="ambient-blob"
        style={{
          position: "absolute",
          top: "45%",
          right: "-5%",
          zIndex: 0,
          animationDelay: "-5s",
          background:
            "radial-gradient(circle, rgba(200,198,197,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── Hero ──────────────────────────────────────── */}
      <section
        style={{
          padding: "80px 80px 120px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 48,
            alignItems: "start",
          }}
        >
          {/* Left: bio */}
          <div className="reveal">
            <span
              className="font-mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.3em",
                color: "var(--tertiary)",
                display: "block",
                marginBottom: 24,
              }}
            >
              THE ARCHITECT
            </span>

            <h1
              className="font-literata"
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                marginBottom: 32,
              }}
            >
              Future Engineer, Visionary Developer,
              <br />
              <em>and Builder of Arks.</em>
            </h1>

            <p
              style={{
                fontSize: 17,
                lineHeight: "28px",
                color: "var(--on-surface-variant)",
                marginBottom: 20,
              }}
            >
              I'm Joy Chepkorir Bett - a full stack developer, 
              tech entrepreneur and aspiring computer engineer 
              building digital solutions for women, communities, 
              and climate resilience through purposeful technology 
              and bold collaboration.
              </p>

            <p
              style={{
                fontSize: 15,
                lineHeight: "26px",
                color: "var(--on-surface-variant)",
                marginBottom: 48,
              }}
            >
              My work connects human impact with technical creativity. 
              I believe the best builders are also architects 
              — shaping not just code, but opportunities, 
              inclusive communities, sustainable systems, 
              future-ready leadership, meaningful 
              innovation, shared progress.
            </p>

            <button
              onClick={() => setPage("Contact")}
              className="btn-primary btn-premium"
              style={{ padding: "16px 40px" }}
            >
              LET'S CONNECT
            </button>
          </div>

          {/* Right: stat cards */}
          <div
            className="reveal"
            style={{ transitionDelay: "0.2s", display: "flex", flexDirection: "column", gap: 20 }}
          >
            {/* Quick stats */}
            <div className="info-card">
              <div
                className="font-mono"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  color: "var(--tertiary)",
                  marginBottom: 20,
                }}
              >
                QUICK STATS
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 20,
                }}
              >
                {[
                  ["4+", "Deployments"],
                  ["1 yrs", "Leadership"],
                  ["16", "Repositories"],
                  [3, "Startups"],
                ].map(([val, label]) => (
                  <div key={label}>
                    <div
                      className="font-literata"
                      style={{ fontSize: 28, fontWeight: 700, color: "var(--primary-fixed-dim)" }}
                    >
                      {val}
                    </div>
                    <div
                      className="font-mono"
                      style={{ fontSize: 10, letterSpacing: "0.08em", color: "var(--on-surface-variant)" }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core stack */}
            <div className="info-card">
              <div
                className="font-mono"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  color: "var(--tertiary)",
                  marginBottom: 20,
                }}
              >
                CORE STACK
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Python", "UI/UX Design",
                  "React", "Django", "REST APIs", "GCP", "PostgreSQL", "MySQL",
                ].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Career Timeline ───────────────────────────── */}
      <section
        style={{
          padding: "0 80px 120px",
          background: "var(--surface-container-lowest)",
          paddingTop: 80,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="reveal" style={{ marginBottom: 64 }}>
          <span
            className="font-mono"
            style={{
              fontSize: 10,
              letterSpacing: "0.1em",
              color: "var(--tertiary)",
              display: "block",
              marginBottom: 16,
            }}
          >
            EXPERIENCE
          </span>
          <h2
            className="font-literata"
            style={{
              fontSize: "clamp(28px, 3vw, 48px)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            Career Trajectory
          </h2>
        </div>

        {/* Timeline entries */}
        <div style={{ position: "relative" }}>
          {/* Vertical centre line (desktop) */}
          <div
            className="timeline-line hide-mobile"
            style={{ position: "absolute", left: "50%", top: 0, bottom: 0, transform: "translateX(-50%)" }}
            aria-hidden="true"
          />

          {TIMELINE.map((item, i) => (
            <div
              key={item.year}
              className="reveal"
              style={{
                display: "flex",
                gap: 40,
                marginBottom: 40,
                flexDirection: i % 2 === 0 ? "row" : "row-reverse",
                transitionDelay: `${i * 0.15}s`,
              }}
            >
              {/* Year label (desktop) */}
              <div
                className="hide-mobile"
                style={{ flex: 1, textAlign: i % 2 === 0 ? "right" : "left", paddingTop: 8 }}
              >
                <span
                  className="font-literata"
                  style={{
                    fontSize: "clamp(32px, 4vw, 44px)",
                    fontWeight: 700,
                    color: "var(--primary-fixed-dim)",
                    opacity: 0.25,
                  }}
                >
                  {item.year}
                </span>
              </div>

              {/* Dot (desktop) */}
              <div
                className="hide-mobile"
                style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1, paddingTop: 12 }}
              >
                <div className="timeline-dot" />
              </div>

              {/* Card */}
              <div style={{ flex: 1 }}>
                <div className="info-card">
                  <div
                    className="font-mono"
                    style={{ fontSize: 10, letterSpacing: "0.1em", color: "var(--tertiary)", marginBottom: 12 }}
                  >
                    {item.year}
                  </div>
                  <h3
                    className="font-literata"
                    style={{ fontSize: 20, fontWeight: 600, marginBottom: 4 }}
                  >
                    {item.role}
                  </h3>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--on-surface-variant)",
                      marginBottom: 14,
                      fontFamily: "'Hanken Grotesk', sans-serif",
                    }}
                  >
                    {item.company}
                  </div>
                  <p style={{ fontSize: 15, lineHeight: "24px", color: "var(--on-surface-variant)" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Engineering Values ────────────────────────── */}
      <section
        style={{ padding: "120px 80px", background: "var(--surface-container-lowest)" }}
      >
        <div className="reveal" style={{ marginBottom: 64 }}>
          <span
            className="font-mono"
            style={{ fontSize: 10, letterSpacing: "0.1em", color: "var(--tertiary)", display: "block", marginBottom: 16 }}
          >
            PRINCIPLES
          </span>
          <h2
            className="font-literata"
            style={{ fontSize: "clamp(28px, 3vw, 48px)", fontWeight: 600, letterSpacing: "-0.02em" }}
          >
            Engineering Values
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              className="info-card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 28, color: "var(--tertiary)", display: "block", marginBottom: 16 }}
              >
                {v.icon}
              </span>
              <h3
                className="font-sans"
                style={{ fontSize: 17, fontWeight: 500, marginBottom: 12 }}
              >
                {v.title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: "22px", color: "var(--on-surface-variant)" }}>
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quote / CTA ───────────────────────────────── */}
      <section
        style={{
          padding: "120px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="ambient-gradient" style={{ opacity: 0.2 }} />
        <div
          className="reveal"
          style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}
        >
          <div
            className="font-mono"
            style={{ fontSize: 48, color: "var(--tertiary)", opacity: 0.35, lineHeight: 1 }}
            aria-hidden="true"
          >
            "
          </div>
          <blockquote
            className="font-literata"
            style={{
              fontSize: "clamp(22px, 3vw, 34px)",
              fontWeight: 600,
              lineHeight: 1.4,
              letterSpacing: "-0.02em",
              fontStyle: "italic",
              margin: "16px 0 32px",
            }}
          >
            The best systems are invisible — they empower 
            communities and amplifies human potential
            without constraining, scales without friction,
            and endures beyond the developers who built it.
          </blockquote>
          <cite
            className="font-mono"
            style={{ fontSize: 11, letterSpacing: "0.1em", color: "var(--on-surface-variant)", fontStyle: "normal" }}
          >
            — JOY CHEPKORIR BETT
          </cite>
        </div>
      </section>
    </main>
  );
}
