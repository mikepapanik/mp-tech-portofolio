"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/mini-apps", label: "Mini Apps" },
  ];

  const getLinkStyle = (href) => {
    const isActive = pathname === href;

    return {
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: isActive ? "600" : "500",
      letterSpacing: "0.2px",
      color: isActive ? "#ffffff" : "#dbeafe",
      padding: "8px 10px",
      borderRadius: "10px",
      background: isActive ? "rgba(59, 130, 246, 0.16)" : "transparent",
      border: isActive
        ? "1px solid rgba(59, 130, 246, 0.28)"
        : "1px solid transparent",
      transition: "all 0.2s ease",
      lineHeight: 1,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "36px",
    };
  };

  const contactStyle = {
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "0.2px",
    color: "#f8fafc",
    padding: "9px 15px",
    borderRadius: "10px",
    border: "1px solid rgba(56, 189, 248, 0.45)",
    background:
      "linear-gradient(180deg, rgba(56,189,248,0.20), rgba(14,165,233,0.10))",
    boxShadow:
      "0 0 0 1px rgba(255,255,255,0.03) inset, 0 8px 18px rgba(14,165,233,0.12)",
    transition: "all 0.2s ease",
    lineHeight: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "38px",
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        background: "rgba(15, 23, 42, 0.80)",
        borderBottom: "1px solid rgba(148, 163, 184, 0.14)",
        boxShadow: "0 6px 24px rgba(0, 0, 0, 0.16)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        <Link
          href="/"
          aria-label="Go to homepage"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
            borderRadius: "12px",
            transition: "transform 0.2s ease, opacity 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.opacity = "0.96";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.opacity = "1";
          }}
        >
          <div
            style={{
              position: "relative",
              width: "170px",
              height: "68px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src="/images/mp-tech-logo.png"
              alt="MP Tech logo"
              fill
              priority
              sizes="170px"
              style={{
                objectFit: "contain",
                objectPosition: "left center",
                display: "block",
              }}
            />
          </div>
        </Link>

        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "flex-end",
            fontFamily:
              "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={getLinkStyle(item.href)}
              onMouseEnter={(e) => {
                if (pathname !== item.href) {
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.background =
                    "rgba(148, 163, 184, 0.10)";
                  e.currentTarget.style.border =
                    "1px solid rgba(148, 163, 184, 0.12)";
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== item.href) {
                  e.currentTarget.style.color = "#dbeafe";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.border = "1px solid transparent";
                }
              }}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            style={contactStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.background =
                "linear-gradient(180deg, rgba(56,189,248,0.28), rgba(14,165,233,0.16))";
              e.currentTarget.style.border =
                "1px solid rgba(56, 189, 248, 0.65)";
              e.currentTarget.style.boxShadow =
                "0 0 0 1px rgba(255,255,255,0.03) inset, 0 10px 22px rgba(14,165,233,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background =
                "linear-gradient(180deg, rgba(56,189,248,0.20), rgba(14,165,233,0.10))";
              e.currentTarget.style.border =
                "1px solid rgba(56, 189, 248, 0.45)";
              e.currentTarget.style.boxShadow =
                "0 0 0 1px rgba(255,255,255,0.03) inset, 0 8px 18px rgba(14,165,233,0.12)";
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
