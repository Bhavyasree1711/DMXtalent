import Link from "next/link";

function IconRocket() {
  return (
    <svg viewBox="0 0 24 24" width="42" height="42" fill="none" aria-hidden="true">
      <path d="M14 4c2.5.2 4.6 1.2 6 3.1-.3 2.5-1.4 4.6-3.1 6L13 9l1-5z" stroke="#ef4444" strokeWidth="1.9" strokeLinejoin="round" />
      <path d="M10.8 13.2 7 17l-1-4 3.8-3.8" stroke="#1d4ed8" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 15l-1.8 4.8L12 18l3-3" stroke="#7c3aed" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="15.5" cy="8.5" r="1.3" stroke="#f59e0b" strokeWidth="1.5" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg viewBox="0 0 24 24" width="42" height="42" fill="none" aria-hidden="true">
      <path d="M4 19h16" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="6" y="12" width="2.8" height="7" rx="1" fill="#ef4444" />
      <rect x="10.6" y="9" width="2.8" height="10" rx="1" fill="#1d4ed8" />
      <rect x="15.2" y="6.5" width="2.8" height="12.5" rx="1" fill="#7c3aed" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg viewBox="0 0 24 24" width="42" height="42" fill="none" aria-hidden="true">
      <path d="M12 3l2.6 5.3L20 9.1l-4 3.9.9 5.5L12 15.9 7.1 18.5 8 13 4 9.1l5.4-.8L12 3z" stroke="#f59e0b" strokeWidth="1.9" strokeLinejoin="round" fill="#fef3c7" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" width="42" height="42" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="#0ea5e9" strokeWidth="1.9" />
      <path d="M3.5 12h17M12 3.5c2.8 2.8 2.8 14.2 0 17M12 3.5c-2.8 2.8-2.8 14.2 0 17" stroke="#14b8a6" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconTarget() {
  return (
    <svg viewBox="0 0 24 24" width="42" height="42" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="#ef4444" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="#7c3aed" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="1.2" fill="#1d4ed8" />
    </svg>
  );
}

function IconRobot() {
  return (
    <svg viewBox="0 0 24 24" width="42" height="42" fill="none" aria-hidden="true">
      <rect x="6" y="8" width="12" height="11" rx="2.2" stroke="#1d4ed8" strokeWidth="1.8" />
      <path d="M12 4v3M9.5 11h0M14.5 11h0M9.5 15c1.5 1 3.5 1 5 0" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="4" r="1" fill="#7c3aed" />
    </svg>
  );
}

const insights = [
  {
    id: "future-work",
    title: "Future of Work",
    category: "Trends",
    description: "Trends shaping how organizations attract and retain talent in a digital-first world.",
    icon: <IconRocket />,
    readTime: "8 min read",
  },
  {
    id: "analytics",
    title: "Workforce Analytics",
    category: "Data",
    description: "Leveraging data to make smarter workforce decisions and improve business outcomes.",
    icon: <IconChart />,
    readTime: "7 min read",
  },
  {
    id: "retention",
    title: "Employee Retention Strategies",
    category: "Strategy",
    description: "Proven methods to reduce turnover and build a culture of engagement and growth.",
    icon: <IconStar />,
    readTime: "9 min read",
  },
  {
    id: "remote-talent",
    title: "Remote Talent Management",
    category: "Workforce",
    description: "Best practices for managing distributed teams and maintaining productivity.",
    icon: <IconGlobe />,
    readTime: "11 min read",
  },
  {
    id: "skills-gap",
    title: "Closing the Skills Gap",
    category: "Development",
    description: "Identifying and bridging critical skills gaps in your organization.",
    icon: <IconTarget />,
    readTime: "8 min read",
  },
  {
    id: "ai-projects",
    title: "AI Projects",
    category: "AI",
    description: "Explore DMX Tech Services AI/ML projects, solutions, and enterprise implementations.",
    icon: <IconRobot />,
    readTime: "Visit Site",
    externalUrl: "https://dmxtechservices.com/",
  },
];

const expertise = [
  {
    title: "Talent Strategy",
    description: "Aligning workforce planning with business goals and market dynamics.",
    icon: <IconTarget />,
  },
  {
    title: "Digital Transformation",
    description: "Enabling organizations with modern, scalable workforce solutions.",
    icon: <IconRobot />,
  },
  {
    title: "Leadership Development",
    description: "Building future leaders for sustainable growth and innovation.",
    icon: <IconStar />,
  },
  {
    title: "Market Intelligence",
    description: "Providing insights into talent trends and industry developments.",
    icon: <IconChart />,
  },
];

export default function InsightsPage() {
  return (
    <>
      <section
        className="py-5 text-white insights-hero position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#0b1a2f 0%,#1f4c6b 100%)",
          minHeight: "320px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="insights-hero-bg" />
        <div className="container position-relative z-3">
          <span className="badge rounded-pill bg-light text-primary px-3 py-2 mb-3">
            Research & Insights
          </span>
          <h1 className="display-4 fw-bold mt-2">Insights & Research</h1>
          <p className="mt-3 col-md-8 fs-5">
            Explore the latest workforce trends, research, and expert perspectives
            shaping the future of talent and business transformation.
          </p>
        </div>
      </section>

      <section className="py-5 featured-insight-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <div className="featured-image-wrapper">
                <img
                  src="/talent.png"
                  className="img-fluid rounded-4 shadow-lg"
                  alt="AI Projects"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="featured-badge">AI Projects</div>
              </div>
            </div>

            <div className="col-md-6">
              <span className="category-badge">Featured</span>
              <h2 className="fw-bold mt-3 mb-3" style={{ fontSize: "2.2rem" }}>
                AI Projects
              </h2>
              <p className="text-muted fs-5 lh-lg">
                Discover our AI and machine learning initiatives, enterprise use-cases,
                and intelligent automation solutions.
              </p>

              <a
                href="https://dmxtechservices.com/"
                className="btn btn-dark btn-lg rounded-pill px-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open AI Projects →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 insights-grid-section">
        <div className="container">
          <div className="mb-5">
            <h2 className="fw-bold mb-2">Latest Insights</h2>
            <p className="text-muted">Curated research and perspectives on workforce trends</p>
          </div>

          <div className="row g-4">
            {insights.map((insight) => (
              <div key={insight.id} className="col-md-6 col-lg-4">
                {insight.externalUrl ? (
                  <a
                    href={insight.externalUrl}
                    className="text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="insight-card h-100">
                      <div className="insight-icon">{insight.icon}</div>
                      <div className="insight-badge">{insight.category}</div>
                      <h5 className="fw-bold mt-3 mb-2">{insight.title}</h5>
                      <p className="text-muted mb-3">{insight.description}</p>
                      <div className="insight-footer">
                        <small className="text-muted">{insight.readTime}</small>
                        <span className="arrow">→</span>
                      </div>
                    </div>
                  </a>
                ) : (
                  <Link href={`/insights/${insight.id}`} className="text-decoration-none">
                    <div className="insight-card h-100">
                      <div className="insight-icon">{insight.icon}</div>
                      <div className="insight-badge">{insight.category}</div>
                      <h5 className="fw-bold mt-3 mb-2">{insight.title}</h5>
                      <p className="text-muted mb-3">{insight.description}</p>
                      <div className="insight-footer">
                        <small className="text-muted">{insight.readTime}</small>
                        <span className="arrow">→</span>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 expertise-section">
        <div className="container">
          <div className="mb-5">
            <h2 className="fw-bold mb-2">Our Expertise</h2>
            <p className="text-muted">Deep knowledge across key workforce domains</p>
          </div>

          <div className="row g-4">
            {expertise.map((exp, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="expertise-card">
                  <div className="expertise-icon">{exp.icon}</div>
                  <h6 className="fw-bold mt-3 mb-2">{exp.title}</h6>
                  <p className="text-muted small">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 newsletter-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3 className="fw-bold mb-3">Stay Updated on Workforce Trends</h3>
              <p className="text-muted">
                Get the latest research, insights, and expert perspectives delivered
                directly to your inbox every month.
              </p>
            </div>
            <div className="col-md-6">
              <form className="d-flex gap-2">
                <input
                  type="email"
                  className="form-control rounded-pill"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className="btn btn-danger rounded-pill px-4 fw-semibold">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-5 text-white text-center insights-cta"
        style={{
          background: "linear-gradient(135deg,#1f4c6b 0%,#0b1a2f 100%)",
        }}
      >
        <div className="container">
          <h2 className="fw-bold mb-3">Need Custom Insights for Your Organization?</h2>
          <p className="mt-3 fs-5 mb-4">
            Our research team can provide tailored analysis on workforce trends specific to your industry.
          </p>
          <Link href="/contact" className="btn btn-light btn-lg rounded-pill px-5">
            Request Custom Research →
          </Link>
        </div>
      </section>
    </>
  );
}