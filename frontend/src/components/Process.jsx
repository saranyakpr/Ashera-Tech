const steps = [
  {
    number: '01',
    title: 'Discover & Assess',
    description:
      'Deep workshops to map your current state, identify AI opportunities, and define transformation priorities.',
  },
  {
    number: '02',
    title: 'Architect & Roadmap',
    description:
      'Co-create a future-state blueprint with AI integration points, migration strategy, and a phased delivery plan.',
  },
  {
    number: '03',
    title: 'Build & Activate',
    description:
      'Agile sprints, continuous delivery, and executive demos ensure transparency and quality at every step.',
  },
  {
    number: '04',
    title: 'Evolve & Optimise',
    description:
      'Post-launch managed services, AI model retraining, and innovation cycles to keep you ahead of the curve.',
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

      <div className="proc reveal">
        {steps.map((step, index) => (
          <div className="pstep" key={step.number}>
            <div className="pnum">{step.number}</div>
            {index < steps.length - 1 && <div className="pconn"></div>}
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Process
