const technologies = [
  { iconClass: 'fas fa-brain ai-i', label: 'Azure OpenAI' },
  { iconClass: 'fas fa-robot ai-i', label: 'Microsoft Copilot' },
  { iconClass: 'fas fa-network-wired ai-i', label: 'Azure AI Services' },
  { iconClass: 'fas fa-cloud', label: 'Azure Cloud' },
  { iconClass: 'fas fa-layer-group', label: 'Microsoft 365' },
  { iconClass: 'fas fa-chart-line', label: 'Dynamics 365' },
  { iconClass: 'fas fa-bolt', label: 'Power Platform' },
  { iconClass: 'fas fa-shield-alt', label: 'Microsoft Sentinel' },
  { iconClass: 'fas fa-code-branch', label: 'Azure DevOps' },
  { iconClass: 'fas fa-database', label: 'Fabric & Synapse' },
  { iconClass: 'fas fa-lock', label: 'Entra ID' },
  { iconClass: 'fas fa-chart-pie ai-i', label: 'Power BI & Purview' },
]

const TechStrip = () => {
  return (
    <div id="strip">
      <p className="strip-lbl">Technology Ecosystem We Master</p>
      <div className="pills">
        {technologies.map((technology) => (
          <div className="pill" key={technology.label}>
            <i className={technology.iconClass}></i> {technology.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStrip
