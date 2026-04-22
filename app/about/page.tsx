import Link from "next/link";

export default function AboutPage() {
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
          <h1 className="display-4 fw-bold">About DMX Talent Solutions</h1>
          <p className="mt-3 col-md-8">
            Empowering organizations with innovative talent solutions while
            shaping the future of work through expertise, technology, and human insight.
          </p>
        </div>
      </section>

      {/* 🔷 COMPANY STORY */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6">
              <h2>Who We Are</h2>
              <p className="text-muted">
                DMX Talent Solutions is a forward-thinking workforce solutions company
                committed to helping businesses navigate the complexities of modern hiring.
                We combine deep industry expertise with innovative strategies to deliver
                impactful talent outcomes.
              </p>
              <p className="text-muted">
                Our approach is built on understanding people, aligning with business
                goals, and leveraging technology to create scalable and sustainable
                workforce solutions.
              </p>
            </div>

            <div className="col-md-6">
              <img
                src="/images/about.jpg"
                className="img-fluid rounded shadow"
                alt="About DMX"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 🔷 MISSION / VISION */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">

            <div className="col-md-6">
              <div className="p-4 bg-white shadow-sm rounded h-100">
                <h4>Our Mission</h4>
                <p className="text-muted">
                  To empower organizations by delivering innovative and reliable
                  talent solutions that drive growth, efficiency, and long-term success.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4 bg-white shadow-sm rounded h-100">
                <h4>Our Vision</h4>
                <p className="text-muted">
                  To become a trusted global partner in workforce transformation,
                  enabling businesses to thrive in an ever-evolving world of work.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🔷 VALUES */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">Our Core Values</h2>

          <div className="row g-4">

            <div className="col-md-3">
              <h6>Integrity</h6>
              <p className="text-muted small">
                We build trust through transparency and ethical practices.
              </p>
            </div>

            <div className="col-md-3">
              <h6>Innovation</h6>
              <p className="text-muted small">
                Continuously evolving to deliver smarter and better solutions.
              </p>
            </div>

            <div className="col-md-3">
              <h6>Collaboration</h6>
              <p className="text-muted small">
                Working closely with clients to achieve shared success.
              </p>
            </div>

            <div className="col-md-3">
              <h6>Excellence</h6>
              <p className="text-muted small">
                Delivering high-quality outcomes with precision and consistency.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 🔷 WHY DMX */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Why DMX Talent Solutions</h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="p-4 bg-white shadow-sm rounded h-100">
                <h5>Industry Expertise</h5>
                <p className="text-muted">
                  Deep understanding of multiple industries and talent markets.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-white shadow-sm rounded h-100">
                <h5>Client-Centric Approach</h5>
                <p className="text-muted">
                  Tailored solutions aligned with your unique business needs.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-white shadow-sm rounded h-100">
                <h5>Future-Ready Solutions</h5>
                <p className="text-muted">
                  Leveraging technology and insights to stay ahead of workforce trends.
                </p>
              </div>
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
          <h2>Partner with DMX Talent Solutions</h2>
          <p className="mt-3">
            Let us help you build a strong, agile, and future-ready workforce.
          </p>
          <Link href="/contact" className="btn btn-light mt-3 px-4">
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}