import heroGraphic from '../assets/hero.png'

const transformationImage =
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80'

const transformationPoints = [
  'Legacy modernisation with zero-downtime migration strategies tailored to your risk tolerance',
  'AI-first roadmap design that embeds intelligence into every business process from day one',
  'Change management and workforce upskilling to ensure sustained adoption at scale',
  'Data platform consolidation on Microsoft Fabric for a single source of truth',
  'Continuous optimisation loops powered by real-time telemetry and AI-driven insights',
]

const reasons = [
  {
    iconClass: 'fas fa-award',
    title: 'Microsoft Gold Certified',
    description:
      'Highest-tier partnership across cloud, security, and business applications competencies.',
  },
  {
    iconClass: 'fas fa-bolt',
    title: 'Rapid Deployment',
    description:
      'Proven accelerators cut delivery time by 40% without sacrificing quality.',
  },
  {
    iconClass: 'fas fa-lock',
    title: 'Security-First',
    description:
      'Security and compliance embedded in every solution architecture from day one.',
  },
  {
    iconClass: 'fas fa-globe',
    title: '24/7 Support',
    description:
      'Round-the-clock managed services and proactive monitoring globally.',
  },
]

const transformationMetrics = [
  {
    iconClass: 'fas fa-chart-line',
    value: '40%',
    label: 'Average cost reduction post-transformation',
  },
  {
    iconClass: 'fas fa-rocket',
    value: '3x',
    label: 'Faster time-to-market for new digital products',
  },
  {
    iconClass: 'fas fa-brain',
    value: '60%',
    label: 'Increase in data-driven decisions across leadership',
  },
]

const Transformation = () => {
  return (
    <section id="transform">
      <div className="tf-grid">
        <div className="reveal-left">
          <span className="stag">Digital Transformation</span>
          <h2 className="sh">
            From Legacy Systems
            <br />
            to Intelligent Enterprise
          </h2>
          <p className="sd no-bottom-gap">
            We guide organisations through every stage of their digital transformation
            journey - turning complex challenges into competitive advantages.
          </p>

          <ul className="tf-points">
            {transformationPoints.map((point) => (
              <li key={point}>
                <div className="tf-check">
                  <i className="fas fa-check"></i>
                </div>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal-right">
          <div className="tf-visual">
            <img
              src={transformationImage}
              alt="Microsoft AI transformation workspace"
              className="tf-visual-image"
            />
            <img
              src={heroGraphic}
              alt=""
              className="tf-visual-graphic"
              aria-hidden="true"
            />
            <div className="tf-visual-badge">
              <i className="fas fa-sparkles"></i>
              <span>Unified apps, data, and AI delivery</span>
            </div>
          </div>

          <div className="why-cards">
            {reasons.map((reason, index) => (
              <div
                className="wcard"
                key={reason.title}
                style={{ '--reveal-delay': `${index * 70}ms` }}
              >
                <div className="wcard-ico">
                  <i className={reason.iconClass}></i>
                </div>
                <h4>{reason.title}</h4>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>

          <div className="tf-metrics">
            {transformationMetrics.map((metric) => (
              <div className="tf-metric" key={metric.label}>
                <div className="tf-metric-ico">
                  <i className={metric.iconClass}></i>
                </div>
                <div>
                  <div className="tf-metric-val">{metric.value}</div>
                  <div className="tf-metric-lbl">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Transformation
