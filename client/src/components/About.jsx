import React, { useEffect, useRef } from "react";

const stats = [
  { num: "2", sup: "+", label: "Production Projects Shipped" },
  { num: "10", sup: "+", label: "Technologies Mastered" },
  { num: "100", sup: "%", label: "Remote & Async Ready" },
  { num: "∞", sup: "", label: "Problems Debugged at 2 AM" },
];

// border-radius for each corner of the 2x2 stat grid
const statRadius = ["12px 0 0 0", "0 12px 0 0", "0 0 0 12px", "0 0 12px 0"];

const About = () => {
  const sectionRef = useRef(null);

  // hover effect for stat cards — adds the purple bottom line
  const handleStatEnter = (e) => {
    e.currentTarget.querySelector(".stat-line").style.opacity = "1";
  };
  const handleStatLeave = (e) => {
    e.currentTarget.querySelector(".stat-line").style.opacity = "0";
  };

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .about-fadein { animation: fadeUp 0.65s cubic-bezier(.22,1,.36,1) both; }
        .about-fadein-d1 { animation-delay: 0.08s; }
        .about-fadein-d2 { animation-delay: 0.16s; }
        .about-fadein-d3 { animation-delay: 0.24s; }
      `}</style>

      {/* Outer Section: spans 100% width to spread the background color completely */}
      <section
        id="about"
        ref={sectionRef}
        style={{
          width: "100%",
          padding: "110px 0", // Top/bottom padding here
          background: "#0A0F1E",
          color: "#F0EEF8",
        }}
      >
        {/* Inner Container: Restricts content width and keeps everything aligned and centered */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 60px", // Left/right padding here protects sides on small screens
          }}
        >
          {/* Section label */}
          <div
            className="about-fadein"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px",
              color: "#6C63FF",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            // 01 — about
          </div>

          {/* Heading */}
          <h2
            className="about-fadein about-fadein-d1"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(26px, 3vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              marginBottom: "0",
              color: "#F0EEF8",
            }}
          >
            Turning ideas into
            <br />
            production-ready apps.
          </h2>

          {/* 2-col grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "start",
              marginTop: "48px",
            }}
          >
            {/* LEFT — text */}
            <div className="about-fadein about-fadein-d2">
              {[
                <>
                  I'm a{" "}
                  <span style={{ color: "#F0EEF8" }}>MERN stack developer</span>{" "}
                  currently pursuing my BSCS degree. I don't just write code — I
                  architect solutions that are clean, scalable, and built to
                  last.
                </>,
                <>
                  From e-commerce platforms with Stripe payments to clinic
                  booking systems, I've shipped{" "}
                  <span style={{ color: "#F0EEF8" }}>real products</span> — not
                  just tutorials. I'm comfortable across the full stack: from
                  MongoDB schemas and Express APIs to React UIs and Tailwind
                  styling.
                </>,
                <>
                  I target international clients across the{" "}
                  <span style={{ color: "#F0EEF8" }}>
                    US, UAE, Canada, and Europe
                  </span>
                  , and I take pride in delivering professional-grade work that
                  holds up to scrutiny.
                </>,
              ].map((text, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                    color: "#8B8FA8",
                    lineHeight: 1.85,
                    marginBottom: "20px",
                  }}
                >
                  {text}
                </p>
              ))}
            </div>

            {/* RIGHT — stats grid */}
            <div
              className="about-fadein about-fadein-d3"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2px",
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  onMouseEnter={handleStatEnter}
                  onMouseLeave={handleStatLeave}
                  style={{
                    background: "#0F1629",
                    border: "1px solid rgba(108,99,255,0.18)",
                    padding: "28px 24px",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: statRadius[i],
                    cursor: "default",
                  }}
                >
                  {/* Number */}
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "40px",
                      fontWeight: 700,
                      color: "#6C63FF",
                      lineHeight: 1,
                      marginBottom: "8px",
                    }}
                  >
                    {stat.num}
                    {stat.sup && (
                      <sup style={{ fontSize: "22px" }}>{stat.sup}</sup>
                    )}
                  </div>

                  {/* Label */}
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      color: "#8B8FA8",
                    }}
                  >
                    {stat.label}
                  </div>

                  {/* Hover bottom line */}
                  <div
                    className="stat-line"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background:
                        "linear-gradient(90deg, #6C63FF, transparent)",
                      opacity: 0,
                      transition: "opacity 0.3s",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
