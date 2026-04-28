const services = [
  {
    iconClass: 'fas fa-cloud',
    title: 'Azure Cloud & Infrastructure',
    description:
      'Migrate, modernise, and optimise your infrastructure on Azure with landing zones, FinOps governance, and 24/7 managed operations.',
    tags: ['Migration', 'AKS', 'FinOps', 'Serverless'],
  },
  {
    iconClass: 'fas fa-users-cog',
    title: 'Microsoft 365 & Modern Work',
    description:
      'Transform how your teams collaborate with M365 deployments, Teams development, SharePoint intranets, and governance frameworks.',
    tags: ['M365', 'Teams', 'SharePoint', 'Viva'],
  },
  {
    iconClass: 'fas fa-chart-bar',
    title: 'Dynamics 365 ERP & CRM',
    description:
      'Unify your operations, finance, and customer relationships with tailored Dynamics 365 implementations built for your industry.',
    tags: ['Business Central', 'Sales', 'Finance', 'SCM'],
  },
  {
    iconClass: 'fas fa-bolt',
    title: 'Power Platform & Low-Code',
    description:
      'Accelerate innovation with citizen developer enablement, Power Apps solutions, and Power Automate workflows that cut costs dramatically.',
    tags: ['Power Apps', 'Automate', 'Power BI', 'Copilot Studio'],
  },
  {
    iconClass: 'fas fa-shield-virus',
    title: 'Cybersecurity & Compliance',
    description:
      'Implement a Zero Trust posture, deploy the Microsoft Defender suite, and achieve ISO 27001 and GDPR compliance with our security experts.',
    tags: ['Sentinel', 'Defender', 'Zero Trust', 'GDPR'],
  },
  {
    iconClass: 'fas fa-code-branch',
    title: 'DevOps & App Development',
    description:
      'Engineer modern applications on Azure with robust CI/CD pipelines, .NET microservices, API management, and GitHub Enterprise integration.',
    tags: ['Azure DevOps', '.NET', 'GitHub', 'API Mgmt'],
  },
]

const Services = () => {
  return (
    <section id="services">
      <div className="shead reveal">
        <span className="stag blue">Microsoft Services</span>
        <h2 className="sh">
          End-to-End Microsoft
          <br />
          Solutions That Scale
        </h2>
        <p className="sd">
          From cloud infrastructure to CRM and collaboration, we deliver the full
          Microsoft portfolio with expertise that only a Gold Partner can provide.
        </p>
      </div>

      <div className="srv-grid">
        {services.map((service, index) => (
          <div
            className="srv reveal"
            key={service.title}
            style={{ '--reveal-delay': `${index * 80}ms` }}
          >
            <div className="srv-glow"></div>
            <div className="srv-ico">
              <i className={service.iconClass}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="srv-tags">
              {service.tags.map((tag) => (
                <span className="srv-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
