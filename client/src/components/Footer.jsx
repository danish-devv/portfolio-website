import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "30px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "1px solid rgba(108,99,255,0.18)",
        background: "#0A0F1E",
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "12px",
          color: "#8B8FA8",
          letterSpacing: "0.06em",
        }}
      >
        // danish.dev &nbsp;·&nbsp; built with{" "}
        <span style={{ color: "#6C63FF" }}>♥</span> in Lahore
      </div>

      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "12px",
          color: "#8B8FA8",
          letterSpacing: "0.06em",
        }}
      >
        © 2025 Danish &nbsp;·&nbsp;{" "}
        <span style={{ color: "#6C63FF" }}>MERN Stack Developer</span>
      </div>
    </footer>
  );
};

export default Footer;
