import bannerImage from '../assets/banner.png'
import heroGraphic from '../assets/hero.png'

const featureChips = [
  'RAG Architecture',
  'LLM Fine-tuning',
  'Copilot Studio',
  'Prompt Engineering',
  'AI Safety & Governance',
]

const impactMetrics = [
  { label: 'Productivity Gain', value: '+47%', width: '85%' },
  { label: 'Manual Task Reduction', value: '-68%', width: '70%' },
  { label: 'Decision Speed', value: '3.2x', width: '90%' },
  { label: 'Cost Optimisation', value: '-35%', width: '60%' },
]

const cards = [
  {
    iconClass: 'fas fa-robot',
    iconColor: '#B085FF',
    title: 'Intelligent Process Automation',
    description:
      'Combine Power Automate, RPA, and Azure AI to eliminate repetitive tasks, accelerate approvals, and orchestrate complex business processes end-to-end.',
  },
  {
    iconClass: 'fas fa-chart-bar',
    iconColor: '#00BCF2',
    title: 'Predictive Analytics & BI',
    description:
      'Leverage Microsoft Fabric, Synapse, and Power BI with embedded ML models to turn raw data into forward-looking intelligence your leaders can act on.',
  },
  {
    iconClass: 'fas fa-comments',
    iconColor: '#FF7EB6',
    title: 'Conversational AI & Bots',
    description:
      'Deploy enterprise-grade chatbots and virtual agents using Copilot Studio and Azure Bot Services - resolving queries, onboarding staff, and serving customers 24/7.',
  },
  {
    iconClass: 'fas fa-eye',
    iconColor: '#FFB300',
    title: 'Azure AI Vision & Document',
    description:
      'Automate document processing, form extraction, image classification, and OCR workflows with Azure AI Document Intelligence and Computer Vision at scale.',
  },
  {
    iconClass: 'fas fa-shield-halved',
    iconColor: '#4ADE80',
    title: 'AI-Driven Security Operations',
    description:
      'Use Microsoft Sentinel with AI-powered UEBA, threat hunting, and automated SOAR playbooks to detect, investigate, and neutralise threats in real time.',
  },
]

const AICapabilities = () => {
  return (
    <section id="ai">
      <div className="shead reveal">
        <span className="stag">AI-First Approach</span>
        <h2 className="sh">
          Intelligence at the
          <br />
          Core of Everything
        </h2>
        <p className="sd">
          We embed AI into every layer of your Microsoft environment - automating
          decisions, generating insights, and elevating human potential.
        </p>
      </div>

      <div className="ai-grid">
        <div className="ai-feature reveal">
          <div className="ai-feature-glow"></div>

          <div>
            <div className="ai-feature-tag">
              <i className="fas fa-brain"></i> Generative AI
            </div>
            <h3>Microsoft Copilot &amp; Azure OpenAI Integration</h3>
            <p>
              We design, fine-tune, and deploy enterprise Copilot solutions and custom
              Azure OpenAI models tailored to your workflows - turning every employee
              into a supercharged knowledge worker.
            </p>
            <div className="ai-chips">
              {featureChips.map((chip) => (
                <span className="ai-chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="ai-visual">
            <div className="ai-visual-preview">
              <img
                src={bannerImage}
                alt="Ashera Tech AI experience preview"
                className="ai-visual-image"
              />
              <img
                src={heroGraphic}
                alt=""
                className="ai-visual-graphic"
                aria-hidden="true"
              />
              <div className="ai-preview-chip">
                <i className="fas fa-wave-square"></i> Human + AI orchestration
              </div>
            </div>
            <div className="ai-visual-lbl">AI Impact Metrics</div>
            {impactMetrics.map((metric) => (
              <div key={metric.label}>
                <div className="av-row">
                  <span className="av-label">{metric.label}</span>
                  <span className="av-val">{metric.value}</span>
                </div>
                <div className="av-bar-wrap">
                  <div className="av-bar" style={{ width: metric.width }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {cards.map((card, index) => (
          <div
            className="ai-card reveal"
            key={card.title}
            style={{ '--reveal-delay': `${index * 90}ms` }}
          >
            <div className="ai-ico" style={{ color: card.iconColor }}>
              <i className={card.iconClass}></i>
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AICapabilities
