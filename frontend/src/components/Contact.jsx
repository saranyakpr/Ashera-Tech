import { useState } from 'react'

const contactItems = [
  { iconClass: 'fas fa-envelope', label: 'Email Us', value: 'hello@asheratech.com' },
  { iconClass: 'fas fa-phone', label: 'Call Us', value: '+44 20 7946 0823' },
  {
    iconClass: 'fas fa-map-marker-alt',
    label: 'Head Office',
    value: 'Level 12, One Canada Square, London E14 5AB',
  },
  {
    iconClass: 'fas fa-clock',
    label: 'Business Hours',
    value: 'Mon - Fri | 8:00 AM - 6:00 PM GMT',
  },
]

const interestOptions = [
  'AI & Microsoft Copilot',
  'Digital Transformation Strategy',
  'Azure Cloud Services',
  'Microsoft 365 & Modern Work',
  'Dynamics 365 ERP & CRM',
  'Power Platform & Automation',
  'Cybersecurity & Compliance',
  'DevOps & App Development',
  'Data & Analytics',
  'Other / Multiple Areas',
]

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact">
      <div className="con-grid">
        <div className="reveal-left">
          <span className="stag">Get In Touch</span>

          <div className="con-info">
            <h3>
              Ready to Transform
              <br />
              Your Business with AI?
            </h3>
            <p>
              Talk to one of our Microsoft and AI specialists. We&apos;ll help you map
              the right path from your current state to an intelligent, cloud-first
              enterprise.
            </p>
          </div>

          {contactItems.map((item) => (
            <div className="con-item" key={item.label}>
              <div className="cico">
                <i className={item.iconClass}></i>
              </div>
              <div className="ctxt">
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="cf reveal-right">
          <div className="cf-title">Send Us a Message</div>

          <form
            id="cForm"
            onSubmit={handleSubmit}
            style={{ display: submitted ? 'none' : 'block' }}
          >
            <div className="frow">
              <div className="fg">
                <label htmlFor="first-name">First Name *</label>
                <input id="first-name" type="text" placeholder="John" required />
              </div>
              <div className="fg">
                <label htmlFor="last-name">Last Name *</label>
                <input id="last-name" type="text" placeholder="Smith" required />
              </div>
            </div>

            <div className="frow">
              <div className="fg">
                <label htmlFor="work-email">Work Email *</label>
                <input
                  id="work-email"
                  type="email"
                  placeholder="john@company.com"
                  required
                />
              </div>
              <div className="fg">
                <label htmlFor="phone-number">Phone Number</label>
                <input id="phone-number" type="tel" placeholder="+44 7700 900000" />
              </div>
            </div>

            <div className="fg">
              <label htmlFor="company-name">Company Name *</label>
              <input id="company-name" type="text" placeholder="Your Company Ltd." required />
            </div>

            <div className="fg">
              <label htmlFor="interest-area">Area of Interest *</label>
              <select id="interest-area" defaultValue="" required>
                <option value="" disabled>
                  Select a solution area...
                </option>
                {interestOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="fg">
              <label htmlFor="challenge">Tell Us About Your Challenge</label>
              <textarea
                id="challenge"
                placeholder="Describe your goals, current environment, or the transformation outcomes you're looking to achieve..."
              ></textarea>
            </div>

            <div className="fcheck">
              <input type="checkbox" id="priv" required />
              <label htmlFor="priv">
                I agree to the <a href="#">Privacy Policy</a> and consent to Ashera Tech
                processing my data to respond to this enquiry.
              </label>
            </div>

            <button type="submit" className="fsub">
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>

          <div id="successMsg" style={{ display: submitted ? 'block' : 'none' }}>
            <div className="sico">
              <i className="fas fa-circle-check"></i>
            </div>
            <div className="stitle">Message Sent!</div>
            <div className="ssub">
              Thank you for reaching out. An Ashera Tech specialist will be in touch
              within one business day to discuss your transformation journey.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
