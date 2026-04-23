import Link from "next/link";

const solutionDetails = {
  recruit: {
    title: "Talent Recruitment",
    description: "End-to-end recruitment solutions connecting businesses with exceptional talent.",
    benefits: [
      "Access to curated talent pools",
      "Rigorous screening and vetting",
      "Cultural alignment matching",
      "Fast turnaround times"
    ]
  },
  tech: {
    title: "Tech Talent Solutions",
    description: "Specialized IT and digital hiring for future-ready teams.",
    benefits: [
      "Expert vetting of technical skills",
      "Latest tech stack expertise",
      "Enterprise to startup placements",
      "Emerging technology focus"
    ]
  },
  workforce: {
    title: "Workforce Management",
    description: "MSP, RPO, and talent consulting services.",
    benefits: [
      "Reduced operational complexity",
      "Cost optimization",
      "Strategic talent planning",
      "Performance optimization"
    ]
  },
  "ai-talent": {
    title: "AI-Powered Talent Matching",
    description: "Intelligent matching using advanced AI and machine learning.",
    benefits: [
      "95%+ matching accuracy",
      "Bias elimination",
      "Predictive analytics",
      "Real-time insights"
    ]
  },
  dev: {
    title: "Talent Development",
    description: "Training and upskilling programs for workforce growth.",
    benefits: [
      "Customized training paths",
      "Expert-led programs",
      "Certification support",
      "Career progression tracking"
    ]
  },
  retention: {
    title: "Retention & Success",
    description: "Post-placement support ensuring long-term success.",
    benefits: [
      "90-day onboarding support",
      "Performance monitoring",
      "Career coaching",
      "Long-term partnerships"
    ]
  }
};

export default function SolutionDetail({ params }: { params: { id: string } }) {
  const solution = solutionDetails[params.id as keyof typeof solutionDetails];

  if (!solution) {
    return <div className="container py-5"><h2>Solution not found</h2></div>;
  }

  return (
    <>
      <section className="py-5 text-white solution-detail-hero" style={{
        background: "linear-gradient(90deg,#0b1a2f,#1f4c6b)"
      }}>
        <div className="container">
          <Link href="/solutions" className="text-light mb-3 d-inline-block">
            ← Back to Solutions
          </Link>
          <h1 className="display-4 fw-bold mt-2">{solution.title}</h1>
          <p className="mt-3 col-md-8 fs-5">{solution.description}</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-4">Key Benefits</h2>
              <ul className="solution-detail-list">
                {solution.benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    <strong>{benefit}</strong>
                  </li>
                ))}
              </ul>

              <h2 className="fw-bold mt-5 mb-4">How It Works</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h5>Assessment</h5>
                  <p>We analyze your talent needs and business objectives.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h5>Strategy</h5>
                  <p>Develop a customized recruitment or development strategy.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h5>Execution</h5>
                  <p>Implement the solution with dedicated support.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h5>Success</h5>
                  <p>Monitor performance and optimize continuously.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="solution-cta-box">
                <h4 className="fw-bold">Ready to get started?</h4>
                <p className="text-muted mt-2">
                  Let's discuss how this solution can transform your organization.
                </p>
                <Link href="/contact" className="btn btn-danger w-100 mt-3">
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}