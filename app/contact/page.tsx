export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: `
          linear-gradient(rgba(9, 14, 28, 0.80), rgba(9, 14, 28, 0.84)),
          url("/backgrounds/contact-bg.jpg")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        color: "white",
        fontFamily: "sans-serif",
        padding: "70px 30px 90px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "980px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "42px" }}>
          <p
            style={{
              color: "#94a3b8",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "12px",
              fontSize: "14px",
            }}
          >
            Contact
          </p>

          <h1
            style={{
              fontSize: "48px",
              marginBottom: "18px",
            }}
          >
            Get in Touch
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
              lineHeight: "1.8",
              maxWidth: "760px",
              margin: 0,
            }}
          >
            If you would like to get in touch regarding a collaboration, a job
            opportunity, or to learn more about my projects and applications,
            you can find me through the contact options below.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "22px",
            alignItems: "stretch",
          }}
        >
          <a
            href="mailto:papanikprofessional@gmail.com"
            style={{
              backgroundColor: "#020617",
              border: "1px solid #1e293b",
              borderRadius: "22px",
              padding: "28px",
              textDecoration: "none",
              color: "white",
              boxShadow: "0 12px 30px rgba(0, 0, 0, 0.18)",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <div
              style={{
                width: "58px",
                height: "58px",
                borderRadius: "16px",
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                marginBottom: "18px",
              }}
            >
              ✉️
            </div>

            <h2
              style={{
                fontSize: "24px",
                marginBottom: "12px",
              }}
            >
              Email
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
                marginBottom: "14px",
              }}
            >
              Send me an email for professional inquiries, collaborations, or
              job opportunities.
            </p>

            <p
              style={{
                color: "#ffffff",
                fontWeight: "bold",
                margin: "auto 0 0 0",
                wordBreak: "break-word",
              }}
            >
              papanikprofessional@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/mikepapanik"
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: "#020617",
              border: "1px solid #1e293b",
              borderRadius: "22px",
              padding: "28px",
              textDecoration: "none",
              color: "white",
              boxShadow: "0 12px 30px rgba(0, 0, 0, 0.18)",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <div
              style={{
                width: "58px",
                height: "58px",
                borderRadius: "16px",
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                marginBottom: "18px",
              }}
            >
              💻
            </div>

            <h2
              style={{
                fontSize: "24px",
                marginBottom: "12px",
              }}
            >
              GitHub
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
                marginBottom: "14px",
              }}
            >
              Explore my repositories, application source code, and the overall
              work I have built as a developer.
            </p>

            <p
              style={{
                color: "#ffffff",
                fontWeight: "bold",
                margin: "auto 0 0 0",
                wordBreak: "break-word",
              }}
            >
              github.com/mikepapanik
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/mikepapanik"
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: "#020617",
              border: "1px solid #1e293b",
              borderRadius: "22px",
              padding: "28px",
              textDecoration: "none",
              color: "white",
              boxShadow: "0 12px 30px rgba(0, 0, 0, 0.18)",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <div
              style={{
                width: "58px",
                height: "58px",
                borderRadius: "16px",
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                marginBottom: "18px",
              }}
            >
              🔗
            </div>

            <h2
              style={{
                fontSize: "24px",
                marginBottom: "12px",
              }}
            >
              LinkedIn
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
                marginBottom: "14px",
              }}
            >
              Connect with me on LinkedIn to view my professional profile and
              get in touch more directly.
            </p>

            <p
              style={{
                color: "#ffffff",
                fontWeight: "bold",
                margin: "auto 0 0 0",
                wordBreak: "break-word",
              }}
            >
              linkedin.com/in/mikepapanik
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}