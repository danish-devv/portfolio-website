import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Google Fonts — Space Grotesk + JetBrains Mono */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b"
        style={{
          padding: "20px 60px",
          background: "rgba(10,15,30,0.75)",
          backdropFilter: "blur(18px)",
          borderColor: "rgba(108,99,255,0.18)",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "14px",
            color: "#6C63FF",
            letterSpacing: "0.08em",
          }}
        >
          // danish.dev
        </div>

        {/* Nav Links */}
        <ul
          className="hidden md:flex items-center list-none"
          style={{ gap: "36px" }}
        >
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="no-underline uppercase transition-colors duration-200"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#8B8FA8",
                  letterSpacing: "0.06em",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#F0EEF8")}
                onMouseLeave={(e) => (e.target.style.color = "#8B8FA8")}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Download Resume Button */}
        <a
          href="/Muhammad_Danish_Resume.pdf"
          download
          className="flex items-center gap-2 no-underline transition-all duration-200"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "13px",
            fontWeight: 600,
            color: "#6C63FF",
            border: "1px solid #6C63FF",
            padding: "8px 20px",
            borderRadius: "6px",
            letterSpacing: "0.04em",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#6C63FF";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#6C63FF";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
            />
          </svg>
          Resume
        </a>
      </nav>
    </>
  );
};

export default Navbar;
