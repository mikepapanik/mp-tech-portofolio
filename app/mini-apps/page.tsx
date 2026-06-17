import Link from "next/link";
import {
  Bot,
  Code2,
  Database,
  Download,
  ExternalLink,
  MonitorDown,
  ShieldCheck,
  WalletCards,
  Zap,
} from "lucide-react";

const apps = [
  {
    title: "Finance Manager Pro",
    subtitle: "Personal finance desktop manager",
    description:
      "Windows desktop finance manager designed for simple local income and expense tracking. Users can add, edit, delete, search and export transactions, manage custom categories and payment methods, view monthly reports, calculate total balance, and track bank-related entries through a clean and easy-to-use interface.",
    image: "/projects/Finance-Manager.png",
    download: "/apps/FinanceManagerPro.zip",
    github: "https://github.com/mikepapanik",
    version: "v1.0.0",
    size: "56.4 MB",
    platform: "Windows",
    accent: "#22d3ee",
    icon: WalletCards,
    tech: ["C#", ".NET", "Windows Desktop", "Local Storage", "Reports"],
  },
  {
    title: "Instagram Pending Requests Canceler",
    subtitle: "Browser automation utility",
    description:
      "Python desktop automation tool that reads usernames from an exported HTML file and helps cancel pending Instagram follow requests through an automated browser workflow. Built with Selenium-based interaction and designed to simplify repetitive account management actions after manual login.",
    image: "/projects/instagram-requests-canceler.png",
    download: "/apps/InstagramRequestCleaner.zip",
    github: "https://github.com/mikepapanik",
    version: "v1.0.0",
    size: "50 MB",
    platform: "Windows",
    accent: "#8b5cf6",
    icon: Bot,
    tech: ["Python", "Selenium", "Automation", "HTML Export", "Desktop Tool"],
  },
];

