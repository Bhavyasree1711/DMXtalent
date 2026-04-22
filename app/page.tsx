import Hero from "@/components/Hero";
import ContactSection from "@/components/Contactsection";
export default function Home() {
  return (
    <>
      <Hero />

      <div className="container py-5">
        <h2 className="fw-bold">Welcome to DMX Talent Solutions</h2>
        <p className="text-muted">
          We deliver workforce solutions for modern enterprises.
        </p>
      </div>
    </>
  );
}