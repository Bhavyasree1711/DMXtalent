export default function BrandsPage() {
  return (
    <>
      {/* 🔷 HERO */}
      <section className="py-5 text-white" style={{
        background: "linear-gradient(90deg,#0b1a2f,#1f4c6b)"
      }}>
        <div className="container">
          <h1 className="display-4 fw-bold">Our Talent Brands</h1>
          <p className="mt-3 col-md-8">
            At DMX Talent Solutions, our brands represent specialized capabilities
            designed to help organizations attract, develop, and retain top talent
            in a rapidly evolving world of work.
          </p>
        </div>
      </section>

      {/* 🔷 INTRO */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-3">Delivering Expertise Across Every Talent Need</h2>
          <p className="text-muted col-md-9">
            Our portfolio of talent solutions is built to address every stage of
            the workforce lifecycle. From sourcing the right candidates to
            transforming workforce strategies, DMX combines deep industry
            expertise with innovative technology to deliver measurable outcomes.
          </p>
        </div>
      </section>

      {/* 🔷 BRANDS GRID */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">

            {/* Brand 1 */}
            <div className="col-md-4">
              <div className="p-4 bg-white shadow-sm h-100 rounded">
                <h4>DMX Recruit</h4>
                <p className="text-muted">
                  End-to-end recruitment solutions that connect businesses with
                  the right talent. From permanent hiring to contract staffing,
                  we ensure speed, quality, and scalability.
                </p>
              </div>
            </div>

            {/* Brand 2 */}
            <div className="col-md-4">
              <div className="p-4 bg-white shadow-sm h-100 rounded">
                <h4>DMX Tech Talent</h4>
                <p className="text-muted">
                  Specialized IT and digital hiring solutions designed to help
                  organizations build future-ready technology teams across
                  emerging and enterprise skillsets.
                </p>
              </div>
            </div>

            {/* Brand 3 */}
            <div className="col-md-4">
              <div className="p-4 bg-white shadow-sm h-100 rounded">
                <h4>DMX Workforce Solutions</h4>
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

      {/* 🔷 WHY CHOOSE */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">Why Choose DMX Talent Solutions</h2>

          <div className="row g-4">
            <div className="col-md-3">
              <h5>Industry Expertise</h5>
              <p className="text-muted small">
                Deep understanding across multiple industries and talent markets.
              </p>
            </div>

            <div className="col-md-3">
              <h5>Scalable Solutions</h5>
              <p className="text-muted small">
                Flexible models that grow with your business needs.
              </p>
            </div>

            <div className="col-md-3">
              <h5>Technology Driven</h5>
              <p className="text-muted small">
                Leveraging modern tools to enhance hiring efficiency and insights.
              </p>
            </div>

            <div className="col-md-3">
              <h5>Global Mindset</h5>
              <p className="text-muted small">
                Delivering solutions aligned with global workforce trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔷 CTA */}
      <section className="py-5 text-white text-center" style={{
        background: "linear-gradient(90deg,#1f4c6b,#0b1a2f)"
      }}>
        <div className="container">
          <h2>Build Your Future Workforce with DMX</h2>
          <p className="mt-3">
            Partner with us to unlock the full potential of your talent strategy.
          </p>
          <button className="btn btn-light mt-3 px-4">
            Contact Us →
          </button>
        </div>
      </section>
    </>
  );
}