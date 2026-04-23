import Link from "next/link";

function IconGrowth() {
  return (
    <svg viewBox="0 0 24 24" width="34" height="34" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 15l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 8h3v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCulture() {
  return (
    <svg viewBox="0 0 24 24" width="34" height="34" fill="none" aria-hidden="true">
      <path d="M12 21s-7-4.4-7-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 19 11c0 5.6-7 10-7 10Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg viewBox="0 0 24 24" width="34" height="34" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 7V5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5v2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function CareersPage() {
  return (
    <>
      {/* HERO */}
      <section className="careers-hero text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="badge rounded-pill careers-badge mb-3">Careers at DMX</span>
              <h1 className="display-4 fw-bold mb-3">
                Build Your Future with <span className="text-danger">DMX Talent Solutions</span>
              </h1>
              <p className="careers-lead mb-4">
                Join a team that is shaping the future of talent solutions through innovation,
                collaboration, and meaningful work.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <Link href="#openings" className="btn btn-danger rounded-pill px-4 fw-semibold">
                  View Openings →
                </Link>
                <Link href="/contact" className="btn btn-light rounded-pill px-4 fw-semibold">
                  Submit Resume
                </Link>
              </div>

              <div className="row g-3 mt-4">
                <div className="col-4">
                  <div className="career-stat">
                    <h4 className="mb-0 fw-bold">15+</h4>
                    <small>Years</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="career-stat">
                    <h4 className="mb-0 fw-bold">50+</h4>
                    <small>Partners</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="career-stat">
                    <h4 className="mb-0 fw-bold">100%</h4>
                    <small>Growth</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-image-wrap">
                <img
                  src="/careers-hero.jpg"
                  alt="Team collaboration"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Join DMX Talent Solutions</h2>
            <p className="text-muted mx-auto careers-subtext">
              A professional environment built for learning, impact, and long-term career growth.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <article className="career-card h-100">
                <div className="career-icon red"><IconGrowth /></div>
                <h5 className="fw-bold mt-3">Growth Opportunities</h5>
                <p className="text-muted mb-0">
                  Continuous learning, mentorship, and clear career advancement.
                </p>
              </article>
            </div>

            <div className="col-md-4">
              <article className="career-card h-100">
                <div className="career-icon blue"><IconCulture /></div>
                <h5 className="fw-bold mt-3">Innovative Culture</h5>
                <p className="text-muted mb-0">
                  Work in a forward-thinking environment that embraces technology.
                </p>
              </article>
            </div>

            <div className="col-md-4">
              <article className="career-card h-100">
                <div className="career-icon red"><IconBriefcase /></div>
                <h5 className="fw-bold mt-3">Collaborative Team</h5>
                <p className="text-muted mb-0">
                  Be part of a supportive, inclusive, and high-performance workplace.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* OPENINGS */}
      <section id="openings" className="py-5 careers-openings">
        <div className="container">
          <div className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-4">
            <div>
              <h2 className="fw-bold mb-2">Current Openings</h2>
              <p className="text-muted mb-0">Explore roles where you can make a real impact.</p>
            </div>
          </div>

          <div className="row g-4">
            { [
              {
                title: "Software Developer",
                location: "Bangalore",
                exp: "2-4 Years",
                desc: "Build scalable applications and contribute to innovative workforce solutions.",
              },
              {
                title: "HR Recruiter",
                location: "Remote",
                exp: "1-3 Years",
                desc: "Manage end-to-end recruitment and connect top talent with leading organizations.",
              },
              {
                title: "Business Analyst",
                location: "Hyderabad",
                exp: "2-5 Years",
                desc: "Analyze workforce data and deliver insights to improve business outcomes.",
              },
            ].map((job) => (
              <div key={job.title} className="col-lg-4 col-md-6">
                <article className="job-card h-100">
                  <div className="job-thumb">
                    <img
                      src="/careers-hero.jpg"
                      alt={job.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="fw-bold mb-2">{job.title}</h5>
                    <p className="text-muted small mb-2">
                      Location: {job.location} | Experience: {job.exp}
                    </p>
                    <p className="text-muted mb-4">{job.desc}</p>
                    <Link href="/contact" className="btn btn-outline-dark btn-sm rounded-pill px-3">
                      Apply →
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="badge rounded-pill careers-badge mb-3">Our Culture</span>
              <h2 className="fw-bold mb-3">A Place Where People Grow</h2>
              <p className="text-muted lh-lg">
                At DMX, we believe in empowering people. We foster a culture of innovation,
                collaboration, and continuous improvement. Our team thrives in an environment
                where ideas are valued and growth is encouraged.
              </p>
              <div className="d-flex gap-3 flex-wrap mt-4">
                <span className="career-pill">Innovation</span>
                <span className="career-pill">Ownership</span>
                <span className="career-pill">Teamwork</span>
                <span className="career-pill">Excellence</span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-7">
                  <img
                    src="/careers-hero.jpg"
                    alt="Culture 1"
                    className="img-fluid rounded-4 shadow-sm"
                  />
                </div>
                <div className="col-5 d-flex align-items-end">
                  <img
                    src="/careers-hero.jpg"
                    alt="Culture 2"
                    className="img-fluid rounded-4 shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 careers-cta text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">Don’t See a Role That Fits?</h2>
          <p className="mt-3 mb-4">
            We’re always looking for talented individuals. Send us your resume.
          </p>
          <Link href="/contact" className="btn btn-light rounded-pill px-4 fw-semibold">
            Submit Resume →
          </Link>
        </div>
      </section>
    </>
  );
}