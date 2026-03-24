import Link from "next/link";

const projects = [
  {
    title: "Personal Contact Manager – Bootcamp Final Project",
    description:
      "Secure full-stack contact and event management web application built with Spring Boot. Implements authentication and authorization using Spring Security, RESTful CRUD APIs, and JPA/Hibernate integration with a MySQL database.",
    tech: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "Thymeleaf",
      "REST API",
      "JPA / Hibernate",
      "MySQL",
      "Maven",
      "Git",
    ],
    github: "https://github.com/mikepapanik/Personal-Contact-Manager",
    image: "/projects/contact-manager.png",
  },
  {
    title: "Educational Platform for Economic Courses",
    description:
      "Web-based educational platform for economics courses built with ASP.NET MVC. Includes user authentication, interactive quizzes, and progress tracking while integrating SQL Server for persistent data storage.",
    tech: [
      "C#",
      "ASP.NET MVC",
      "SQL Server",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    github:
      "https://github.com/mikepapanik/Education-Platform-for-Economic-Courses",
    image: "/projects/education-platform.png",
  },
  {
    title: "Tourist Guide Application",
    description:
      "Desktop application developed for browsing, searching, and viewing categorized travel information and multimedia content, using SQLite for structured data storage and retrieval.",
    tech: ["C#", ".NET Framework", "Windows Forms", "SQLite"],
    github: "https://github.com/mikepapanik/RhodesTravelGuide",
    image: "/projects/tourist-guide-app.png",
  },
  {
    title: "Smart Quarantine Interactive Application",
    description:
      "Workflow-based desktop application designed for quarantine activity management, including temperature tracking, movement permissions, and service requests. Implements data validation and SQLite-backed persistence for reliable data storage.",
    tech: ["C#", ".NET Framework", "Windows Forms", "SQLite"],
    github: "https://github.com/mikepapanik/SmartQuarantin",
    image: "/projects/smart-quarantine-app.png",
  },
  {
    title: "Record Store Website",
    description:
      "Full-stack web application for a record store featuring album listings, artist information, event announcements, and a favorites system for authenticated users. Includes responsive design and a PostgreSQL-backed database.",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "PostgreSQL"],
    github: "https://github.com/mikepapanik/RecordStoreWebsite",
    image: "/projects/record-store-website.png",
  },
];

export default function ProjectsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: `
          linear-gradient(rgba(9,14,28,0.80), rgba(9,14,28,0.84)),
          url("/backgrounds/code-bg.jpg")
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
        <div style={{ marginBottom: "40px" }}>
          <p
            style={{
              color: "#94a3b8",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "12px",
              fontSize: "14px",
            }}
          >
            Projects
          </p>

          <h1
            style={{
              fontSize: "48px",
              marginBottom: "18px",
            }}
          >
            My Projects
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
              lineHeight: "1.8",
              maxWidth: "760px",
              textAlign: "justify",
            }}
          >
            Here you can find some of the projects I have developed. This page
            will continue to grow with new implementations, additional details,
            and useful links.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              style={{
                backgroundColor: "#020617",
                border: "1px solid #1e293b",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.18)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <div
                style={{
                  height: "180px",
                  background:
                    "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#cbd5e1",
                  fontSize: "18px",
                  fontWeight: "bold",
                  flexShrink: 0,
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              <div
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <h2
                  style={{
                    fontSize: "24px",
                    marginBottom: "12px",
                    lineHeight: "1.35",
                    minHeight: "72px",
                  }}
                >
                  {project.title}
                </h2>

                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: "1.8",
                    marginBottom: "18px",
                    minHeight: "150px",
                    textAlign: "justify",
                  }}
                >
                  {project.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginBottom: "24px",
                    minHeight: "96px",
                    alignContent: "flex-start",
                  }}
                >
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      style={{
                        padding: "8px 12px",
                        backgroundColor: "#1e293b",
                        border: "1px solid #334155",
                        borderRadius: "999px",
                        fontSize: "14px",
                        color: "#e2e8f0",
                        height: "fit-content",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "auto",
                  }}
                >
                  <Link
                    href={project.github}
                    target="_blank"
                    style={{
                      padding: "12px 22px",
                      backgroundColor: "white",
                      color: "#0f172a",
                      textDecoration: "none",
                      borderRadius: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}