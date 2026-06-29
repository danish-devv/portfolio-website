import React, { useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    dotColor: "#6C63FF",
    skills: [
      "React",
      "Vite",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML / CSS",
      "React Native",
      "Context API",
      "React Router",
    ],
  },
  {
    title: "Backend",
    dotColor: "#FF6B6B",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "JWT Auth",
      "Stripe API",
      "Cloudinary",
    ],
  },
  {
    title: "Tools & Deployment",
    dotColor: "#4DD9AC",
    skills: ["Git & GitHub", "Vercel", "Render", "Postman", "VS Code"],
  },
];

const Pill = ({ label, dotColor }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "14px",
        fontWeight: 500,
        padding: "9px 18px",
        borderRadius: "100px",
        border: `1px solid ${hovered ? "#6C63FF" : "rgba(108,99,255,0.18)"}`,
        background: "#151D35",
        color: hovered ? "#8B84FF" : "#F0EEF8",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "border-color 0.2s, color 0.2s, transform 0.15s",
        cursor: "default",
      }}
    >
      {/* Dot */}
      <span
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: dotColor,
          flexShrink: 0,
          display: "inline-block",
        }}
      />
      {label}
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .skills-fadein    { animation: fadeUp 0.65s cubic-bezier(.22,1,.36,1) both; }
        .skills-fadein-d1 { animation-delay: 0.08s; }
        .skills-fadein-d2 { animation-delay: 0.16s; }
        .skills-fadein-d3 { animation-delay: 0.24s; }
        .skills-fadein-d4 { animation-delay: 0.32s; }
      `}</style>

      <section
        id="skills"
        style={{
          padding: "110px 60px",
          background: "#0F1629",
          borderTop: "1px solid rgba(108,99,255,0.18)",
          borderBottom: "1px solid rgba(108,99,255,0.18)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "56px",
            }}
          >
            <div>
              {/* Section label */}
              <div
                className="skills-fadein"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  color: "#6C63FF",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                // 02 — skills
              </div>

              {/* Heading */}
              <h2
                className="skills-fadein skills-fadein-d1"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(26px, 3vw, 42px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  margin: 0,
                  color: "#F0EEF8",
                }}
              >
                My tech stack.
              </h2>
            </div>
          </div>

          {/* Categories */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "44px" }}
          >
            {skillCategories.map((cat, i) => (
              <div
                key={cat.title}
                className={`skills-fadein skills-fadein-d${i + 2}`}
              >
                {/* Category title */}
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "11px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#8B8FA8",
                    marginBottom: "14px",
                  }}
                >
                  {cat.title}
                </div>

                {/* Pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {cat.skills.map((skill) => (
                    <Pill key={skill} label={skill} dotColor={cat.dotColor} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
