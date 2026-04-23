import Link from "next/link";

function IconStar() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l2.6 5.3L20 9.1l-4 3.9.9 5.5L12 15.9 7.1 18.5 8 13 4 9.1l5.4-.8L12 3z" stroke="#ef4444" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l7 3v6c0 5-3.2 8.6-7 10-3.8-1.4-7-5-7-10V6l7-3z" stroke="#7c3aed" strokeWidth="1.8" />
    </svg>
  );
}
function IconBriefcase() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="#ef4444" strokeWidth="1.8" />
      <path d="M9 7V5a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0115 5v2" stroke="#ef4444" strokeWidth="1.8" />
    </svg>
  );
}
function IconGlobe() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="#7c3aed" strokeWidth="1.8" />
      <path d="M3.5 12h17M12 3c2.8 2.5 2.8 15.5 0 18M12 3c-2.8 2.5-2.8 15.5 0 18" stroke="#7c3aed" strokeWidth="1.4" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="about-hero-v2 text-white">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="d-flex align-items-center gap-2 mb-3">
                
                <span className="about-mini-text">DMX Talent Solutions</span>
              </div>
              <h1 className="display-4 fw-bold mb-3">
                About <span className="text-danger">DMX Talent Solutions</span>
              </h1>
              <p className="about-hero-copy mb-0">
                We are a comprehensive talent and workforce solutions partner helping
                organizations hire smarter, scale faster, and build future-ready teams.
              </p>
            </div>
            <div className="col-lg-5">
              <img
                src="/about.png"
                alt="About DMX"
                className="img-fluid rounded-4 about-hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Mission</h2>
            <p className="text-muted about-sub-copy mx-auto">
              Empowering enterprises with innovative talent solutions that drive growth,
              improve reliability, and accelerate business outcomes.
            </p>
          </div>

          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <img
                src="/about.png"
                alt="Transformation"
                className="img-fluid rounded-4 shadow-sm"
              />
            </div>
            <div className="col-lg-6">
              <h3 className="fw-bold mb-3">Transforming Businesses Through Talent</h3>
              <p className="text-muted mb-4">
                We deliver end-to-end talent services across hiring, workforce operations,
                and strategic consulting. Our model blends domain expertise, technology,
                and execution discipline for measurable impact.
              </p>

              <ul className="about-list">
                <li>
                  <span className="about-list-dot">•</span>
                  <div>
                    <strong>Recruitment & Enterprise Hiring</strong>
                    <p className="mb-0 text-muted">Full-cycle hiring support across functions and seniority levels.</p>
                  </div>
                </li>
                <li>
                  <span className="about-list-dot">•</span>
                  <div>
                    <strong>Workforce Management</strong>
                    <p className="mb-0 text-muted">Scalable workforce programs, operational excellence, and compliance support.</p>
                  </div>
                </li>
                <li>
                  <span className="about-list-dot">•</span>
                  <div>
                    <strong>Talent Intelligence</strong>
                    <p className="mb-0 text-muted">Market insights and planning frameworks to future-proof talent strategy.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-5 about-values-wrap">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Core Values</h2>
            <p className="text-muted about-sub-copy mx-auto">
              Principles that shape every engagement and long-term client success.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-xl-3">
              <article className="about-value-card red-top">
                <div className="about-value-icon red-bg"><IconStar /></div>
                <h5 className="fw-bold mt-3">Innovation</h5>
                <p className="text-muted mb-0">Continuously evolving solutions to keep businesses ahead of change.</p>
              </article>
            </div>
            <div className="col-md-6 col-xl-3">
              <article className="about-value-card purple-top">
                <div className="about-value-icon purple-bg"><IconShield /></div>
                <h5 className="fw-bold mt-3">Reliability</h5>
                <p className="text-muted mb-0">Consistent delivery standards with disciplined execution and support.</p>
              </article>
            </div>
            <div className="col-md-6 col-xl-3">
              <article className="about-value-card red-top">
                <div className="about-value-icon red-bg"><IconBriefcase /></div>
                <h5 className="fw-bold mt-3">Client Focus</h5>
                <p className="text-muted mb-0">Tailored services aligned to each client’s goals and operating model.</p>
              </article>
            </div>
            <div className="col-md-6 col-xl-3">
              <article className="about-value-card purple-top">
                <div className="about-value-icon purple-bg"><IconGlobe /></div>
                <h5 className="fw-bold mt-3">Partnership</h5>
                <p className="text-muted mb-0">Long-term collaboration built on trust, clarity, and outcomes.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-v2 text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">Partner with DMX Talent Solutions</h2>
          <p className="mb-4">Let’s build a stronger, agile, and future-ready workforce together.</p>
          <Link href="/contact" className="btn btn-light px-4 rounded-pill fw-semibold">
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}