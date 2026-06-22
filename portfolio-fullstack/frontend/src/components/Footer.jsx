/**
 * Footer
 * Minimal editorial footer with brand name, copyright,
 * and social / navigation links.
 */
export default function Footer({ setPage }) {
  const links = [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub",   href: "https://github.com" },
    { label: "Contact",  href: null, page: "Contact" },
    { label: "Privacy",  href: null },
  ];

  return (
    <footer
      style={{
        padding: "80px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 40,
        borderTop: "1px solid var(--outline-variant)",
        background: "var(--surface-container-lowest)",
      }}
    >
      {/* Brand */}
      <div>
        <div
          className="font-literata"
          style={{
            fontSize: "clamp(20px, 3vw, 32px)",
            fontWeight: 600,
            color: "var(--primary-fixed-dim)",
            opacity: 0.5,
            marginBottom: 16,
          }}
        >
          JOY CHEPKORIR BETT
        </div>
        <p
          className="font-mono"
          style={{
            fontSize: 11,
            letterSpacing: "0.08em",
            color: "var(--on-surface-variant)",
          }}
        >
          © {new Date().getFullYear()} JOY CHEPKORIR BETT. BUILDING DIGITAL ARKS.
        </p>
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: 40, flexWrap: "wrap", alignItems: "center" }}>
        {links.map(({ label, href, page }) => (
          <button
            key={label}
            onClick={() => {
              if (page) {
                setPage(page);
                window.scrollTo({ top: 0, behavior: "instant" });
              } else if (href) {
                window.open(href, "_blank", "noopener,noreferrer");
              }
            }}
            className="font-mono"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "var(--on-surface-variant)",
              textTransform: "uppercase",
              transition: "color 0.3s, transform 0.3s",
              padding: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--tertiary-fixed)";
              e.currentTarget.style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--on-surface-variant)";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </footer>
  );
}
