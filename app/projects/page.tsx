import Link from "next/link";
import {
  BarChart3,
  Code2,
  Database,
  Dumbbell,
  ExternalLink,
  GraduationCap,
  Map,
  Music,
  ShieldCheck,
  Users,
} from "lucide-react";

const projects = [
  {
    title: "GymAccessManager - Gym Management Platform",
    subtitle: "Gym management & access-control platform",
    description:
      "Full-stack gym management and access-control platform built with ASP.NET Core Web API and React + TypeScript. Supports member and staff management, membership plans, subscriptions, payments, QR attendance scanning, reports, CSV export, usage limits, and role-based dashboards for gym owners and administrators.",
    tech: [
      "C#",
      "ASP.NET Core Web API",
      "EF Core",
      "MySQL",
      "JWT",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Swagger / OpenAPI",
      "Git",
    ],
    github: "https://github.com/mikepapanik/GymAccessManager",
    image: "/projects/gym-access-manager.png",
    accent: "#22d3ee",
    icon: Dumbbell,
  },
  {
    title: "SmartSales AI CRM",
    subtitle: "AI-powered CRM platform",
    description:
      "Full-stack AI-powered CRM platform built with React and Java Spring Boot for lead tracking, task management, internal note handling, and intelligent lead summaries. Includes secure JWT authentication, role-based admin controls, and MySQL-backed persistence for structured workflow management.",
    tech: [
      "React",
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "REST API",
      "JPA / Hibernate",
      "MySQL",
      "Maven",
      "Git",
    ],
    github: "https://github.com/mikepapanik/smartsales-ai-crm",
    image: "/projects/smartsales-ai-crm.png",
    accent: "#0ea5e9",
    icon: BarChart3,
  },
  {
    title: "Personal Contact Manager",
    subtitle: "Bootcamp final project",
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
    accent: "#10b981",
    icon: Users,
  },
  {
    title: "Educational Platform",
    subtitle: "Economic courses",
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
    accent: "#8b5cf6",
    icon: GraduationCap,
  },
  {
    title: "Tourist Guide Application",
    subtitle: "Rhodes travel guide",
    description:
      "Desktop application developed for browsing, searching, and viewing categorized travel information and multimedia content, using SQLite for structured data storage and retrieval.",
    tech: ["C#", ".NET Framework", "Windows Forms", "SQLite"],
    github: "https://github.com/mikepapanik/RhodesTravelGuide",
    image: "/projects/tourist-guide-app.png",
    accent: "#38bdf8",
    icon: Map,
  },
  {
    title: "Smart Quarantine Interactive Application",
    subtitle: "Workflow-based desktop app",
    description:
      "Workflow-based desktop application designed for quarantine activity management, including temperature tracking, movement permissions, and service requests. Implements data validation and SQLite-backed persistence for reliable data storage.",
    tech: ["C#", ".NET Framework", "Windows Forms", "SQLite"],
    github: "https://github.com/mikepapanik/SmartQuarantin",
    image: "/projects/smart-quarantine-app.png",
    accent: "#14b8a6",
    icon: ShieldCheck,
  },
  {
    title: "Record Store Website",
    subtitle: "Full-stack music store website",
    description:
      "Full-stack web application for a record store featuring album listings, artist information, event announcements, and a favorites system for authenticated users. Includes responsive design and a PostgreSQL-backed database.",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "PostgreSQL"],
    github: "https://github.com/mikepapanik/RecordStoreWebsite",
    image: "/projects/record-store-website.png",
    accent: "#f97316",
    icon: Music,
  },
];

