import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer text-white pt-5 pb-4">
      <div className="container">

        <div className="row g-4">

          {/* 🔷 COMPANY INFO */}
          <div className="col-md-4">
            <h5 className="fw-bold">DMX Talent Solutions</h5>
            <p className="text-light small mt-3">
              Empowering organizations with innovative workforce solutions.
              We help businesses attract, develop, and retain top talent in a
              rapidly evolving world.
            </p>
          </div>

          {/* 🔷 QUICK LINKS */}
          <div className="col-md-2">
            <h6 className="fw-semibold">Company</h6>
            <ul className="list-unstyled mt-3">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/about" className="footer-link">About</Link></li>
              <li><Link href="/careers" className="footer-link">Careers</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* 🔷 SOLUTIONS */}
          <div className="col-md-3">
            <h6 className="fw-semibold">Solutions</h6>
            <ul className="list-unstyled mt-3">
              <li><Link href="/solutions" className="footer-link">Attract Talent</Link></li>
              <li><Link href="/solutions" className="footer-link">Develop Talent</Link></li>
              <li><Link href="/solutions" className="footer-link">Manage Workforce</Link></li>
              <li><Link href="/solutions" className="footer-link">Transform Business</Link></li>
            </ul>
          </div>

          {/* 🔷 CONTACT */}
          <div className="col-md-3">
            <h6 className="fw-semibold">Contact</h6>
            <p className="small mt-3 mb-1">📍 Bangalore, India</p>
            <p className="small mb-1">📧 info@dmx.com</p>
            <p className="small mb-3">📞 +91 98765 43210</p>

            <button className="btn btn-outline-light btn-sm">
              Get in Touch →
            </button>
          </div>

        </div>

        {/* 🔷 DIVIDER */}
        <hr className="border-light mt-4" />

        {/* 🔷 BOTTOM BAR */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small">
          <p className="mb-0">
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