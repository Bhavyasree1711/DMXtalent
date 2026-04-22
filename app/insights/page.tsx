import Link from "next/link";

export default function InsightsPage() {
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
          <h1 className="display-4 fw-bold">Insights & Research</h1>
          <p className="mt-3 col-md-8">
            Explore the latest workforce trends, research, and expert perspectives
            shaping the future of talent and business transformation.
          </p>
        </div>
      </section>

      {/* 🔷 FEATURED INSIGHT */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6">
              <img
                src="/images/insight.jpg"
                className="img-fluid rounded shadow"
                alt="Insight"
              />
            </div>

            <div className="col-md-6">
              <h2 className="fw-bold">
                The State of Workforce Transformation 2025
              </h2>
              <p className="text-muted mt-3">
                Discover how organizations are adapting to rapid changes in
                technology, talent expectations, and global workforce dynamics.
                Our research highlights key strategies for building resilient and
                future-ready teams.
              </p>

              <Link href="/insights/workforce-2025" className="btn btn-dark mt-3">
                Read Full Report →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 🔷 INSIGHTS GRID */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Latest Insights</h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="card p-4 shadow-sm h-100">
                <h5>Future of Work</h5>
                <p className="text-muted small">
                  Trends shaping how organizations attract and retain talent in
                  a digital-first world.
                </p>
                <Link href="/insights/future-work" className="btn btn-outline-dark btn-sm">
                  Read →
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-4 shadow-sm h-100">
                <h5>AI in Recruitment</h5>
                <p className="text-muted small">
                  How artificial intelligence is transforming hiring strategies
                  and candidate experience.
                </p>
                <Link href="/insights/ai-recruitment" className="btn btn-outline-dark btn-sm">
                  Read →
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-4 shadow-sm h-100">
                <h5>Workforce Analytics</h5>
                <p className="text-muted small">
                  Leveraging data to make smarter workforce decisions and improve
                  business outcomes.
                </p>
                <Link href="/insights/analytics" className="btn btn-outline-dark btn-sm">
                  Read →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🔷 EXPERTISE SECTION */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">Our Expertise</h2>

          <div className="row g-4">

            <div className="col-md-3">
              <h6>Talent Strategy</h6>
              <p className="text-muted small">
                Aligning workforce planning with business goals.
              </p>
            </div>

            <div className="col-md-3">
              <h6>Digital Transformation</h6>
              <p className="text-muted small">
                Enabling organizations with modern workforce solutions.
              </p>
            </div>

            <div className="col-md-3">
              <h6>Leadership Development</h6>
              <p className="text-muted small">
                Building future leaders for sustainable growth.
              </p>
            </div>

            <div className="col-md-3">
              <h6>Market Intelligence</h6>
              <p className="text-muted small">
                Providing insights into talent and industry trends.
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
          <h2>Stay Ahead with DMX Insights</h2>
          <p className="mt-3">
            Get the latest research and insights delivered to your organization.
          </p>
          <Link href="/contact" className="btn btn-light px-4 mt-3">
            Subscribe →
          </Link>
        </div>
      </section>
    </>
  );
}