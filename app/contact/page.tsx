"use client";

export default function ContactPage() {
  return (
    <div className="container py-5">

      {/* 🔝 Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="text-muted">
          Let’s discuss how DMX Talent Solutions can help your business grow.
        </p>
      </div>

      <div className="row g-5">

        {/* 📝 Contact Form */}
        <div className="col-md-6">
          <div className="card p-4 shadow-sm border-0">

            <h4 className="mb-4">Send us a message</h4>

            <form>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Full Name"
              />

              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email Address"
              />

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Company Name"
              />

              <textarea
                className="form-control mb-3"
                rows={5}
                placeholder="Your Message"
              />

              <button className="btn btn-dark rounded-pill px-4 w-100">
                Send Message →
              </button>
            </form>

          </div>
        </div>

        {/* 📍 Contact Info */}
        <div className="col-md-6">

          <div className="mb-4">
            <h5 className="fw-semibold">Office Address</h5>
            <p className="text-muted">
              DMX Tech Services Pvt. Ltd.<br />
              Bangalore, India
            </p>
          </div>

          <div className="mb-4">
            <h5 className="fw-semibold">Email</h5>
            <p className="text-muted">contact@dmxtech.com</p>
          </div>

          <div className="mb-4">
            <h5 className="fw-semibold">Phone</h5>
            <p className="text-muted">+91 98765 43210</p>
          </div>

          {/* 🗺️ Map */}
          <div className="rounded overflow-hidden shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </div>
  );
}