import React from 'react'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="eyebrow"><span className="eyebrow-mark" /> Official Roblox experience</p>
          <h1 className="hero-title">RBX<span>Lift</span></h1>
          <p className="hero-subtitle">Your next stop starts here.</p>
          <p className="hero-description">Follow the official community for verified release news and updates from the RBXLift team.</p>
          <div className="hero-buttons">
            <a
              href="https://discord.gg/robloxlift"
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-button hero-button-primary"
            >
              Join the Discord <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href="#launch" className="hero-text-link">Explore launch info <ArrowDownRight size={17} aria-hidden="true" /></a>
          </div>
          <p className="hero-note"><span className="status-dot" /> Launch announcements are shared on Discord</p>
        </div>
        <div className="hero-art" aria-label="RBXLift launch status graphic" role="img">
          <div className="art-topline"><span>RBXLIFT / OFFICIAL</span><span>NO. 001</span></div>
          <div className="lift-frame">
            <div className="lift-door lift-door-left" />
            <div className="lift-door lift-door-right" />
            <div className="lift-sign"><span>R</span><span className="lift-sign-rule" /><span>L</span></div>
            <div className="lift-indicator"><span className="indicator-arrow">↑</span><span>READY</span></div>
          </div>
          <div className="art-bottomline"><span>THE NEXT STOP</span><span>IS YOURS <ArrowUpRight size={15} /></span></div>
        </div>
      </div>
    </section>
  )
}

export default Hero