/**
 * ProjectCard
 * Reusable bento-grid card used in both Home (featured) and
 * Projects (full grid) pages.
 *
 * Props:
 *   project  – project data object (see data/projects.js)
 *   style    – optional extra inline styles (e.g. gridColumn)
 *   delay    – CSS transition-delay string, e.g. "0.2s"
 */
export default function ProjectCard({ project, style = {}, delay = "0s" }) {
  const { image, badge, title, description, problem, solution, outcome, tags } =
    project;

  const hasProblemSolution = !!(problem && solution);

  return (
    <div
      className="project-card reveal"
      style={{
        background: "var(--surface-container-low)",
        overflow: "hidden",
        transitionDelay: delay,
        ...style,
      }}
    >
      {/* Image */}
      <div style={{ overflow: "hidden", position: "relative" }}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="project-img"
          style={{
            width: "100%",
            height: style.imageHeight || 200,
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* Body */}
      <div style={{ padding: "24px 28px 28px" }}>
        {/* Badge + title row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 16,
          }}
        >
          <div>
            <span
              className="font-mono"
              style={{
                fontSize: 10,
                letterSpacing: "0.1em",
                color: "var(--tertiary)",
                background: "rgba(233,195,73,0.08)",
                padding: "3px 10px",
                display: "inline-block",
                marginBottom: 8,
              }}
            >
              {badge}
            </span>
            <h3
              className="font-literata"
              style={{
                fontSize: "clamp(18px, 2vw, 22px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "var(--on-surface)",
              }}
            >
              {title}
            </h3>
          </div>

          {/* Quick-action icons (shown on large featured cards) */}
          {style.showIcons && (
            <div style={{ display: "flex", gap: 16 }}>
              {["terminal", "open_in_new"].map((icon) => (
                <span
                  key={icon}
                  className="material-symbols-outlined"
                  style={{
                    fontSize: 20,
                    color: "var(--on-surface-variant)",
                    cursor: "pointer",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = "var(--tertiary)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = "var(--on-surface-variant)")
                  }
                >
                  {icon}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Problem / Solution two-column layout */}
        {hasProblemSolution ? (
          <div className="problem-solution-grid" 
            style={{ marginBottom: 20 }}
          >
            {[
              { label: "PROBLEM", text: problem },
              { label: "SOLUTION", text: solution },
            ].map(({ label, text }) => (
              <div key={label}>
                <p
                  className="font-mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    color: "var(--tertiary)",
                    marginBottom: 8,
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: "22px",
                    color: "var(--on-surface-variant)",
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p
            style={{
              fontSize: 14,
              lineHeight: "22px",
              color: "var(--on-surface-variant)",
              marginBottom: 16,
            }}
          >
            {description}
          </p>
        )}

        {/* Outcome */}
        {outcome && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 16,
            }}
          >
            <span
              className="font-mono"
              style={{
                fontSize: 10,
                letterSpacing: "0.1em",
                color: "var(--tertiary)",
              }}
            >
              OUTCOME:
            </span>
            <span
              className="font-mono"
              style={{ fontSize: 10, letterSpacing: "0.1em", color: "var(--on-surface)" }}
            >
              {outcome}
            </span>
          </div>
        )}

        {/* Tags */}
        <div
          style={{
            borderTop: "1px solid rgba(68,71,72,0.2)",
            paddingTop: 16,
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          {(tags || []).map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
