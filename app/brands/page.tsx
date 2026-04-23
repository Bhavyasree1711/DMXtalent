import Link from "next/link";

const clients = [
  {
    name: "Time4education",
    logo: "/time.png",
  },
  {
    name: "ALabs",
    logo: "/Alabs.png",
  },
  {
    name: "softwareOne",
    logo: "/softwareone.png",
  },
  {
    name: "E-Sparsh",
    logo: "/esparsh.png",
  },
];

export default function BrandsPage() {
  return (
    <>
      {/* 🔷 HERO */}      <section
        className="py-5 text-white brands-hero"
        style={{ background: "linear-gradient(90deg,#0b1a2f,#1f4c6b)" }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Our Talent Brands</h1>
          <p className="mt-3 col-md-8 fs-5">
            At DMX Talent Solutions, our brands represent specialized capabilities
            designed to help organizations attract, develop, and retain top talent
            in a rapidly evolving world of work.
          </p>
        </div>
      </section>

      {/* 🔷 INTRO */}
      <section className="py-5 intro-section">
        <div className="container">
          <h2 className="mb-3 fw-bold">Delivering Expertise Across Every Talent Need</h2>
          <p className="text-muted col-md-9 fs-5">
            Our portfolio of talent solutions is built to address every stage of
            the workforce lifecycle. From sourcing the right candidates to
            transforming workforce strategies, DMX combines deep industry
            expertise with innovative technology to deliver measurable outcomes.
          </p>
        </div>
      </section>

      {/* 🔷 BRANDS GRID */}
      <section className="py-5 brands-grid-section">
        <div className="container">
          <div className="row g-4">

            {/* Brand 1 */}
            <div className="col-md-4">
              <div className="brand-card h-100">
                <div className="brand-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="22" stroke="#d11f1f" strokeWidth="2"/>
                    <path d="M24 14V34M14 24H34" stroke="#d11f1f" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4 className="fw-bold mt-3">DMX Recruit</h4>
                <p className="text-muted">
                  End-to-end recruitment solutions that connect businesses with
                  the right talent. From permanent hiring to contract staffing,
                  we ensure speed, quality, and scalability.
                </p>
              </div>
            </div>

            {/* Brand 2 */}
            <div className="col-md-4">
              <div className="brand-card h-100">
                <div className="brand-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 8C15.16 8 8 15.16 8 24s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16zm0 28c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12z" fill="#1f4c6b"/>
                    <path d="M24 16v8l6.5 4" stroke="#d11f1f" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4 className="fw-bold mt-3">DMX Tech Talent</h4>
                <p className="text-muted">
                  Specialized IT and digital hiring solutions designed to help
                  organizations build future-ready technology teams across
                  emerging and enterprise skillsets.
                </p>
              </div>
            </div>

            {/* Brand 3 */}
            <div className="col-md-4">
              <div className="brand-card h-100">
                <div className="brand-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="10" y="14" width="28" height="22" rx="2" stroke="#0b1a2f" strokeWidth="2"/>
                    <path d="M14 14V10C14 8.896 14.896 8 16 8H32C33.104 8 34 8.896 34 10V14" stroke="#d11f1f" strokeWidth="2"/>
                    <path d="M18 24H30" stroke="#1f4c6b" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4 className="fw-bold mt-3">DMX Workforce Solutions</h4>
                <p className="text-muted">
                  Comprehensive workforce management services including MSP,
                  RPO, and talent consulting to optimize performance and reduce
                  operational complexity.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🔷 OUR CLIENTS */}
      <section className="py-5 clients-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2">Our Clients</h2>
            <p className="text-muted mx-auto clients-subtitle">
              Trusted by leading organizations for reliable, scalable, and
              professional talent solutions.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {clients.map((client) => (
              <div key={client.name} className="col-6 col-md-4 col-lg-3">
                <div className="client-card h-100">
                  <div className="client-logo-wrap">
                    <img
                      src={client.logo}
                      alt=""
                      className="client-logo"
                    />
                  </div>
                  <div className="client-name">{client.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔷 WHY CHOOSE */}
      <section className="py-5 why-choose-brands-section">
        <div className="container">
          <h2 className="mb-5 fw-bold text-center">Why Choose DMX Talent Solutions</h2>

          <div className="row g-4">
            
            <div className="col-md-3">
              <div className="why-card">
                <div className="why-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 4C11.176 4 4 11.176 4 20s7.176 16 16 16 16-7.176 16-16-7.176-16-16-16zm0 28c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12z" fill="#1f4c6b"/>
                    <path d="M16 20L18 22L24 16" stroke="#d11f1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h5 className="fw-bold mt-3">Industry Expertise</h5>
                <p className="text-muted small">
                  Deep understanding across multiple industries and talent markets.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="why-card">
                <div className="why-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 2C10.059 2 2 10.059 2 20s8.059 18 18 18 18-8.059 18-18-8.059-18-18-18zm0 32c-7.732 0-14-6.268-14-14s6.268-14 14-14 14 6.268 14 14-6.268 14-14 14z" fill="#1f4c6b"/>
                    <path d="M20 10V30M10 20H30" stroke="#d11f1f" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h5 className="fw-bold mt-3">Scalable Solutions</h5>
                <p className="text-muted small">
                  Flexible models that grow with your business needs.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="why-card">
                <div className="why-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 4C11.176 4 4 11.176 4 20s7.176 16 16 16 16-7.176 16-16-7.176-16-16-16zm0 2c7.73 0 14 6.27 14 14s-6.27 14-14 14S6 27.73 6 20 12.27 6 20 6z" fill="#1f4c6b"/>
                    <path d="M14 20L18 24L26 16" stroke="#d11f1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h5 className="fw-bold mt-3">Technology Driven</h5>
                <p className="text-muted small">
                  Leveraging modern tools to enhance hiring efficiency and insights.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="why-card">
                <div className="why-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 2C10.059 2 2 10.059 2 20s8.059 18 18 18 18-8.059 18-18-8.059-18-18-18zm0 32c-7.732 0-14-6.268-14-14s6.268-14 14-14 14 6.268 14 14-6.268 14-14 14z" fill="#1f4c6b"/>
                    <path d="M20 12C15.582 12 12 15.582 12 20s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 12c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" fill="#d11f1f"/>
                  </svg>
                </div>
                <h5 className="fw-bold mt-3">Global Mindset</h5>
                <p className="text-muted small">
                  Delivering solutions aligned with global workforce trends.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🔷 CTA */}
      <section
        className="py-5 text-white brands-cta"
        style={{ background: "linear-gradient(90deg,#1f4c6b,#0b1a2f)" }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Build Your Future Workforce with DMX</h2>
          <p className="mt-3 fs-5">
            Partner with us to unlock the full potential of your talent strategy.
          </p>
          <Link href="/contact" className="btn btn-light rounded-pill px-4 py-2 fw-semibold">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}