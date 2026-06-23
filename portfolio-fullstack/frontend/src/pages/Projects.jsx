import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { PROJECTS } from "../data";
import ProjectCard from "../components/ProjectCard";

const FILTERS = [
  { key: "all",          label: "All Systems" },
  { key: "healthtech", label: "HealthTech" },
  { key: "femtech",   label: "FemTech" },
  { key: "climatetech",label: "ClimateTech" },
  { key: "african culture", label: "African Culture" },
];

/**
 * Maps a project's `size` field to a CSS gridColumn value.
 * Breakpoint note: on mobile the grid is 1 column (all cards full width).
 */
function colSpan(size) {
  switch (size) {
    case "large":  return "span 8";
    case "small":  return "span 4";
    case "tall":   return "span 4";
    case "wide":   return "span 8";
    case "medium": return "span 6";
    default:       return "span 6";
  }
}

function imageHeight(size) {
  switch (size) {
    case "large": return 300;
    case "tall":  return 320;
    case "wide":  return 220;
    default:      return 200;
  }
}

/**
 * Projects Page
 * ─ Hero with display headline
 * ─ Category filter bar
 * ─ Filterable bento-grid of project cards
 */
export default function ProjectsPage() {
  useReveal();
  const [activeFilter, setActiveFilter] = useState("all");

  const visible =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <main style={{ paddingTop: 88, position: "relative", overflow: "hidden" }}>
      {/* Ambient orb */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "#e9c349",
          filter: "blur(80px)",
          opacity: 0.08,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Hero ──────────────────────────────────────── */}
      <section
        style={{
          padding: "80px 80px 48px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: 32,
            alignItems: "end",
          }}
        >
          {/* Headline */}
          <div style={{ gridColumn: "span 8" }} className="reveal">
            <span
              className="font-mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.3em",
                color: "var(--tertiary)",
                display: "block",
                marginBottom: 16,
              }}
            >
              ENGINEERING THE FUTURE
            </span>
            <h1
              className="font-literata"
              style={{
                fontSize: "clamp(40px, 5.5vw, 72px)",
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                marginBottom: 24,
              }}
            >
              Architectural{" "}
              <em
                className="font-literata"
                style={{ fontStyle: "italic", color: "var(--tertiary)" }}
              >
                Solutions
              </em>
              <br />
              for a Better Future.
            </h1>
            <p
              style={{
                fontSize: 17,
                lineHeight: "28px",
                color: "var(--on-surface-variant)",
                maxWidth: 580,
              }}
            >
              Bridging high-performance software engineering with sustainable
              foresight. Every project is a deliberate architecture decision.
            </p>
          </div>

          {/* Meta (desktop) */}
          <div
            style={{ gridColumn: "span 4", transitionDelay: "0.2s" }}
            className="reveal hide-mobile"
          >
            <div
              style={{
                width: 96,
                height: 1,
                background: "var(--outline-variant)",
                marginBottom: 16,
              }}
            />
            <div
              className="font-mono"
              style={{ fontSize: 13, color: "var(--tertiary)", marginBottom: 6 }}
            >
              PROJECT_COUNT: 0{PROJECTS.length}
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter Bar ────────────────────────────────── */}
      <section
        className="no-scrollbar"
        style={{
          padding: "0 80px 48px",
          overflowX: "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{ display: "flex", gap: 12, minWidth: "max-content" }}
          role="group"
          aria-label="Filter projects by category"
        >
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`filter-btn ${activeFilter === f.key ? "active" : ""}`}
              aria-pressed={activeFilter === f.key}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── Projects Grid ─────────────────────────────── */}
      <section
        style={{
          padding: "0 80px 120px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {visible.length === 0 ? (
          <div
            style={{
              padding: "80px 0",
              textAlign: "center",
              color: "var(--on-surface-variant)",
              fontSize: 16,
            }}
          >
            No projects in this category yet.
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: 24,
            }}
          >
            {visible.map((project, i) => (
              <div
                key={project.id}
                style={{ gridColumn: colSpan(project.size) }}
              >
                <ProjectCard
                  project={project}
                  delay={`${i * 0.08}s`}
                  style={{
                    imageHeight: imageHeight(project.size),
                    showIcons: project.size === "large",
                    height: "100%",
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
