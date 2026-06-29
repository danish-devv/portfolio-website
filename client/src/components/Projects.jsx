import React, { useState } from "react";

// ── colours ──────────────────────────────────────────────
const C = {
  bg: "#0A0F1E",
  bg2: "#0F1629",
  bg3: "#151D35",
  text: "#F0EEF8",
  muted: "#8B8FA8",
  purple: "#6C63FF",
  purpleLt: "#8B84FF",
  coral: "#FF6B6B",
  teal: "#4DD9AC",
  border: "rgba(108,99,255,0.18)",
  comment: "#4A5070",
};

// ── arrow icon ────────────────────────────────────────────
const ArrowIcon = () => (
  <svg
    width="12"
    height="12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    style={{ transition: "transform 0.2s", flexShrink: 0 }}
  >
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

// ── project link ──────────────────────────────────────────
const ProjectLink = ({ href, label }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "13px",
        fontWeight: 600,
        color: hovered ? C.purpleLt : C.muted,
        textDecoration: "none",
        letterSpacing: "0.04em",
        transition: "color 0.2s",
      }}
    >
      {label}
      <span
        style={{
          transform: hovered ? "translate(2px,-2px)" : "translate(0,0)",
          transition: "transform 0.2s",
          display: "inline-flex",
        }}
      >
        <ArrowIcon />
      </span>
    </a>
  );
};

// ── stack tag ─────────────────────────────────────────────
const Tag = ({ label }) => (
  <span
    style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: "11px",
      padding: "4px 10px",
      borderRadius: "4px",
      background: "rgba(108,99,255,0.12)",
      color: C.purpleLt,
      letterSpacing: "0.04em",
    }}
  >
    {label}
  </span>
);

// ── featured badge (coral) ────────────────────────────────
const FeaturedBadge = () => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: "10px",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: C.coral,
      border: "1px solid rgba(255,107,107,0.3)",
      padding: "4px 10px",
      borderRadius: "4px",
      marginBottom: "14px",
    }}
  >
    <span
      style={{
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        background: C.coral,
        display: "inline-block",
        animation: "blink 1.4s ease-in-out infinite",
      }}
    />
    Featured Project
  </div>
);

// ── mini badge (teal) ─────────────────────────────────────
const MiniBadge = () => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: "10px",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: C.teal,
      border: "1px solid rgba(77,217,172,0.3)",
      padding: "4px 10px",
      borderRadius: "4px",
      marginBottom: "14px",
    }}
  >
    <span
      style={{
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        background: C.teal,
        display: "inline-block",
      }}
    />
    Mini Project
  </div>
);

// ── featured card (spans 2 cols) ──────────────────────────
const FeaturedCard = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: "span 2",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "32px",
        alignItems: "start",
        background: C.bg2,
        border: `1px solid ${hovered ? C.purple : C.border}`,
        borderRadius: "14px",
        padding: "30px",
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.25s, transform 0.2s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        cursor: "default",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: `linear-gradient(90deg, ${C.purple}, ${C.coral})`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.25s",
        }}
      />

      <div>
        <FeaturedBadge />
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            color: C.text,
            marginBottom: "10px",
          }}
        >
          Velaro
        </div>
        <div
          style={{
            fontSize: "14px",
            color: C.muted,
            lineHeight: 1.7,
            marginBottom: "22px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          A full-stack e-commerce platform with Stripe & COD checkout, JWT auth,
          admin dashboard, Cloudinary image uploads, and a smooth cart
          experience.
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <ProjectLink href="#" label="Live Demo" />
          <ProjectLink href="#" label="GitHub" />
        </div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "18px",
          }}
        >
          {[
            "React",
            "Vite",
            "Express",
            "MongoDB",
            "Stripe",
            "Cloudinary",
            "JWT",
            "Tailwind",
            "Vercel",
            "Render",
          ].map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
        <div
          style={{
            background: C.bg3,
            border: `1px solid ${C.border}`,
            borderRadius: "10px",
            padding: "18px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
            color: C.muted,
            lineHeight: 1.9,
          }}
        >
          <div>
            <span style={{ color: C.purple }}>GET</span>
            {"  "}/api/products
          </div>
          <div>
            <span style={{ color: C.coral }}>POST</span> /api/orders/checkout
          </div>
          <div>
            <span style={{ color: C.teal }}>PUT</span>
            {"  "}/api/admin/products/:id
          </div>
          <div>
            <span style={{ color: C.purple }}>GET</span>
            {"  "}/api/orders/my-orders
          </div>
          <div style={{ marginTop: "8px", color: C.comment }}>
            {"// 12 REST endpoints • Role-based auth"}
          </div>
        </div>
      </div>
    </div>
  );
};

