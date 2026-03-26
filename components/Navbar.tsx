"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/mini-apps", label: "Mini Apps" },
  ];

  const getLinkStyle = (href: string) => {
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
      whiteSpace: "nowrap",
    } as const;
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
    whiteSpace: "nowrap",
  } as const;

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
          padding: isMobile ? "8px 16px" : "2px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          flexWrap: "wrap",
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

        {isMobile ? (
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              border: "1px solid rgba(148, 163, 184, 0.18)",
              background: "rgba(15, 23, 42, 0.72)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              transition: "all 0.2s ease",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.16)",
            }}
          >
            <div
              style={{
                width: "18px",
                height: "14px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  display: "block",
                  height: "2px",
                  width: "100%",
                  borderRadius: "999px",
                  background: "#f8fafc",
                  transition: "all 0.2s ease",
                  transform: isMenuOpen
                    ? "translateY(6px) rotate(45deg)"
                    : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  height: "2px",
                  width: "100%",
                  borderRadius: "999px",
                  background: "#f8fafc",
                  transition: "all 0.2s ease",
                  opacity: isMenuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  height: "2px",
                  width: "100%",
                  borderRadius: "999px",
                  background: "#f8fafc",
                  transition: "all 0.2s ease",
                  transform: isMenuOpen
                    ? "translateY(-6px) rotate(-45deg)"
                    : "none",
                }}
              />
            </div>
          </button>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "flex-end",
              fontFamily:
                "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
              flexWrap: "wrap",
              rowGap: "10px",
              maxWidth: "100%",
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
        )}
      </div>

      {isMobile && isMenuOpen && (
        <div
          style={{
            padding: "0 16px 14px 16px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "12px",
              borderRadius: "16px",
              border: "1px solid rgba(148, 163, 184, 0.14)",
              background: "rgba(15, 23, 42, 0.92)",
              boxShadow: "0 10px 28px rgba(0, 0, 0, 0.22)",
              fontFamily:
                "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  ...getLinkStyle(item.href),
                  width: "100%",
                  justifyContent: "flex-start",
                  padding: "12px 14px",
                }}
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
              style={{
                ...contactStyle,
                width: "100%",
                justifyContent: "center",
                marginTop: "4px",
              }}
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
      )}
    </nav>
  );
}