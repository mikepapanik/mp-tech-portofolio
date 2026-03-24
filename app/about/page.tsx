export default function AboutPage() {
  const skills = {
    Programming: ["C#", "Java", "Python"],

    "Web & Frameworks": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "Spring Boot",
      "ASP.NET",
      "Thymeleaf",
      "React",
      "Next.js",
    ],

    Databases: ["MySQL", "SQL Server", "PostgreSQL"],

    Tools: [
      "Git",
      "GitHub",
      "Maven",
      "IntelliJ IDEA",
      "Visual Studio",
    ],

    "Concepts & Data": [
      "OOP",
      "MVC",
      "REST APIs",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
  };

  const cardStyle = {
    backgroundColor: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "22px",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.18)",
  } as const;

  const sectionTitleStyle = {
    fontSize: "26px",
    marginBottom: "16px",
    lineHeight: "1.3",
  } as const;

  const paragraphStyle = {
    color: "#cbd5e1",
    lineHeight: "1.85",
    fontSize: "16.5px",
    textAlign: "justify" as const,
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: `
          linear-gradient(rgba(9, 14, 28, 0.65), rgba(9, 14, 28, 0.70)),
          url("/backgrounds/about-bg.jpg")
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
          maxWidth: "1120px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            marginBottom: "36px",
            maxWidth: "900px",
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
            About Me
          </p>

          <h1
            style={{
              fontSize: "48px",
              marginBottom: "18px",
              lineHeight: "1.15",
            }}
          >
            Professional Background
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
              lineHeight: "1.85",
              maxWidth: "880px",
              margin: 0,
              textAlign: "justify",
            }}
          >
            I am a Software Engineer with a strong interest in building
            practical software solutions, modern web applications, and
            well-structured information systems. My main focus is on C#/.NET
            and ASP.NET development, while I also actively work with Java and
            Python across academic, personal, and project-based work.
            <br />
            <br />
            Through this portfolio, I present projects and applications that
            reflect my technical growth, problem-solving mindset, and continuous
            effort to improve as a developer. I enjoy working on systems that
            combine clean structure, maintainability, and practical value.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.15fr) minmax(320px, 0.85fr)",
            gap: "24px",
            alignItems: "start",
          }}
        >
          <div
            style={{
              ...cardStyle,
              padding: "32px",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                marginBottom: "18px",
                lineHeight: "1.3",
              }}
            >
              Professional Profile
            </h2>

            <p
              style={{
                ...paragraphStyle,
                marginBottom: "16px",
              }}
            >
              I am a Software Engineer focused on designing and developing
              practical software systems and modern web applications. I work
              with technologies such as C#, Java and Python, building both web
              and desktop applications across academic and personal projects.
            </p>

            <p
              style={{
                ...paragraphStyle,
                marginBottom: "16px",
              }}
            >
              I hold a Master's Degree in Informatics from the University of
              Piraeus and a Bachelor's Degree in Economics from the University
              of Crete. This background allows me to approach software
              development not only from a technical perspective, but also with a
              strong understanding of real business needs and system
              requirements.
            </p>

            <p
              style={{
                ...paragraphStyle,
                marginBottom: "16px",
              }}
            >
              My experience includes developing web applications, desktop
              systems, and database-driven software solutions using technologies
              such as ASP.NET, Spring Boot, Java, Python and relational
              databases including SQL Server, MySQL and PostgreSQL.
            </p>

            <p
              style={{
                ...paragraphStyle,
                margin: 0,
              }}
            >
              I continuously improve my technical skills through real project
              development, hands-on experimentation and continuous learning in
              modern software engineering practices. I am also an active member
              of IEEE and the IEEE Computer Society since September 2024,
              reflecting my continued engagement with the wider technology
              community.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: "24px",
            }}
          >
            <div
              style={{
                ...cardStyle,
                padding: "28px",
              }}
            >
              <h2 style={sectionTitleStyle}>Focus</h2>

              <div style={{ display: "grid", gap: "12px" }}>
                {[
                  "Software Development with C#, Java and Python",
                  "Backend Systems and REST API Development",
                  "Web Applications and Database-Driven Systems",
                  "Automation Tools and Practical Software Solutions",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      padding: "14px 15px",
                      backgroundColor: "#111827",
                      border: "1px solid #1f2937",
                      borderRadius: "14px",
                      color: "#e2e8f0",
                      lineHeight: "1.5",
                      fontSize: "15px",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                ...cardStyle,
                padding: "28px",
              }}
            >
              <h2 style={sectionTitleStyle}>Technical Skills</h2>

              <div style={{ display: "grid", gap: "16px" }}>
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <p
                      style={{
                        color: "#94a3b8",
                        marginBottom: "8px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        letterSpacing: "0.3px",
                      }}
                    >
                      {category}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                      }}
                    >
                      {items.map((skill) => (
                        <span
                          key={skill}
                          style={{
                            padding: "8px 12px",
                            backgroundColor: "#1e293b",
                            border: "1px solid #334155",
                            borderRadius: "999px",
                            color: "#ffffff",
                            fontSize: "13px",
                            lineHeight: "1.4",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "24px",
            ...cardStyle,
            padding: "28px 30px",
          }}
        >
          <h2 style={sectionTitleStyle}>Working Style</h2>

          <p
            style={{
              ...paragraphStyle,
              margin: 0,
            }}
          >
            I value clarity, consistency, and practical implementation. I enjoy
            understanding how a system works in depth, organizing code in a
            structured way, and improving applications step by step with a focus
            on reliability and maintainability. My goal is not only to build
            working software, but also to create projects that reflect
            professionalism, technical growth, and attention to detail.
          </p>
        </div>
      </div>
    </main>
  );
}