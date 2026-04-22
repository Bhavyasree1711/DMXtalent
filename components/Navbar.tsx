"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top py-3">
      <div className="container">

        {/* LOGO */}
        <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
          <img src="/logo.png" height="70" />
          <span className="fw-bold fs-4">DMX Talent Solutions</span>
        </Link>

        {/* NAV LINKS */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto gap-4 fw-medium">
            
             <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>

            <li className="nav-item">
              <Link href="/brands" className="nav-link">Brands</Link>
            </li>

            <li className="nav-item">
              <Link href="/solutions" className="nav-link">Solutions</Link>
            </li>

            <li className="nav-item">
              <Link href="/insights" className="nav-link">Insights</Link>
            </li>

            <li className="nav-item">
              <Link href="/about" className="nav-link">About</Link>
            </li>

            <li className="nav-item">
              <Link href="/careers" className="nav-link">Careers</Link>
            </li>

          </ul>

          <Link href="/contact" className="btn btn-dark px-4">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}