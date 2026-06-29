import React, { useState } from "react";

// ── colours ──────────────────────────
const C = {
  bg2: "#0F1629",
  bg3: "#151D35",
  text: "#F0EEF8",
  muted: "#8B8FA8",
  purple: "#6C63FF",
  purpleLt: "#8B84FF",
  border: "rgba(108,99,255,0.18)",
  green: "#28C840",
  red: "#FF6B6B",
};

// ── reusable field component ─────────────────────────────
const Field = ({ label, children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      width: "100%",
    }}
  >
    <label
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: C.muted,
      }}
    >
      {label}
    </label>
    {children}
  </div>
);

// ── shared input styles ──────────────────────────────────
const inputStyle = (focused) => ({
  background: C.bg3,
  border: `1px solid ${focused ? C.purple : C.border}`,
  borderRadius: "8px",
  padding: "13px 16px",
  color: C.text,
  fontFamily: "'Inter', sans-serif",
  fontSize: "15px",
  outline: "none",
  transition: "border-color 0.2s",
  width: "100%",
});

// ── social link ──────────────────────────────────────────
const SocialLink = ({ href, icon, label }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "13px",
        fontWeight: 500,
        color: hovered ? C.text : C.muted,
        textDecoration: "none",
        padding: "10px 18px",
        border: `1px solid ${hovered ? C.muted : C.border}`,
        borderRadius: "8px",
        transition: "color 0.2s, border-color 0.2s",
      }}
    >
      {icon}
      {label}
    </a>
  );
};

// ── main component ───────────────────────────────────────
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focused, setFocused] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus("error");
      setErrorMsg("Please fill in all fields.");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    try {
      setStatus("loading");
      // Simulated API handling context safely inside component execution
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err?.response?.data?.message || "Something went wrong. Try again.",
      );
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const btnLabel = {
    idle: "Send Message →",
    loading: "Sending...",
    success: "Message Sent! ✓",
    error: errorMsg,
  }[status];

  const btnBg = {
    idle: C.purple,
    loading: C.purpleLt,
    success: C.green,
    error: C.red,
  }[status];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .contact-fadein    { animation: fadeUp 0.65s cubic-bezier(.22,1,.36,1) both; }
        .contact-fadein-d1 { animation-delay: 0.08s; }
        .contact-fadein-d2 { animation-delay: 0.16s; }
        .contact-fadein-d3 { animation-delay: 0.24s; }

        .contact-textarea {
          resize: vertical;
          min-height: 120px;
        }
        .contact-input::placeholder,
        .contact-textarea::placeholder { color: ${C.muted}; }
      `}</style>

      {/* Spans 100% background container width */}
      <section
        id="contact"
        style={{
          width: "100%",
          padding: "110px 0",
          background: C.bg2,
          borderTop: `1px solid ${C.border}`,
        }}
      >
        {/* Constrains the contents correctly to fix side layout gaps */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 60px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* ── LEFT: info + socials ── */}
          <div>
            <div
              className="contact-fadein"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                color: C.purple,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              // 04 — contact
            </div>

            <h2
              className="contact-fadein contact-fadein-d1"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(26px, 3vw, 42px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                color: C.text,
                marginBottom: "18px",
              }}
            >
              Let's work
              <br />
              together.
            </h2>

            <p
              className="contact-fadein contact-fadein-d2"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                color: C.muted,
                lineHeight: 1.8,
                marginBottom: "36px",
              }}
            >
              Got a project in mind? I'm open to freelance work, full-time
              roles, and SaaS collaborations. Let's talk.
            </p>

            <div
              className="contact-fadein contact-fadein-d3"
              style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}
            >
              <SocialLink
                href="https://github.com/danish-devv"
                label="GitHub"
                icon={
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                }
              />
              <SocialLink
                href="https://www.linkedin.com/in/danish-akram/"
                label="LinkedIn"
                icon={
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                }
              />
              <SocialLink
                href="mailto:danishmr835@gmail.com"
                label="Email"
                icon={
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                }
              />
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div
            className="contact-fadein contact-fadein-d2"
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {/* Name + Email row */}
            <div style={{ display: "flex", gap: "16px", width: "100%" }}>
              <Field label="Name">
                <input
                  className="contact-input"
                  type="text"
                  name="name"
                  placeholder="John Smith"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused("")}
                  style={inputStyle(focused === "name")}
                />
              </Field>
              <Field label="Email">
                <input
                  className="contact-input"
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                  style={inputStyle(focused === "email")}
                />
              </Field>
            </div>

            {/* Subject */}
            <Field label="Subject">
              <input
                className="contact-input"
                type="text"
                name="subject"
                placeholder="Project Inquiry"
                value={form.subject}
                onChange={handleChange}
                onFocus={() => setFocused("subject")}
                onBlur={() => setFocused("")}
                style={inputStyle(focused === "subject")}
              />
            </Field>

            {/* Message */}
            <Field label="Message">
              <textarea
                className="contact-textarea"
                name="message"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused("")}
                style={{
                  ...inputStyle(focused === "message"),
                  resize: "vertical",
                  minHeight: "120px",
                }}
              />
            </Field>

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              style={{
                background: btnBg,
                color: "#fff",
                border: "none",
                padding: "14px 30px",
                borderRadius: "8px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "15px",
                fontWeight: 600,
                cursor: status === "loading" ? "not-allowed" : "pointer",
                transition: "background 0.2s, transform 0.15s",
                letterSpacing: "0.02em",
                alignSelf: "flex-start",
                opacity: status === "loading" ? 0.8 : 1,
              }}
              onMouseEnter={(e) => {
                if (status === "idle") {
                  e.currentTarget.style.background = C.purpleLt;
                  e.currentTarget.style.transform = "translateY(-1px)";
                }
              }}
              onMouseLeave={(e) => {
                if (status === "idle") {
                  e.currentTarget.style.background = C.purple;
                  e.currentTarget.style.transform = "translateY(0)";
                }
              }}
            >
              {btnLabel}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
