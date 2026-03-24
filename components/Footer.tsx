export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#020617",
        borderTop: "1px solid #1e293b",
        padding: "28px 30px",
        color: "#cbd5e1",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <p
            style={{
              margin: 0,
              fontSize: "15px",
              color: "#94a3b8",
            }}
          >
            © 2026 MP Tech – Modern Code. Practical Solutions. All rights reserved.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:papanikprofessional@gmail.com"
            style={{
              color: "#e2e8f0",
              textDecoration: "none",
              fontSize: "15px",
            }}
          >
            Email
          </a>

          <a
            href="https://github.com/mikepapanik"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#e2e8f0",
              textDecoration: "none",
              fontSize: "15px",
            }}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mikepapanik"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#e2e8f0",
              textDecoration: "none",
              fontSize: "15px",
            }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}