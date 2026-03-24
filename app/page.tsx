import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <section
        style={{
          position: "relative",
          minHeight: "88vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "100px 30px",
          backgroundImage: "url('/hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(2, 6, 23, 0.78), rgba(15, 23, 42, 0.92))",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "950px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#cbd5e1",
              textTransform: "uppercase",
              letterSpacing: "3px",
              fontSize: "14px",
              marginBottom: "18px",
            }}
          >
            Software Engineer Portfolio
          </p>

          <h1
            style={{
              fontSize: "clamp(38px, 6vw, 68px)",
              lineHeight: "1.1",
              marginBottom: "24px",
              fontWeight: "bold",
            }}
          >
            Turning ideas into software projects and applications
          </h1>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto 32px auto",
              fontSize: "19px",
              lineHeight: "1.8",
              color: "#e2e8f0",
            }}
          >
           This is my personal website where I present who I am, the projects 
           I have developed and small applications that anyone can explore and use.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/projects"
              style={{
                backgroundColor: "#ffffff",
                color: "#0f172a",
                padding: "14px 22px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
            >
              View Projects
            </Link>

            <Link
              href="/mini-apps"
              style={{
                border: "1px solid rgba(255,255,255,0.35)",
                color: "#ffffff",
                padding: "14px 22px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
                backgroundColor: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(4px)",
              }}
            >
              Explore Mini Apps
            </Link>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          padding: "70px 30px 30px 30px",
        }}
      >
        <div
          style={{
            backgroundColor: "#020617",
            border: "1px solid #1e293b",
            borderRadius: "20px",
            padding: "32px",
            marginBottom: "28px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "16px",
            }}
          >
            What you'll find here
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.9",
              fontSize: "18px",
              margin: 0,
            }}
          >
            On this website I present my developer profile, the projects I have built and a collection of small applications designed for practical use.
            My goal is to build a portfolio that reflects real work, consistency and continuous growth as a developer.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#020617",
              border: "1px solid #1e293b",
              borderRadius: "18px",
              padding: "26px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)",
            }}
          >
            <h3
              style={{
                marginBottom: "12px",
                fontSize: "22px",
              }}
            >
              Software Development
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              Development of web and desktop applications with clean structure and practical functionality.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#020617",
              border: "1px solid #1e293b",
              borderRadius: "18px",
              padding: "26px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)",
            }}
          >
            <h3
              style={{
                marginBottom: "12px",
                fontSize: "22px",
              }}
            >
              Projects
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              Applications and project ideas that reflect the way I approach, organize and implement solutions.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#020617",
              border: "1px solid #1e293b",
              borderRadius: "18px",
              padding: "26px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)",
            }}
          >
            <h3
              style={{
                marginBottom: "12px",
                fontSize: "22px",
              }}
            >
              Mini Apps
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              Small practical applications that visitors can explore and use in their daily activities.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          padding: "30px 30px 90px 30px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            marginBottom: "20px",
          }}
        >
          Technologies I Work With
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {[
               "C#",
              ".NET",
              "Java",
              "Spring Boot",
              "Python",
              "SQL",
              "HTML",
              "CSS",
              "JavaScript",
              "Next.js",
              "Git",
          ].map((skill) => (
            <span
              key={skill}
              style={{
                padding: "10px 16px",
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "999px",
                color: "#ffffff",
                fontSize: "15px",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}