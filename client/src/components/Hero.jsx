import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "100px 60px 60px",
        position: "relative",
        overflow: "hidden",
        background: "#0A0F1E",
        color: "#F0EEF8",
      }}
    >
      {/* ── Glow Blobs ── */}
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          filter: "blur(120px)",
          pointerEvents: "none",
          zIndex: 0,
          width: "500px",
          height: "500px",
          background: "rgba(108,99,255,0.11)",
          top: "-80px",
          right: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          filter: "blur(120px)",
          pointerEvents: "none",
          zIndex: 0,
          width: "380px",
          height: "380px",
          background: "rgba(255,107,107,0.07)",
          bottom: "-60px",
          left: "-60px",
        }}
      />

      {/* ── 2-column grid ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 440px",
          gap: "64px",
          alignItems: "center",
          width: "100%",
          maxWidth: "1260px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── LEFT: Text ── */}
        <div>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              color: "#6C63FF",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "32px",
                height: "1px",
                background: "#6C63FF",
                flexShrink: 0,
              }}
            />
            Available for freelance work
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(36px, 4.2vw, 62px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "22px",
              color: "#F0EEF8",
            }}
          >
            I build
            <br />
            <span style={{ color: "#6C63FF" }}>full-stack</span>
            <br />
            <span style={{ color: "#8B8FA8", fontWeight: 300 }}>
              web apps.
              <span
                style={{
                  display: "inline-block",
                  width: "3px",
                  height: "0.85em",
                  background: "#FF6B6B",
                  marginLeft: "4px",
                  verticalAlign: "middle",
                  animation: "blink 1s step-end infinite",
                }}
              />
            </span>
          </h1>

          {/* Description */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              color: "#8B8FA8",
              lineHeight: 1.78,
              marginBottom: "36px",
              fontWeight: 400,
            }}
          >
            Hey, I'm{" "}
            <span style={{ color: "#F0EEF8", fontWeight: 500 }}>Danish</span> —
            a MERN stack developer from Lahore, Pakistan. I design and ship
            fast, scalable web applications for{" "}
            <span style={{ color: "#F0EEF8", fontWeight: 500 }}>
              startups and businesses
            </span>{" "}
            worldwide.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "14px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#projects"
              style={{
                background: "#6C63FF",
                color: "#fff",
                border: "none",
                padding: "13px 28px",
                borderRadius: "8px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                cursor: "pointer",
                transition: "background 0.2s, transform 0.15s",
                letterSpacing: "0.02em",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#8B84FF";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#6C63FF";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              View Projects
            </a>

            <a
              href="#contact"
              style={{
                color: "#8B8FA8",
                border: "1px solid rgba(108,99,255,0.18)",
                padding: "13px 28px",
                borderRadius: "8px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                cursor: "pointer",
                transition: "color 0.2s, border-color 0.2s",
                letterSpacing: "0.02em",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#F0EEF8";
                e.currentTarget.style.borderColor = "#8B8FA8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#8B8FA8";
                e.currentTarget.style.borderColor = "rgba(108,99,255,0.18)";
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* ── RIGHT: Terminal ── */}
        <div>
          <div
            style={{
              background: "#0F1629",
              border: "1px solid rgba(108,99,255,0.18)",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(108,99,255,0.08)",
            }}
          >
            {/* Terminal bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 18px",
                background: "#151D35",
                borderBottom: "1px solid rgba(108,99,255,0.18)",
              }}
            >
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#FF5F57",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#FEBC2E",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#28C840",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  color: "#8B8FA8",
                  marginLeft: "auto",
                  marginRight: "auto",
                  letterSpacing: "0.06em",
                }}
              >
                danish.config.js
              </span>
            </div>

            {/* Terminal body */}
            <div
              style={{
                padding: "24px 22px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px",
                lineHeight: 1.95,
              }}
            >
              {/* Colors */}
              {(() => {
                const k = { color: "#FF6B6B" }; // keyword  (const)
                const t = { color: "#F0EEF8" }; // text     (developer)
                const p = { color: "#8B84FF" }; // purple   (keys)
                const o = { color: "#8B8FA8" }; // obj      ({ , })
                const s = { color: "#FFD580" }; // string   ("")
                const v = { color: "#A5D6A7" }; // value    (true)
                const c = { color: "#4A5070" }; // comment
                return (
                  <>
                    <div>
                      <span style={k}>const</span>{" "}
                      <span style={t}>developer</span>{" "}
                      <span style={o}>= {"{"}</span>
                    </div>
                    <div>
                      &nbsp;&nbsp;<span style={p}>name</span>
                      <span style={o}>:</span> <span style={s}>"Danish"</span>
                      <span style={o}>,</span>
                    </div>
                    <div>
                      &nbsp;&nbsp;<span style={p}>role</span>
                      <span style={o}>:</span>{" "}
                      <span style={s}>"MERN Stack Dev"</span>
                      <span style={o}>,</span>
                    </div>
                    <div>
                      &nbsp;&nbsp;<span style={p}>location</span>
                      <span style={o}>:</span>{" "}
                      <span style={s}>"Lahore, PK 🇵🇰"</span>
                      <span style={o}>,</span>
                    </div>
                    <div>
                      &nbsp;&nbsp;<span style={p}>stack</span>
                      <span style={o}>: [</span>
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span style={s}>"React"</span>
                      <span style={o}>,</span> <span style={s}>"Node.js"</span>
                      <span style={o}>,</span>
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span style={s}>"Express"</span>
                      <span style={o}>,</span> <span style={s}>"MongoDB"</span>
                    </div>
                    <div>
                      &nbsp;&nbsp;<span style={o}>],</span>
                    </div>
                    <div>
                      &nbsp;&nbsp;<span style={p}>available</span>
                      <span style={o}>:</span> <span style={v}>true</span>
                      <span style={o}>,</span>
                    </div>
                    <div>
                      &nbsp;&nbsp;<span style={p}>coffee</span>
                      <span style={o}>:</span>{" "}
                      <span style={s}>"always ☕"</span>
                    </div>
                    <div>
                      <span style={o}>{"}"}</span>
                    </div>
                    <br />
                    <div>
                      <span style={c}>{"// Let's ship something great →"}</span>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </div>

      {/* ── Blink keyframe ── */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
