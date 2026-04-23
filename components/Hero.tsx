"use client";

import dynamic from "next/dynamic";
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";

const Background3D = dynamic(() => import("./Background3D"), {
  ssr: false,
});

const points = [
  "Expert team with 15+ years of industry experience",
  "Rigorous screening and vetting process",
  "Personalized matching based on culture and skills",
  "Fast turnaround times and dedicated support",
  "Competitive pricing with transparent billing",
  "Long-term success partnerships",
];

const leaders = [
  {
    name: "B S Mahalakshmi",
    role: "Founder & Director",
    image: "/founder.png",
  },
  {
    name: "Siddeswara S",
    role: "Co-Founder & CTO",
    image: "/cto.png",
  },
  {
    name: "B S Venkatesh",
    role: "Director",
    image: "/fou2.png",
  },
  {
    name: "B Hemalatha",
    role: "Director",
    image: "/fou3.png",
  },
];

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="4.5" fill="#0A66C2" />
      <circle cx="8" cy="8" r="1.15" fill="#FFFFFF" />
      <path
        d="M6.9 10.4V17h2.2v-6.6H6.9Zm0-2.4h2.2V6H6.9v2Z"
        fill="#FFFFFF"
      />
      <path
        d="M11.5 10.4V17h2.2v-3.7c0-.9.5-1.6 1.4-1.6.9 0 1.3.6 1.3 1.6V17h2.2v-4.2c0-2.1-1.1-3.3-2.8-3.3-1.1 0-1.9.4-2.5 1.3v-1h-2.1Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#1877F2" />
      <path
        d="M13.3 8.4V7.2c0-.6.4-1 1-1h1.6V3.8h-2.1c-2.1 0-3.4 1.4-3.4 3.6v1h-1.6v2.7h1.6V20h3v-8.9h2l.5-2.7h-2.6Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="igGrad" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F58529" />
          <stop offset="0.5" stopColor="#DD2A7B" />
          <stop offset="1" stopColor="#8134AF" />
        </linearGradient>
      </defs>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" stroke="url(#igGrad)" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.6" stroke="url(#igGrad)" strokeWidth="2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="url(#igGrad)" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="webGrad" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="9" stroke="url(#webGrad)" strokeWidth="1.9" />
      <path d="M3.5 12h17" stroke="url(#webGrad)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 3c2.8 2.6 2.8 15.4 0 18" stroke="url(#webGrad)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 3c-2.8 2.6-2.8 15.4 0 18" stroke="url(#webGrad)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#25D366" />
      <path
        d="M9.5 8.4c.3-.6.7-.6 1.1-.2l1.1 1.1c.3.3.3.6.1 1l-.5.8c.5 1 1.3 1.9 2.3 2.4l.8-.5c.4-.2.7-.2 1 .1l1.1 1.1c.4.4.4.8-.2 1.1-.7.5-1.6.6-2.4.2-2.6-1.2-4.8-3.4-6-6-.4-.8-.3-1.7.2-2.4Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

const sideLinks: Array<{ href: string; label: string; icon: ReactNode; color: string }> = [
  {
    href: "https://www.linkedin.com/company/dmxtechservices/posts/",
    label: "LinkedIn",
    icon: <IconLinkedIn />,
    color: "#0A66C2",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61573804807368&rdid=GnNF9lkel2xhsAeZ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F14KBeQMYUKg%2F#",
    label: "Facebook",
    icon: <IconFacebook />,
    color: "#1877F2",
  },
  {
    href: "https://www.instagram.com/dmxtechservices?igsh=czk4ZzYxZmtjczBk",
    label: "Instagram",
    icon: <IconInstagram />,
    color: "#E1306C",
  },
  {
    href: "https://dmxtechservices.com/",
    label: "Website",
    icon: <IconGlobe />,
    color: "#2563EB",
  },
  {
    href: "https://api.whatsapp.com/send/?phone=916364512292&text&type=phone_number&app_absent=0",
    label: "WhatsApp",
    icon: <IconWhatsApp />,
    color: "#25D366",
  },
];

export default function Hero() {
  return (
    <>
      <section className="hero-section text-white d-flex align-items-center position-relative">
        <Background3D />
        <div className="hero-gradient" />

        <svg className="hero-svg" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <path
            className="hero-curve-line"
            d="M0 60 H900 Q1150 100 1150 330 V600"
            stroke="white"
            strokeWidth="7"
            fill="none"
            opacity="0.28"
          />
        </svg>

        <div className="hero-side-links" aria-label="Quick links">
          {sideLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hero-side-link"
              aria-label={item.label}
              title={item.label}
              style={{ "--brand": item.color } as CSSProperties}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hero-side-icon">{item.icon}</span>
            </a>
          ))}
        </div>

        <div className="container position-relative z-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-2 fw-bold lh-1 mt-2">
                Find Perfect <span className="text-danger">Talent</span>,<br />
                Deploy with<br />
                Confidence
              </h1>

              <p className="mt-4 fs-4 text-light" style={{ maxWidth: "620px" }}>
                We connect exceptional candidates with forward-thinking companies.
                Our expert team ensures the perfect match for your business needs
                and growth objectives.
              </p>

              <div className="d-flex gap-3 flex-wrap mt-4">
                <Link href="/solutions" className="btn btn-danger rounded-pill px-4 py-2 fw-semibold">
                  Explore Solutions →
                </Link>
                <Link href="/contact" className="btn btn-light rounded-pill px-4 py-2 fw-semibold">
                  Contact Us
                </Link>
              </div>

              <div className="row mt-5 g-4">
                <div className="col-4">
                  <h3 className="fw-bold text-primary mb-0">500+</h3>
                  <p className="mb-0 text-light">Placements</p>
                </div>
                <div className="col-4">
                  <h3 className="fw-bold text-danger mb-0">98%</h3>
                  <p className="mb-0 text-light">Success Rate</p>
                </div>
                <div className="col-4">
                  <h3 className="fw-bold text-primary mb-0">50+</h3>
                  <p className="mb-0 text-light">Companies</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <img src="/hero.png" className="img-fluid rounded shadow-lg" alt="Team working" />
            </div>
          </div>
        </div>
      </section>

      <section className="welcome-strip-section">
        <div className="container"></div>
      </section>

      <section className="why-choose-section py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <h2 className="why-title mb-4">Welcome to DMX Talent Solutions?</h2>
              <ul className="why-list">
                {points.map((item) => (
                  <li key={item}>
                    <span className="why-check">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-6">
              <img
                src="/talent.png"
                alt="Professional team"
                className="img-fluid rounded-4 why-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="leadership-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="leadership-kicker mb-2">THE PEOPLE BEHIND DMX</p>
            <h2 className="fw-bold mb-3">Our Leadership Team</h2>
            <p className="text-muted mx-auto leadership-subtitle">
              Visionaries and innovators who drive DMX Talent Solutions forward every day.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {leaders.map((leader) => (
              <div key={leader.name} className="col-sm-6 col-lg-3">
                <div className="leader-card h-100">
                  <div className="leader-image-wrap">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="img-fluid leader-image"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h5 className="fw-bold mb-1">{leader.name}</h5>
                    <p className="text-danger fw-semibold mb-0">{leader.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}