// ── mini card ─────────────────────────────────────────────
const MiniCard = ({ num, name, desc, stack, liveUrl, githubUrl }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: C.bg2,
        border: `1px solid ${hovered ? C.purple : C.border}`,
        borderRadius: "14px",
        padding: "30px",
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.25s, transform 0.2s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: `linear-gradient(90deg, ${C.purple}, ${C.coral})`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.25s",
        }}
      />

      <MiniBadge />

      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          color: C.purple,
          letterSpacing: "0.12em",
          marginBottom: "10px",
        }}
      >
        {num}
      </div>

      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "20px",
          fontWeight: 700,
          letterSpacing: "-0.01em",
          color: C.text,
          marginBottom: "10px",
        }}
      >
        {name}
      </div>

      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "14px",
          color: C.muted,
          lineHeight: 1.7,
          marginBottom: "22px",
          flex: 1,
        }}
      >
        {desc}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        {stack.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>

      <div style={{ display: "flex", gap: "16px" }}>
        <ProjectLink href={liveUrl} label="Live Demo" />
        <ProjectLink href={githubUrl} label="GitHub" />
      </div>
    </div>
  );
};

// ── main component ────────────────────────────────────────
const Projects = () => {
  const [btnHovered, setBtnHovered] = useState(false);

  const miniProjects = [
    {
      num: "002",
      name: "Notes App",
      desc: "A clean note-taking app with create, edit, and delete functionality. Notes persist in localStorage with a minimal, distraction-free UI.",
      stack: ["React", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      num: "003",
      name: "Snake Game",
      desc: "Classic snake game built from scratch with vanilla web tech. Includes score tracking, increasing speed, and keyboard controls.",
      stack: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .proj-fadein    { animation: fadeUp 0.65s cubic-bezier(.22,1,.36,1) both; }
        .proj-fadein-d1 { animation-delay: 0.08s; }
        .proj-fadein-d2 { animation-delay: 0.16s; }
        .proj-fadein-d3 { animation-delay: 0.24s; }
      `}</style>

      {/* Spans 100% width completely to avoid side white spaces */}
      <section
        id="projects"
        style={{
          width: "100%",
          padding: "110px 0",
          background: C.bg,
        }}
      >
        {/* Inner container limits content width and centers layout cleanly */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 60px",
          }}
        >
          {/* ── header ── */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "56px",
            }}
          >
            <div>
              <div
                className="proj-fadein"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  color: C.purple,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                // 03 — projects
              </div>
              <h2
                className="proj-fadein proj-fadein-d1"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(26px, 3vw, 42px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  margin: 0,
                  color: C.text,
                }}
              >
                Things I've built.
              </h2>
            </div>

            {/* View all on GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="proj-fadein proj-fadein-d2"
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                color: btnHovered ? C.text : C.muted,
                border: `1px solid ${btnHovered ? C.muted : C.border}`,
                padding: "13px 28px",
                borderRadius: "8px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "color 0.2s, border-color 0.2s",
                letterSpacing: "0.02em",
              }}
            >
              View All on GitHub ↗
            </a>
          </div>

          {/* ── cards grid ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            <FeaturedCard />
            {miniProjects.map((p) => (
              <MiniCard key={p.num} {...p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
