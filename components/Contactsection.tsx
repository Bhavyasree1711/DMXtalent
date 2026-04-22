export default function ContactSection() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4">Contact Us</h2>

        <form className="row g-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Name" />
          </div>

          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Email" />
          </div>

          <div className="col-12">
            <textarea className="form-control" rows={4} placeholder="Message"></textarea>
          </div>

          <div className="col-12">
            <button className="btn btn-dark px-4">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}