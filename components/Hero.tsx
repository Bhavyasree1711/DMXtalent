"use client";

import dynamic from "next/dynamic";

const Background3D = dynamic(() => import("./Background3D"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="hero-section text-white d-flex align-items-center position-relative">

      {/* 🔵 3D Background */}
      <Background3D />

      {/* 🔵 Gradient */}
      <div className="hero-gradient" />

      {/* 🔵 INLINE SVG (IMPORTANT) */}
      <svg
        className="hero-svg"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
      >
        <path
          d="M0 120 H900 Q1150 120 1150 350 V600"
          stroke="white"
          strokeWidth="5"
          fill="none"
          opacity="0.25"
        />
      </svg>

      {/* 🔵 CONTENT */}
      <div className="container position-relative z-3">
        <div className="row align-items-center">

          <div className="col-md-6">
            <h1 className="display-3 fw-bold">
              Empowering Talent,<br />
              Delivering Solutions.
            </h1>

            <p className="mt-4 text-light">
              Helping organizations grow with innovative workforce solutions.
            </p>

            <button className="btn btn-light rounded-pill mt-4 px-4">
              Contact Us →
            </button>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="/hero.png"
              className="img-fluid rounded shadow-lg"
              alt="Team working"
            />
          </div>

        </div>
      </div>

    </section>
  );
}