import Link from "next/link";

const solutions = [
  {
    id: "recruit",
    title: "Talent Recruitment",
    description: "End-to-end recruitment solutions connecting businesses with top talent.",
    icon: "👥",
    features: [
      "Permanent placement",
      "Contract staffing",
      "Executive search",
      "Bulk hiring"
    ],
    details: "Our comprehensive recruitment services cover every stage of the hiring lifecycle. We leverage advanced screening techniques, industry networks, and cultural fit analysis to ensure the perfect match between candidates and organizations."
  },
  {
    id: "tech",
    title: "Tech Talent Solutions",
    description: "Specialized IT and digital hiring for future-ready teams.",
    icon: "💻",
    features: [
      "Software engineers",
      "Data scientists",
      "Cloud architects",
      "DevOps specialists"
    ],
    details: "Build future-ready technology teams with our specialized IT hiring solutions. We source and vet top tech talent across emerging technologies, enterprise skillsets, and cutting-edge digital roles."
  },
  {
    id: "workforce",
    title: "Workforce Management",
    description: "MSP, RPO, and talent consulting services.",
    icon: "📊",
    features: [
      "Managed staffing programs",
      "Recruitment process outsourcing",
      "Talent consulting",
      "Performance optimization"
    ],
    details: "Optimize your workforce strategy with our comprehensive management services. From MSP to RPO implementations, we help reduce operational complexity while maximizing talent quality and performance."
  },
  {
    id: "ai-talent",
    title: "AI-Powered Talent Matching",
    description: "Intelligent matching using advanced AI and machine learning.",
    icon: "🤖",
    features: [
      "ML-powered screening",
      "Skill-gap analysis",
      "Predictive analytics",
      "Culture fit scoring"
    ],
    details: "Harness the power of AI to transform your hiring process. Our proprietary algorithms analyze skills, experience, and cultural alignment to deliver the most relevant candidates with 95%+ accuracy."
  },
  {
    id: "dev",
    title: "Talent Development",
    description: "Training and upskilling programs for workforce growth.",
    icon: "📚",
    features: [
      "Technical training",
      "Leadership development",
      "Soft skills coaching",
      "Certification programs"
    ],
    details: "Invest in your team's growth with comprehensive development programs. Our expert-led training covers technical skills, leadership capabilities, and soft skills to ensure continuous workforce advancement."
  },
  {
    id: "retention",
    title: "Retention & Success",
    description: "Post-placement support ensuring long-term success.",
    icon: "⭐",
    features: [
      "90-day onboarding",
      "Performance tracking",
      "Career coaching",
      "Satisfaction surveys"
    ],
    details: "We don't just place talent—we ensure lasting success. Our dedicated support team provides 90-day onboarding, performance monitoring, and career coaching to maximize retention and satisfaction."
  }
];

export default function SolutionsPage() {
  return (
    <>
      {/* 🔷 HERO */}
      <section className="py-5 text-white solutions-hero" style={{
        background: "linear-gradient(90deg,#0b1a2f,#1f4c6b)"
      }}>
        <div className="container">
          <h1 className="display-4 fw-bold">Our Solutions</h1>
          <p className="mt-3 col-md-8 fs-5">
            Comprehensive talent solutions designed to address every stage of your
            workforce lifecycle. From recruitment to development, we deliver measurable results.
          </p>
        </div>
      </section>

      {/* 🔷 SOLUTIONS GRID */}
      <section className="py-5 solutions-grid-section">
        <div className="container">
          <div className="row g-4">
            {solutions.map((solution) => (
              <div key={solution.id} className="col-md-6 col-lg-4">
                <div className="solution-card h-100">
                  <div className="solution-icon">{solution.icon}</div>
                  <h4 className="fw-bold mt-3">{solution.title}</h4>
                  <p className="text-muted">{solution.description}</p>

                  <ul className="solution-features">
                    {solution.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="feature-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔷 AI PROJECTS */}
      <section className="py-5 ai-projects-section">
        <div className="container">
          <h2 className="fw-bold mb-5 text-center">AI-Powered Innovations</h2>
          
          <div className="row g-4">
            <div className="col-md-6">
              <div className="ai-project-card">
                <div className="ai-badge">AI/ML</div>
                <h5 className="fw-bold mt-3">Intelligent Candidate Matching</h5>
                <p className="text-muted">
                  Our proprietary machine learning model analyzes 500+ data points
                  to match candidates with roles using 95%+ accuracy. Real-time
                  skill gap analysis and culture fit scoring ensure perfect alignment.
                </p>
                <div className="tech-stack">
                  <span className="badge bg-light text-dark">Python</span>
                  <span className="badge bg-light text-dark">TensorFlow</span>
                  <span className="badge bg-light text-dark">NLP</span>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="ai-project-card">
                <div className="ai-badge">AI/ML</div>
                <h5 className="fw-bold mt-3">Predictive Analytics Engine</h5>
                <p className="text-muted">
                  Forecast hiring trends, retention risks, and market demand with
                  advanced predictive models. Data-driven insights help optimize
                  recruitment strategy and reduce time-to-hire by 40%.
                </p>
                <div className="tech-stack">
                  <span className="badge bg-light text-dark">Scikit-Learn</span>
                  <span className="badge bg-light text-dark">XGBoost</span>
                  <span className="badge bg-light text-dark">Analytics</span>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="ai-project-card">
                <div className="ai-badge">AI/ML</div>
                <h5 className="fw-bold mt-3">Resume Screening AI</h5>
                <p className="text-muted">
                  Automatically extract skills, experience, and qualifications from
                  resumes. NLP-powered extraction reduces screening time by 70% while
                  maintaining accuracy and eliminating bias.
                </p>
                <div className="tech-stack">
                  <span className="badge bg-light text-dark">NLP</span>
                  <span className="badge bg-light text-dark">BERT</span>
                  <span className="badge bg-light text-dark">OCR</span>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="ai-project-card">
                <div className="ai-badge">AI/ML</div>
                <h5 className="fw-bold mt-3">Talent Pipeline Intelligence</h5>
                <p className="text-muted">
                  Real-time monitoring of candidate pipeline health with AI-driven
                  recommendations. Predictive alerts notify you of potential drop-offs
                  and suggest optimization strategies.
                </p>
                <div className="tech-stack">
                  <span className="badge bg-light text-dark">Real-time</span>
                  <span className="badge bg-light text-dark">Dashboard</span>
                  <span className="badge bg-light text-dark">API</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔷 WHY OUR SOLUTIONS */}
      <section className="py-5 why-solutions-section">
        <div className="container">
          <h2 className="fw-bold mb-5 text-center">Why Choose Our Solutions</h2>
          
          <div className="row g-4">
            <div className="col-md-3">
              <div className="why-solution-card">
                <div className="why-solution-icon">📈</div>
                <h5 className="fw-bold">40% Faster</h5>
                <p className="text-muted">Reduce time-to-hire with AI acceleration</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="why-solution-card">
                <div className="why-solution-icon">✅</div>
                <h5 className="fw-bold">95% Accuracy</h5>
                <p className="text-muted">ML-powered matching with precision</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="why-solution-card">
                <div className="why-solution-icon">💼</div>
                <h5 className="fw-bold">End-to-End</h5>
                <p className="text-muted">Complete solutions from recruitment to retention</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="why-solution-card">
                <div className="why-solution-icon">🎯</div>
                <h5 className="fw-bold">ROI Focused</h5>
                <p className="text-muted">Measurable results and transparent reporting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔷 CTA */}
      <section className="py-5 text-white solutions-cta" style={{
        background: "linear-gradient(90deg,#1f4c6b,#0b1a2f)"
      }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Ready to Transform Your Hiring?</h2>
          <p className="mt-3 fs-5">
            Let's discuss which solution best fits your talent needs.
          </p>
          <Link href="/contact" className="btn btn-light mt-4 px-4 py-2 fw-semibold">
            Schedule a Consultation →
          </Link>
        </div>
      </section>
    </>
  );
}