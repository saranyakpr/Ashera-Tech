const stats = [
  { value: '500+', label: 'Transformations Delivered' },
  { value: '98%', label: 'Client Retention' },
  { value: '120+', label: 'Certified Experts' },
  { value: '50+', label: 'Countries Served' },
]

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-grid"></div>
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>

      <div className="hero-layout">
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="pulse"></span>
            AI-Powered &nbsp;&middot;&nbsp; Microsoft Gold Partner &nbsp;&middot;&nbsp; Digital
            Transformation
          </div>

          <h1>
            Redefine What&apos;s
            <br />
            <span className="grad-blue">Possible</span> with AI &amp;
            <br />
            <span className="grad-violet">Microsoft</span>
          </h1>

          <p className="hero-desc">
            Ashera Tech fuses cutting-edge artificial intelligence with the full power
            of the Microsoft ecosystem - driving digital transformation that delivers
            measurable outcomes, faster than you thought possible.
          </p>

          <div className="hero-ctas">
            <a href="#contact" className="cta-p">
              <i className="fas fa-rocket"></i> Start Your Transformation
            </a>
            <a href="#ai" className="cta-s">
              <i className="fas fa-microchip"></i> See AI Capabilities
            </a>
          </div>

          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="hs-num">{stat.value}</div>
                <div className="hs-lbl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual-wrap">
          <div className="hv-ring"></div>

          <div className="hv-img-wrap">
            <img
              src="https://user-gen-media-assets.s3.amazonaws.com/gemini_images/7c722fc1-1add-4528-9f7e-de656c92ed90.png"
              alt="Digital Transformation Professional"
              className="hv-pro-img"
            />
            <div className="hv-img-overlay"></div>
            <div className="hv-img-badge-bottom">
              <div className="hv-img-badge-inner">
                <i
                  className="fas fa-brain"
                  style={{ color: '#B085FF', fontSize: '1.1rem' }}
                ></i>
                <div>
                  <div className="hv-img-title">AI-Powered Transformation</div>
                  <div className="hv-img-subtitle">
                    Microsoft Gold Partner &middot; 500+ Projects
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hv-badge hv-badge-tl">
            <i className="fas fa-check-circle" style={{ color: '#4ADE80' }}></i> 98.9%
            Uptime
          </div>
          <div className="hv-badge hv-badge-br">
            <i className="fas fa-bolt" style={{ color: '#FFB300' }}></i> AI Deployed
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
