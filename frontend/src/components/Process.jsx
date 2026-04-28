const steps = [
  {
    number: '01',
    title: 'Discover & Assess',
    description:
      'Deep workshops to map your current state, identify AI opportunities, and define transformation priorities.',
    outcome: 'Current-state analysis and AI opportunity map',
  },
  {
    number: '02',
    title: 'Architect & Roadmap',
    description:
      'Co-create a future-state blueprint with AI integration points, migration strategy, and a phased delivery plan.',
    outcome: 'Target architecture and phased delivery roadmap',
  },
  {
    number: '03',
    title: 'Build & Activate',
    description:
      'Agile sprints, continuous delivery, and executive demos ensure transparency and quality at every step.',
    outcome: 'Production-ready platforms, copilots, and workflows',
  },
  {
    number: '04',
    title: 'Evolve & Optimise',
    description:
      'Post-launch managed services, AI model retraining, and innovation cycles to keep you ahead of the curve.',
    outcome: 'Continuous optimisation backed by measurable adoption',
  },
]

const Process = () => {
  return (
    <section id="process">
      <div className="shead centered reveal">
        <span className="stag">How We Deliver</span>
        <h2 className="sh full-width">Our Proven Transformation Framework</h2>
        <p className="sd centered-copy">
          Every engagement follows a structured four-phase model - delivering clarity,
          velocity, and lasting value.
        </p>
      </div>

      <div className="proc">
        {steps.map((step, index) => (
          <article
            className="pstep reveal"
            key={step.number}
            style={{ '--reveal-delay': `${index * 80}ms` }}
          >
            <div className="pnum">{step.number}</div>
            {index < steps.length - 1 && <div className="pconn"></div>}

            <div className="pcard">
              <span className="pkicker">Phase {step.number}</span>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
              <div className="pmeta">
                <i className="fas fa-arrow-trend-up"></i>
                <span>{step.outcome}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Process
