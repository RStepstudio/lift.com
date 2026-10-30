import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">Lift</span>
          </div>
          <div className="footer-links">
            <a href="#launch" className="footer-link">Launch info</a>
            <a href="#faq" className="footer-link">FAQ</a>
            <a href="/privacy" className="footer-link">Privacy</a>
            <button type="button" className="footer-link footer-link-button" onClick={() => window.dispatchEvent(new Event('lift:open-consent'))}>Cookie settings</button>
            <a href="https://discord.gg/robloxlift" target="_blank" rel="noopener noreferrer" className="footer-link">Discord ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© {currentYear} Lift</p>
          <p className="footer-disclaimer">
            Roblox is a separate platform. Lift is not affiliated with or endorsed by Roblox Corporation.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer