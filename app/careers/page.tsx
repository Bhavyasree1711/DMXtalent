import Link from "next/link";

export default function CareersPage() {
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
          <h1 className="display-4 fw-bold">Careers at DMX</h1>
          <p className="mt-3 col-md-8">
            Join a team that is shaping the future of talent solutions. Build your
            career with purpose, innovation, and growth.
          </p>
        </div>
      </section>

      {/* 🔷 WHY JOIN US */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">Why Join DMX Talent Solutions</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 bg-light rounded h-100">
                <h5>Growth Opportunities</h5>
                <p className="text-muted">
                  Continuous learning, mentorship, and career advancement.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-light rounded h-100">
                <h5>Innovative Culture</h5>
                <p className="text-muted">
                  Work in a forward-thinking environment that embraces technology.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-light rounded h-100">
                <h5>Collaborative Team</h5>
                <p className="text-muted">
                  Be part of a supportive and inclusive workplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔷 JOB OPENINGS */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Current Openings</h2>

          <div className="row g-4">

            {/* Job 1 */}
            <div className="col-md-6">
              <div className="p-4 bg-white shadow-sm rounded">
                <h5>Software Developer</h5>
                <p className="text-muted small">
                  Location: Bangalore | Experience: 2-4 Years
                </p>
                <p className="text-muted">
                  Build scalable applications and contribute to innovative
                  workforce solutions.
                </p>
                <Link href="/careers/software-developer" className="btn btn-outline-dark btn-sm">
                  Apply →
                </Link>
              </div>
            </div>

            {/* Job 2 */}
            <div className="col-md-6">
              <div className="p-4 bg-white shadow-sm rounded">
                <h5>HR Recruiter</h5>
                <p className="text-muted small">
                  Location: Remote | Experience: 1-3 Years
                </p>
                <p className="text-muted">
                  Manage end-to-end recruitment and connect top talent with
                  leading organizations.
                </p>
                <Link href="/careers/hr-recruiter" className="btn btn-outline-dark btn-sm">
                  Apply →
                </Link>
              </div>
            </div>

            {/* Job 3 */}
            <div className="col-md-6">
              <div className="p-4 bg-white shadow-sm rounded">
                <h5>Business Analyst</h5>
                <p className="text-muted small">
                  Location: Hyderabad | Experience: 2-5 Years
                </p>
                <p className="text-muted">
                  Analyze workforce data and deliver insights to improve business outcomes.
                </p>
                <Link href="/careers/business-analyst" className="btn btn-outline-dark btn-sm">
                  Apply →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🔷 CULTURE SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6">
              <h2>Our Culture</h2>
              <p className="text-muted">
                At DMX, we believe in empowering people. We foster a culture of
                innovation, collaboration, and continuous improvement. Our team
                thrives in an environment where ideas are valued and growth is encouraged.
              </p>
            </div>

            <div className="col-md-6">
              <img
                src="/images/careers.jpg"
                className="img-fluid rounded shadow"
                alt="Team Culture"
              />
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
          <h2>Don’t See a Role That Fits?</h2>
          <p className="mt-3">
            We’re always looking for talented individuals. Send us your resume.
          </p>
          <Link href="/contact" className="btn btn-light mt-3 px-4">
            Submit Resume →
          </Link>
        </div>
      </section>
    </>
  );
}