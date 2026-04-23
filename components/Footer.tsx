import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-clean footer-white pt-5 pb-4">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-md-4">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="footer-logo-wrap">
                <img
                  src="/logo1.png"
                  alt="DMX Talent Solutions"
                  className="footer-logo"
                  style={{ width: "150px", height: "auto" }}
                />
              </div>
              <div>
                <h5 className="fw-bold mb-1 footer-title">DMX Talent Solutions</h5>
                <p className="mb-0 footer-subtitle">Talent Solutions Pvt. Ltd.</p>
              </div>
            </div>

            <p className="footer-text small mt-3">
              Empowering organizations with innovative workforce solutions.
              We help businesses attract, develop, and retain top talent in a
              rapidly evolving world.
            </p>
          </div>

          <div className="col-md-2">
            <h6 className="fw-semibold footer-heading">Company</h6>
            <ul className="list-unstyled mt-3">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/about" className="footer-link">About</Link></li>
              <li><Link href="/careers" className="footer-link">Careers</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-semibold footer-heading">Solutions</h6>
            <ul className="list-unstyled mt-3">
              <li><Link href="/solutions" className="footer-link">Attract Talent</Link></li>
              <li><Link href="/solutions" className="footer-link">Develop Talent</Link></li>
              <li><Link href="/solutions" className="footer-link">Manage Workforce</Link></li>
              <li><Link href="/solutions" className="footer-link">Transform Business</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-semibold footer-heading">Contact</h6>
            <p className="small mt-3 mb-1 footer-text">📍 Bangalore, India</p>
            <p className="small mb-1 footer-text">📧 info@dmxtechservices.com</p>
            <p className="small mb-3 footer-text">📞 +91 6364512292</p>

            <button className="btn btn-outline-dark btn-sm footer-btn">
              Get in Touch →
            </button>
          </div>
        </div>

        <hr className="footer-divider mt-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small">
          <p className="mb-0 footer-copy">
            © {new Date().getFullYear()} DMX Talent Solutions Pvt. Ltd.
          </p>

          <div className="d-flex gap-3 mt-2 mt-md-0">
            <Link href="#" className="footer-link">Privacy Policy</Link>
            <Link href="#" className="footer-link">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}