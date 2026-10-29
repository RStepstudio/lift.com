import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">RBXLift</span>
          </div>
          <div className="footer-links">
            <a href="#launch" className="footer-link">Launch info</a>
            <a href="#faq" className="footer-link">FAQ</a>
            <a href="https://discord.gg/robloxlift" target="_blank" rel="noopener noreferrer" className="footer-link">Discord ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© {currentYear} RBXLift</p>
          <p className="footer-disclaimer">
            Roblox is a separate platform and RBXLift is not officially affiliated with or endorsed by Roblox Corporation.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer