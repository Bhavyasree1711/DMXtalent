import Link from "next/link";

export default function SolutionsPage() {
  return (
    <>
      {/* 🔷 HERO */}
      <section
        className="py-5 text-white"
        style={{
          background: "linear-gradient(90deg,#0b1a2f,#1f4c6b)",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Talent Solutions</h1>
          <p className="mt-3 col-md-8">
            Comprehensive workforce solutions designed to help organizations
            attract, develop, manage, and transform talent for long-term success.
          </p>
        </div>
      </section>

      {/* 🔷 INTRO */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-3">End-to-End Workforce Solutions</h2>
          <p className="text-muted col-md-9">
            At DMX Talent Solutions, we provide integrated services across the
            entire talent lifecycle. Our solutions are built to address complex
            workforce challenges while enabling agility, scalability, and growth.
          </p>
        </div>
      </section>

      {/* 🔷 SOLUTION BLOCKS */}
      <section className="py-5 bg-light">
        <div className="container">

          <div className="row g-5">

            {/* Attract */}
            <div className="col-md-6">
              <div className="p-4 bg-white shadow-sm rounded h-100">
                <h3>Attract Talent</h3>
                <p className="text-muted">
                  Identify and engage the right candidates through advanced
                  sourcing strategies, employer branding, and data-driven hiring
                  insights.
                </p>
                <Link href="/solutions/attract" className="btn btn-outline-dark">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Retain */}
            <div className="col-md-6">
              <div className="p-4 bg-white shadow-sm rounded h-100">
                <h3>Retain & Develop</h3>
                <p className="text-muted">
                  Build strong workforce engagement with learning programs,
                  leadership development, and employee experience strategies.
                </p>
                <Link href="/solutions/retain" className="btn btn-outline-dark">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Manage */}
            <div className="col-md-6">
              <div className="p-4 bg-white shadow-sm rounded h-100">
                <h3>Manage & Optimize</h3>
                <p className="text-muted">
                  Streamline workforce operations with MSP, RPO, and analytics to
                  improve efficiency and reduce costs.
                </p>
                <Link href="/solutions/optimize" className="btn btn-outline-dark">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Transform */}
            <div className="col-md-6">
              <div className="p-4 bg-white shadow-sm rounded h-100">
                <h3>Transform Workforce</h3>
                <p className="text-muted">
                  Drive business transformation with strategic workforce planning,
                  digital adoption, and future-ready talent strategies.
                </p>
                <Link href="/solutions/transform" className="btn btn-outline-dark">
                  Learn More →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🔷 WHY DMX */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">Why DMX Talent Solutions</h2>

          <div className="row g-4">

            <div className="col-md-3">
              <h5>Integrated Approach</h5>
              <p className="text-muted small">
                One partner for all workforce needs across the lifecycle.
              </p>
            </div>

            <div className="col-md-3">
              <h5>Data-Driven Insights</h5>
              <p className="text-muted small">
                Make informed decisions with real-time analytics.
              </p>
            </div>

            <div className="col-md-3">
              <h5>Scalable Models</h5>
              <p className="text-muted small">
                Flexible solutions designed to grow with your organization.
              </p>
            </div>

            <div className="col-md-3">
              <h5>Industry Expertise</h5>
              <p className="text-muted small">
                Deep domain knowledge across multiple sectors.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 🔷 CTA */}
      <section
        className="py-5 text-white text-center"
        style={{
          background: "linear-gradient(90deg,#1f4c6b,#0b1a2f)",
        }}
      >
        <div className="container">
          <h2>Transform Your Workforce Strategy</h2>
          <p className="mt-3">
            Partner with DMX to build agile, future-ready teams.
          </p>
          <Link href="/contact" className="btn btn-light px-4 mt-3">
            Contact Us →
          </Link>
        </div>
      </section>
    </>
  );
}