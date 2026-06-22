import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const API_ENDPOINT = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api/contact/`
  : "http://127.0.0.1:8000/api/contact/";

const INQUIRY_TYPES = [
  "Startup Collaboration/Advice",
  "Tech Project/ Product Development",
  "Research & Innovation",
  "Partnership Opportunity",
  "Hackathons & Competitions",
  "Mentorship & Networking",
  "Speaking Engagement",
  "Other",
];

const CONTACT_INFO = [
  { icon: "mail",     label: "Email",          value: "joygila.dev@gmail.com" },
  { icon: "location_on", label: "Based in",    value: "Nairobi, Kenya" },
  { icon: "schedule", label: "Response time",  value: "Within 24 hours" },
  { icon: "work",     label: "Availability",   value: "Open to opportunities" },
];

const SOCIALS = [
  { name: "LinkedIn",   handle: "Joy Chepkorir Bett", href: "https://www.linkedin.com/in/joy-bett-743560324/" },
  { name: "GitHub",     handle: "gilajb",       href: "https://github.com/gilajb" },
  { name: "X",handle: "@gila_jb",         href: "https://x.com/gila_jb" },
  { name: "Buy me a coffee", handle: "Joy Bett", href: "https://buymeacoffee.com/joybett" },
];


/**
 * Contact Page
 * ─ Hero headline
 * ─ Two-column layout: editorial form (left) + info panel (right)
 * ─ Submits to Django REST endpoint POST /api/contact/
 */
export default function ContactPage() {
  useReveal();

  const [form, setForm] = useState({
    name: "", email: "", company: "", type: "", message: "",
  });
  const [errors, setErrors]     = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [serverError, setServerError] = useState("");

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Name is required.";
    if (!form.email.trim())   e.email   = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message cannot be empty.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setServerError("");

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setServerError(
          data?.detail || "Something went wrong. Please try again."
        );
      }
    } catch {
      // Network error or Django not running — show friendly fallback
      setServerError(
        "Could not reach the server. Check your connection or email me directly."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ paddingTop: 88 }}>
      {/* Ambient blobs */}
      <div
        className="ambient-blob"
        style={{ position: "fixed", top: 0, left: "-10%", zIndex: -1 }}
        aria-hidden="true"
      />
      <div
        className="ambient-blob"
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          width: 700,
          height: 700,
          zIndex: -1,
          animationDelay: "-5s",
        }}
        aria-hidden="true"
      />

      {/* ── Hero ──────────────────────────────────────── */}
      <section style={{ padding: "80px 80px 80px", position: "relative", zIndex: 1 }}>
        <div className="reveal" style={{ maxWidth: 720 }}>
          <span
            className="font-mono"
            style={{
              fontSize: 11,
              letterSpacing: "0.3em",
              color: "var(--tertiary)",
              display: "block",
              marginBottom: 20,
            }}
          >
            INTRODUCE YOURSELF
          </span>
          <h1
            className="font-literata"
            style={{
              fontSize: "clamp(48px, 7vw, 80px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              marginBottom: 32,
            }}
          >
            Let's Build the{" "}
            <em
              className="font-literata"
              style={{ fontStyle: "italic", color: "var(--primary-fixed-dim)" }}
            >
              Future
            </em>{" "}
            of Code.
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: "28px",
              color: "var(--on-surface-variant)",
              maxWidth: 560,
            }}
          >
            Whether you're looking for a strategic technical partner, an
            engineering leader, or a collaborator on something world-changing
            — the conversation starts here.
          </p>
        </div>
      </section>

      {/* ── Main two-column grid ──────────────────────── */}
      <section
        style={{
          padding: "0 80px 120px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: 80,
          }}
        >
          {/* ── LEFT: Form ── */}
          <div className="reveal">
            {submitted ? (
              <div className="form-success">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 44, color: "var(--tertiary)", display: "block", marginBottom: 20 }}
                >
                  check_circle
                </span>
                <h3
                  className="font-literata"
                  style={{ fontSize: 26, fontWeight: 600, marginBottom: 14 }}
                >
                  Message Transmitted.
                </h3>
                <p style={{ fontSize: 16, color: "var(--on-surface-variant)", lineHeight: "26px" }}>
                  I'll be in touch within 24 hours. In the meantime, explore
                  the projects.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div
                  className="font-mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    color: "var(--tertiary)",
                    marginBottom: 40,
                  }}
                >
                  CONTACT FORM
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
                  {/* Text fields */}
                  {[
                    { key: "name",    label: "Full Name",             type: "text",     required: true  },
                    { key: "email",   label: "Email Address",         type: "email",   required: true  },
                    { key: "company", label: "Company / Organisation / School", type: "text",   required: false },
                  ].map(({ key, label, type, placeholder, required }) => (
                    <div key={key}>
                      <label
                        className="font-mono"
                        htmlFor={`field-${key}`}
                        style={{
                          fontSize: 10,
                          letterSpacing: "0.1em",
                          color: "var(--on-surface-variant)",
                          display: "block",
                          marginBottom: 8,
                        }}
                      >
                        {label}
                        {required && (
                          <span style={{ color: "var(--tertiary)", marginLeft: 4 }}>*</span>
                        )}
                      </label>
                      <input
                        id={`field-${key}`}
                        type={type}
                        placeholder={placeholder}
                        value={form[key]}
                        onChange={(e) => updateField(key, e.target.value)}
                        className="input-underline"
                        required={required}
                        aria-invalid={!!errors[key]}
                        aria-describedby={errors[key] ? `err-${key}` : undefined}
                      />
                      {errors[key] && (
                        <span
                          id={`err-${key}`}
                          className="font-mono"
                          role="alert"
                          style={{ fontSize: 10, color: "#ffb4ab", marginTop: 6, display: "block" }}
                        >
                          {errors[key]}
                        </span>
                      )}
                    </div>
                  ))}

                  {/* Inquiry type selector */}
                  <div>
                    <div
                      className="font-mono"
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        color: "var(--on-surface-variant)",
                        marginBottom: 14,
                      }}
                    >
                      INQUIRY TYPE
                    </div>
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: 10 }}
                      role="group"
                      aria-label="Select inquiry type"
                    >
                      {INQUIRY_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => updateField("type", type)}
                          className="font-mono"
                          aria-pressed={form.type === type}
                          style={{
                            padding: "8px 16px",
                            fontSize: 10,
                            letterSpacing: "0.1em",
                            border:
                              form.type === type
                                ? "1px solid var(--tertiary)"
                                : "1px solid var(--outline-variant)",
                            color:
                              form.type === type
                                ? "var(--tertiary)"
                                : "var(--on-surface-variant)",
                            background:
                              form.type === type
                                ? "rgba(233,195,73,0.08)"
                                : "transparent",
                            cursor: "pointer",
                            borderRadius: 2,
                            transition: "all 0.3s",
                          }}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label
                      className="font-mono"
                      htmlFor="field-message"
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        color: "var(--on-surface-variant)",
                        display: "block",
                        marginBottom: 8,
                      }}
                    >
                      MESSAGE <span style={{ color: "var(--tertiary)" }}>*</span>
                    </label>
                    <textarea
                      id="field-message"
                      placeholder="Tell me about your project, challenge, or opportunity..."
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      className="input-underline"
                      rows={5}
                      required
                      style={{ resize: "none" }}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "err-message" : undefined}
                    />
                    {errors.message && (
                      <span
                        id="err-message"
                        className="font-mono"
                        role="alert"
                        style={{ fontSize: 10, color: "#ffb4ab", marginTop: 6, display: "block" }}
                      >
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Server error */}
                  {serverError && (
                    <div
                      role="alert"
                      style={{
                        padding: "12px 16px",
                        background: "rgba(255,180,171,0.08)",
                        border: "1px solid rgba(255,180,171,0.25)",
                        fontSize: 13,
                        color: "#ffb4ab",
                      }}
                    >
                      {serverError}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold btn-premium"
                    style={{
                      padding: "18px 48px",
                      opacity: loading ? 0.7 : 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      cursor: loading ? "not-allowed" : "pointer",
                    }}
                  >
                    {loading ? "TRANSMITTING..." : "TRANSMIT MESSAGE"}
                    {!loading && (
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                        send
                      </span>
                    )}
                  </button>

                  <p
                    className="font-mono"
                    style={{ fontSize: 10, color: "var(--on-surface-variant)", opacity: 0.6 }}
                  >
                    Message is sent securely and will be treated with confidentiality. I respect your privacy and will not share your information with third parties.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* ── RIGHT: Info panel ── */}
          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <div
              className="font-mono"
              style={{
                fontSize: 10,
                letterSpacing: "0.1em",
                color: "var(--tertiary)",
                marginBottom: 40,
              }}
            >
              CONTACT DETAILS
            </div>

            {/* Info items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 28, marginBottom: 60 }}>
              {CONTACT_INFO.map((info) => (
                <div key={info.label} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 20, color: "var(--tertiary)", marginTop: 2 }}
                  >
                    {info.icon}
                  </span>
                  <div>
                    <div
                      className="font-mono"
                      style={{ fontSize: 10, letterSpacing: "0.08em", color: "var(--on-surface-variant)", marginBottom: 4 }}
                    >
                      {info.label}
                    </div>
                    <div style={{ fontSize: 16, color: "var(--on-surface)" }}>{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div
              style={{
                borderTop: "1px solid var(--outline-variant)",
                paddingTop: 40,
                marginBottom: 48,
              }}
            >
              <div
                className="font-mono"
                style={{ fontSize: 10, letterSpacing: "0.1em", color: "var(--tertiary)", marginBottom: 24 }}
              >
                SOCIAL CHANNELS
              </div>
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(68,71,72,0.2)",
                    textDecoration: "none",
                    transition: "border-color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderBottomColor = "rgba(233,195,73,0.4)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderBottomColor = "rgba(68,71,72,0.2)")
                  }
                >
                  <span
                    className="font-mono"
                    style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", color: "var(--on-surface)" }}
                  >
                    {s.name}
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 13, color: "var(--on-surface-variant)" }}>
                      {s.handle}
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 14, color: "var(--tertiary)" }}
                    >
                      arrow_outward
                    </span>
                  </div>
                </a>
              ))}
              <div className="info-card" style={{ padding: 24 }}>
                <div
                  className="font-mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    color: "var(--tertiary)",
                    marginBottom: 14,
                  }}
                >
                  CURRENT FOCUS
                </div>

                <p
                  style={{
                    fontSize: 14,
                    lineHeight: "24px",
                    color: "var(--on-surface-variant)",
                  }}
                >
                  Building technology at the intersection of social impact,
                  health, climate, and community innovation through
                  research-driven product development as I strengthen 
                  my skills in for my goals in Computer Engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
