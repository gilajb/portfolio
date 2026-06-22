import { useState, useEffect } from "react";

/**
 * Nav
 * Glassmorphism fixed navigation with dark/light mode toggle
 * and a collapsible mobile menu overlay.
 */
export default function Nav({ page, setPage, darkMode, setDarkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 769) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navItems = ["Home", "About", "Projects", "Contact"];

  const handleNav = (p) => {
    setPage(p);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <>
      {/* ── Desktop / Sticky Header ── */}
      <header
        className="glass-nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 50,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 80px",
        }}
      >
        {/* Logo */}
        <div
          className="font-mono"
          onClick={() => handleNav("Home")}
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.2em",
            cursor: "pointer",
            color: "var(--on-surface)",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "var(--tertiary)")}
          onMouseLeave={(e) => (e.target.style.color = "var(--on-surface)")}
        >
          JOY CHEPKORIR BETT
        </div>

        {/* Desktop nav links */}
        <nav
          className="hide-mobile"
          style={{ display: "flex", gap: 40, alignItems: "center" }}
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNav(item)}
              className={`nav-link ${page === item ? "active" : ""}`}
            >
              {item}
            </button>
          ))}

          <button
            onClick={() => handleNav("Contact")}
            className="btn-primary btn-premium"
            style={{ padding: "10px 24px", fontSize: 11 }}
          >
            WORK WITH ME
          </button>

          {/* Theme toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--on-surface-variant)",
              display: "flex",
              alignItems: "center",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--tertiary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--on-surface-variant)")
            }
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
              {darkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>
        </nav>

        {/* Mobile controls */}
        <div
          className="show-mobile"
          style={{ gap: 16, alignItems: "center" }}
        >
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--on-surface-variant)" }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
              {darkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--on-surface)" }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 26 }}>menu</span>
          </button>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div className={`mobile-menu ${mobileOpen ? "visible" : "hidden"}`}>
        <button
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
          style={{
            position: "absolute", top: 24, right: 24,
            background: "none", border: "none", cursor: "pointer",
            color: "var(--on-surface)",
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 28 }}>close</span>
        </button>

        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => handleNav(item)}
            className="font-literata"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "clamp(28px, 6vw, 40px)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: page === item ? "var(--tertiary)" : "var(--on-surface)",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--tertiary)")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color =
                page === item ? "var(--tertiary)" : "var(--on-surface)")
            }
          >
            {item}
          </button>
        ))}

        <button
          onClick={() => handleNav("Contact")}
          className="btn-gold"
          style={{ marginTop: 16 }}
        >
          WORK WITH ME
        </button>
      </div>
    </>
  );
}