export default function ProjectsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at top center, rgba(34,211,238,0.14), transparent 34%),
          linear-gradient(rgba(9,14,28,0.78), rgba(9,14,28,0.88)),
          url("/backgrounds/code-bg.jpg")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        color: "white",
        fontFamily: "sans-serif",
        padding:
          "76px clamp(16px, 5vw, 30px) 100px clamp(16px, 5vw, 30px)",
      }}
    >
      <div
        style={{
          maxWidth: "1420px",
          margin: "0 auto",
        }}
      >
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
            Projects
          </p>

          <h1
            style={{
              fontSize: "clamp(46px, 6vw, 78px)",
              marginBottom: "18px",
              lineHeight: "1.05",
              fontWeight: "900",
            }}
          >
            My{" "}
            <span
              style={{
                color: "#22d3ee",
                textShadow: "0 0 28px rgba(34,211,238,0.45)",
              }}
            >
              Projects
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
            Here you can find some of the projects I have developed. This page
            will continue to grow with new implementations, additional details,
            and useful links.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
            gap: "28px",
            alignItems: "stretch",
          }}
        >
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(15,23,42,0.94), rgba(2,6,23,0.98))",
                  border: `1px solid ${project.accent}66`,
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: `0 18px 45px rgba(0, 0, 0, 0.36), 0 0 28px ${project.accent}22`,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    height: "clamp(205px, 45vw, 238px)",
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
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
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
                      background: `linear-gradient(135deg, ${project.accent}, rgba(15,23,42,0.96))`,
                      border: `2px solid ${project.accent}`,
                      boxShadow: `0 0 22px ${project.accent}66`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={30} color="white" strokeWidth={2.4} />
                  </div>
                </div>

                <div
                  style={{
                    padding: "28px 24px 24px 24px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <h2
                    style={{
                      fontSize: "26px",
                      marginBottom: "8px",
                      lineHeight: "1.2",
                      minHeight: "62px",
                      fontWeight: "800",
                    }}
                  >
                    {project.title}
                  </h2>

                  <p
                    style={{
                      color: project.accent,
                      fontSize: "17px",
                      marginBottom: "18px",
                      fontWeight: "700",
                      lineHeight: "1.3",
                    }}
                  >
                    {project.subtitle}
                  </p>

                  <p
                    style={{
                      color: "#e2e8f0",
                      lineHeight: "1.72",
                      marginBottom: "22px",
                      minHeight: "210px",
                      textAlign: "left",
                      fontSize: "16px",
                    }}
                  >
                    {project.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      marginTop: "auto",
                      marginBottom: "26px",
                      minHeight: "120px",
                      alignContent: "flex-start",
                    }}
                  >
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        style={{
                          padding: "8px 12px",
                          backgroundColor: `${project.accent}22`,
                          border: `1px solid ${project.accent}55`,
                          borderRadius: "999px",
                          fontSize: "14px",
                          color: "#f8fafc",
                          height: "fit-content",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          boxShadow: `0 0 14px ${project.accent}14`,
                        }}
                      >
                        <Code2 size={13} />
                        {item}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "13px 22px",
                        background: `linear-gradient(135deg, ${project.accent}, ${project.accent}bb)`,
                        color: "white",
                        textDecoration: "none",
                        borderRadius: "14px",
                        fontWeight: "bold",
                        minWidth: "180px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        boxShadow: `0 0 22px ${project.accent}44`,
                      }}
                    >
                      <ExternalLink size={20} />
                      View on GitHub
                    </Link>

                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} on GitHub`}
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "14px",
                        border: `1px solid ${project.accent}aa`,
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
              </div>
            );
          })}
        </div>

        <div
          style={{
            margin: "34px auto 0 auto",
            maxWidth: "960px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
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
            <ShieldCheck size={34} color="#22d3ee" />
            <div>
              <strong>Secure & Reliable</strong>
              <p style={{ margin: "4px 0 0 0", color: "#cbd5e1" }}>
                Authentication, authorization & data protection
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
              <strong>Modern Technologies</strong>
              <p style={{ margin: "4px 0 0 0", color: "#cbd5e1" }}>
                React, ASP.NET, Spring Boot, MySQL & SQL Server
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
            <BarChart3 size={34} color="#8b5cf6" />
            <div>
              <strong>Performance & Scalability</strong>
              <p style={{ margin: "4px 0 0 0", color: "#cbd5e1" }}>
                Clean code, best practices & scalable architecture
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