export default function MiniAppsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at top center, rgba(34,211,238,0.14), transparent 34%),
          linear-gradient(rgba(9, 14, 28, 0.78), rgba(9, 14, 28, 0.88)),
          url("/backgrounds/miniapps-bg.jpg")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        color: "white",
        fontFamily: "sans-serif",
        padding: "76px 30px 100px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1420px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            marginBottom: "52px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <p
            style={{
              color: "#94a3b8",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "12px",
              fontSize: "14px",
            }}
          >
            Mini Applications
          </p>

          <h1
            style={{
              fontSize: "clamp(46px, 6vw, 78px)",
              marginBottom: "18px",
              lineHeight: "1.05",
              fontWeight: "900",
            }}
          >
            Mini{" "}
            <span
              style={{
                color: "#22d3ee",
                textShadow: "0 0 28px rgba(34,211,238,0.45)",
              }}
            >
              Applications
            </span>
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
              lineHeight: "1.8",
              maxWidth: "760px",
              textAlign: "center",
              margin: "0 auto",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "28px",
            alignItems: "stretch",
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          {apps.map((app) => {
            const Icon = app.icon;

            return (
              <article
                key={app.title}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(15,23,42,0.94), rgba(2,6,23,0.98))",
                  border: `1px solid ${app.accent}66`,
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: `0 18px 45px rgba(0, 0, 0, 0.36), 0 0 28px ${app.accent}22`,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  position: "relative",
                }}
              >
                {/* IMAGE */}
                <div
                  style={{
                    height: "238px",
                    background:
                      "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#cbd5e1",
                    fontSize: "18px",
                    fontWeight: "bold",
                    flexShrink: 0,
                    position: "relative",
                    overflow: "hidden",
                    padding: "8px",
                  }}
                >
                  <img
                    src={app.image}
                    alt={app.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                      borderRadius: "16px",
                      display: "block",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, transparent 48%, rgba(2,6,23,0.88) 100%)",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      left: "22px",
                      bottom: "18px",
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${app.accent}, rgba(15,23,42,0.96))`,
                      border: `2px solid ${app.accent}`,
                      boxShadow: `0 0 22px ${app.accent}66`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={30} color="white" strokeWidth={2.4} />
                  </div>
                </div>

                {/* CONTENT */}
                <div
                  style={{
                    padding: "28px 24px 24px 24px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  {/* INFO TAGS */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      marginBottom: "18px",
                    }}
                  >
                    {[app.platform, app.version, app.size].map((item) => (
                      <span
                        key={item}
                        style={{
                          padding: "8px 12px",
                          backgroundColor: `${app.accent}22`,
                          border: `1px solid ${app.accent}55`,
                          borderRadius: "999px",
                          fontSize: "14px",
                          color: "#f8fafc",
                          height: "fit-content",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          boxShadow: `0 0 14px ${app.accent}14`,
                        }}
                      >
                        <MonitorDown size={13} />
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* TITLE */}
                  <h2
                    style={{
                      fontSize: "26px",
                      marginBottom: "8px",
                      lineHeight: "1.2",
                      minHeight: "62px",
                      fontWeight: "800",
                    }}
                  >
                    {app.title}
                  </h2>

                  <p
                    style={{
                      color: app.accent,
                      fontSize: "17px",
                      marginBottom: "18px",
                      fontWeight: "700",
                      lineHeight: "1.3",
                    }}
                  >
                    {app.subtitle}
                  </p>

                  {/* DESCRIPTION */}
                  <p
                    style={{
                      color: "#e2e8f0",
                      lineHeight: "1.72",
                      marginBottom: "22px",
                      minHeight: "230px",
                      textAlign: "left",
                      fontSize: "16px",
                    }}
                  >
                    {app.description}
                  </p>

                  {/* TECH TAGS */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      marginTop: "auto",
                      marginBottom: "26px",
                      minHeight: "82px",
                      alignContent: "flex-start",
                    }}
                  >
                    {app.tech.map((item) => (
                      <span
                        key={item}
                        style={{
                          padding: "8px 12px",
                          backgroundColor: `${app.accent}1f`,
                          border: `1px solid ${app.accent}44`,
                          borderRadius: "999px",
                          fontSize: "14px",
                          color: "#f8fafc",
                          height: "fit-content",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <Code2 size={13} />
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <a
                      href={app.download}
                      download
                      style={{
                        padding: "13px 22px",
                        background: `linear-gradient(135deg, ${app.accent}, ${app.accent}bb)`,
                        color: "white",
                        textDecoration: "none",
                        borderRadius: "14px",
                        fontWeight: "bold",
                        minWidth: "180px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        boxShadow: `0 0 22px ${app.accent}44`,
                      }}
                    >
                      <Download size={20} />
                      Download .zip
                    </a>

                    <Link
                      href={app.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "14px",
                        border: `1px solid ${app.accent}aa`,
                        color: "white",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(2,6,23,0.45)",
                      }}
                    >
                      <ExternalLink size={20} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM FEATURES */}
        <div
          style={{
            margin: "34px auto 0 auto",
            maxWidth: "960px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "18px",
          }}
        >
          <div
            style={{
              padding: "18px 20px",
              borderRadius: "18px",
              border: "1px solid rgba(34,211,238,0.22)",
              background: "rgba(15,23,42,0.68)",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <MonitorDown size={34} color="#22d3ee" />
            <div>
              <strong>Desktop Utilities</strong>
              <p style={{ margin: "4px 0 0 0", color: "#cbd5e1" }}>
                Small practical tools for everyday workflows
              </p>
            </div>
          </div>

          <div
            style={{
              padding: "18px 20px",
              borderRadius: "18px",
              border: "1px solid rgba(20,184,166,0.22)",
              background: "rgba(15,23,42,0.68)",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Database size={34} color="#14b8a6" />
            <div>
              <strong>Local Data Handling</strong>
              <p style={{ margin: "4px 0 0 0", color: "#cbd5e1" }}>
                Data tracking, exports and structured storage
              </p>
            </div>
          </div>

          <div
            style={{
              padding: "18px 20px",
              borderRadius: "18px",
              border: "1px solid rgba(139,92,246,0.22)",
              background: "rgba(15,23,42,0.68)",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Zap size={34} color="#8b5cf6" />
            <div>
              <strong>Automation Focused</strong>
              <p style={{ margin: "4px 0 0 0", color: "#cbd5e1" }}>
                Built to reduce repetitive manual tasks
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
