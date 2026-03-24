import Link from "next/link";

const apps = [
  {
    title: "Instagram Pending Requests Canceler",
    description:
      "Python desktop automation tool that reads usernames from an exported HTML file and helps cancel pending Instagram follow requests through an automated browser workflow. Built with Selenium-based interaction and designed to simplify repetitive account management actions after manual login.",
    image: "/projects/instagram-requests-canceler.png",
    download: "/apps/InstagramRequestCleaner.zip",
    github: "https://github.com/mikepapanik",
    version: "v1.0.0",
    size: "50 MB",
    platform: "Windows",
  },
];

export default function MiniAppsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: `
          linear-gradient(rgba(9, 14, 28, 0.80), rgba(9, 14, 28, 0.84)),
          url("/backgrounds/miniapps-bg.jpg")
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
          maxWidth: "1150px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            marginBottom: "50px",
            textAlign: "center",
            maxWidth: "750px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <p
            style={{
              color: "#94a3b8",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "14px",
              fontSize: "14px",
            }}
          >
            Mini Applications
          </p>

          <h1
            style={{
              fontSize: "48px",
              marginBottom: "18px",
            }}
          >
            Mini Applications
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
              lineHeight: "1.8",
              margin: 0,
            }}
          >
            Small desktop utilities and automation tools I have developed.
            Download the executable package or explore the source code on
            GitHub.
          </p>
        </div>

        {/* APPS GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 420px))",
            gap: "26px",
            justifyContent: "center",
          }}
        >
          {apps.map((app) => (
            <article
              key={app.title}
              style={{
                backgroundColor: "#020617",
                border: "1px solid #1e293b",
                borderRadius: "22px",
                overflow: "hidden",
                boxShadow: "0 14px 35px rgba(0, 0, 0, 0.22)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* IMAGE */}
              <div
                style={{
                  backgroundColor: "#111827",
                  borderBottom: "1px solid #1e293b",
                  padding: "14px",
                }}
              >
                <img
                  src={app.image}
                  alt={app.title}
                  style={{
                    width: "100%",
                    height: "190px",
                    objectFit: "cover",
                    borderRadius: "14px",
                  }}
                />
              </div>

              {/* CONTENT */}
              <div
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                {/* TAGS */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginBottom: "14px",
                  }}
                >
                  <span
                    style={{
                      padding: "7px 12px",
                      borderRadius: "999px",
                      backgroundColor: "#1e293b",
                      border: "1px solid #334155",
                      color: "#e2e8f0",
                      fontSize: "13px",
                    }}
                  >
                    {app.platform}
                  </span>

                  <span
                    style={{
                      padding: "7px 12px",
                      borderRadius: "999px",
                      backgroundColor: "#1e293b",
                      border: "1px solid #334155",
                      color: "#e2e8f0",
                      fontSize: "13px",
                    }}
                  >
                    {app.version}
                  </span>

                  <span
                    style={{
                      padding: "7px 12px",
                      borderRadius: "999px",
                      backgroundColor: "#1e293b",
                      border: "1px solid #334155",
                      color: "#e2e8f0",
                      fontSize: "13px",
                    }}
                  >
                    {app.size}
                  </span>
                </div>

                {/* TITLE */}
                <h2
                  style={{
                    fontSize: "26px",
                    marginBottom: "12px",
                    lineHeight: "1.3",
                  }}
                >
                  {app.title}
                </h2>

                {/* DESCRIPTION */}
                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: "1.9",
                    marginBottom: "26px",
                    textAlign: "justify",
                    fontSize: "16px",
                  }}
                >
                  {app.description}
                </p>

                {/* BUTTONS */}
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    marginTop: "auto",
                  }}
                >
                  <a
                    href={app.download}
                    download
                    style={{
                      padding: "12px 20px",
                      backgroundColor: "#ffffff",
                      color: "#0f172a",
                      textDecoration: "none",
                      borderRadius: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    Download .zip
                  </a>

                  <Link
                    href={app.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      padding: "12px 20px",
                      border: "1px solid #475569",
                      color: "#ffffff",
                      textDecoration: "none",
                      borderRadius: "12px",
                      fontWeight: "bold",
                      backgroundColor: "rgba(255,255,255,0.04)",
                    }}
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}