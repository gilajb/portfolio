import { useEffect, useRef } from "react";
import { useReveal } from "../hooks/useReveal";
import { METRICS, SKILLS, PROJECTS } from "../data";
import ProjectCard from "../components/ProjectCard";

/**
 * Home Page
 * ─ Hero (architectural grid, ambient gradient, cursor glow)
 * ─ Impact Metrics
 * ─ Featured Projects (bento grid)
 * ─ Technical Arsenal (skill lists)
 * ─ CTA Section
 */
export default function HomePage({ setPage }) {
  useReveal();
  const glowRef = useRef(null);

  // Cursor glow effect (desktop only)
  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const onMove = (e) => {
      requestAnimationFrame(() => {
        glow.style.left = e.clientX + "px";
        glow.style.top  = e.clientY + "px";
      });
    };

    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  // Activate glow on project-card hover
  const activateGlow  = () => glowRef.current?.classList.add("active");
  const deactivateGlow = () => glowRef.current?.classList.remove("active");

  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <main style={{ paddingTop: 88 }}>
      {/* Cursor glow (hidden on mobile via CSS) */}
      <div
        ref={glowRef}
        className="cursor-glow hide-mobile"
        aria-hidden="true"
      />

      {/* ── Hero ──────────────────────────────────────── */}
      <section
        className="arch-grid"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "96px 80px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="ambient-gradient" />

        <div
          style={{ maxWidth: 800, position: "relative", zIndex: 1 }}
          className="reveal"
        >
          <span
            className="font-mono"
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.3em",
              color: "var(--tertiary)",
              display: "block",
              marginBottom: 24,
            }}
          >
            ENGINEER x VISIONARY
          </span>

          <h1
            className="font-literata"
            style={{
              fontSize: "clamp(41px, 2vw, 80px)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.04em",
              color: "var(--on-surface)",
              marginBottom: 32,
            }}
          >
            Building Digital Arks
            <br />
            for a{" "}
            <em style={{ fontStyle: "italic", fontWeight: 600, fontSize: "0.85em" }}>
              Greater Future
            </em>
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: "28px",
              color: "var(--on-surface-variant)",
              maxWidth: 400,
              marginBottom: 48,
            }}
          >
            Crafting high-performance digital infrastructures that blend
            timeless architectural principles with cutting-edge silicon
            precision.
          </p>

          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <button
              onClick={() => setPage("Projects")}
              className="btn-primary btn-premium"
              style={{
                padding: "18px 40px",
                display: "flex",
                alignItems: "center",
                gap: 0,
              }}
            >
              VIEW PROJECTS
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                arrow_outward
              </span>
            </button>

            <button
              onClick={() => setPage("Contact")}
              className="btn-ghost btn-premium"
              style={{ padding: "18px 40px" }}
            >
              WORK WITH ME
            </button>
          </div>
        </div>

        {/* Right decorative image */}
        <div
          className="hide-mobile reveal hero-decorative-img"
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: "40%",
            height: "80%",
            overflow: "hidden",
            opacity: 1.0,
            transitionDelay: "0.2s",
          }}
        >
          <img
            src= "/Profile Joy.jpeg"
            alt=""
            style={{
              width: "90%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 2s",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />
        </div>
      </section>

      {/* ── Impact Metrics ────────────────────────────── */}
      <section
        style={{
          padding: "80px",
          borderTop: "1px solid rgba(68,71,72,0.1)",
          borderBottom: "1px solid rgba(68,71,72,0.1)",
          background: "var(--surface-container-lowest)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 48,
          }}
        >
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              className="reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span
                className="font-mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  color: "var(--on-surface-variant)",
                  display: "block",
                  marginBottom: 10,
                }}
              >
                {m.label}
              </span>
              <span
                className="font-literata"
                style={{
                  fontSize: "clamp(36px, 4vw, 48px)",
                  fontWeight: 700,
                  color: m.color,
                }}
              >
                {m.value}
                {m.suffix && (
                  <span style={{ fontSize: "0.55em" }}>{m.suffix}</span>
                )}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────── */}
      <section style={{ padding: "120px 80px" }}>
        {/* Section header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 64,
          }}
          className="reveal"
        >
          <div>
            <span
              className="font-mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.1em",
                color: "var(--tertiary)",
                display: "block",
                marginBottom: 16,
              }}
            >
              PORTFOLIO
            </span>
            <h2
              className="font-literata"
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              Curated Standouts
            </h2>
          </div>

          <button
            onClick={() => setPage("Projects")}
            className="font-mono"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 11,
              letterSpacing: "0.1em",
              color: "var(--on-surface-variant)",
              display: "flex",
              alignItems: "center",
              gap: 8,
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--tertiary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--on-surface-variant)")
            }
          >
            ALL WORKS
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
              trending_flat
            </span>
          </button>
        </div>

        {/* Bento grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 24 }}
          onMouseEnter={activateGlow}
          onMouseLeave={deactivateGlow}
        >
          {/* Large card — col-span 8 */}
          <div className="col-span-8">
            <ProjectCard
              project={featuredProjects[0]}
              delay="0.1s"
              style={{ imageHeight: 340, showIcons: true, height: "100%" }}
            />
          </div>

          {/* Small card — col-span 4 */}
          <div className="col-span-4">
            <ProjectCard
              project={featuredProjects[1]}
              delay="0.3s"
              style={{ imageHeight: 220, height: "100%" }}
            />
          </div>

          {/* Wide card — col-span 12 */}
          <div
            className="project-card arch-grid reveal col-span-12"
            style={{
              gridColumn: "span 12",
              background: "var(--surface-container-low)",
              border: "1px solid rgba(68,71,72,0.3)",
              transitionDelay: "0.1s",
            }}
          >
            <div
              style={{
                padding: "48px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 32,
              }}
            >
              <div style={{ maxWidth: 560 }}>
                <span
                  className="font-mono"
                  style={{ fontSize: 11, letterSpacing: "0.1em", color: "var(--tertiary)", display: "block", marginBottom: 8 }}
                >
                  WOMEN RIGHTS INITIATIVE
                </span>
                <h3
                  className="font-sans"
                  style={{ fontSize: 22, fontWeight: 500, color: "var(--on-surface)", marginBottom: 16 }}
                >
                  Inaccessible Sexual and Reproductive Health Services for Adolescents Girls and Young Adults, 10-24 years in Sub-Saharan Africa
                </h3>
                <p style={{ fontSize: 16, color: "var(--on-surface-variant)", marginBottom: 32, lineHeight: "26px" }}>
                  Current SRHR services are often inaccessible to young people due to cultural and social barriers. This project is developing a digital platform that provides access to these services to the young girls and young adults, improving access for millions and empowering them to take control of their health and futures.
                </p>
                <button
                  className="btn-outline-gold btn-premium"
                  style={{ padding: "12px 32px" }}
                >
                  DEEP DIVE
                </button>
              </div>

              <img
                src="/SRHR.png"
                alt="SRHR"
                className="hide-mobile"
                style={{
                  width: "40%",
                  opacity: 1.0,
                  transition: "transform 2s ease, filter 2s ease",
                  borderRadius: "2",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Technical Arsenal ─────────────────────────── */}
      <section
        style={{ padding: "120px 80px", background: "var(--surface-container-lowest)" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 64,
          }}
        >
          {/* Left: heading */}
          <div className="reveal">
            <h2
              className="font-literata"
              style={{
                fontSize: "clamp(28px, 3vw, 48px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                marginBottom: 24,
              }}
            >
              Technical Arsenal
            </h2>
            <p
              style={{
                fontSize: 18,
                lineHeight: "28px",
                color: "var(--on-surface-variant)",
                marginBottom: 32,
              }}
            >
              A multi-disciplinary stack designed for resilience, scalability,
              and performance.
            </p>
            <div className="gold-line" />
          </div>

          {/* Right: skill grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "40px 48px",
            }}
          >
            {SKILLS.map((s, i) => (
              <div
                key={s.num}
                className="reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    color: "var(--tertiary)",
                    display: "block",
                    marginBottom: 16,
                  }}
                >
                  {s.num} / {s.title}
                </span>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {s.items.map((item) => (
                    <li key={item} className="skill-row font-sans">
                      <span>{item}</span>
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 14, color: "var(--tertiary)" }}
                      >
                        check_circle
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────── */}
      <section
        style={{
          padding: "120px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="ambient-gradient" style={{ opacity: 0.3 }} />

        <div style={{ position: "relative", zIndex: 1 }} className="reveal">
          <h2
            className="font-literata"
            style={{
              fontSize: "clamp(48px, 7vw, 80px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              marginBottom: 48,
            }}
          >
            Let's build the ark.
          </h2>
          <p
            style={{
              fontSize: 18,
              lineHeight: "28px",
              color: "var(--on-surface-variant)",
              maxWidth: 480,
              margin: "0 auto 64px",
            }}
          >
            Currently accepting inquiries for strategic partnerships and
            visionary projects that align with my mission. Let's connect and explore how we can create impactful solutions together.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 40,
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => setPage("Contact")}
              className="btn-gold btn-premium"
              style={{ padding: "18px 48px" }}
            >
              CONTACT JOY
            </button>

            <div style={{ display: "flex", gap: 24 }}>
              {[
                { label: "LINKEDIN", href: "https://linkedin.com/in/joy-bett-743560324/" },
                { label: "GITHUB", href: "https://github.com/gilajb" },
                { label: "TWITTER", href: "https://x.com/gila_jb" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono"
                  style={{
                    color: "var(--on-surface)",
                    fontSize: 12,
                    fontWeight: 600,
                    transition: "color 0.3s, transform 0.3s",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "var(--tertiary)";
                    e.target.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "var(--on-surface)";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
