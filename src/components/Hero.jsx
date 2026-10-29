import React from 'react'
import { Gamepad2 } from 'lucide-react'
import './Hero.css'

const Hero = ({ onPlayClick }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to RBXLift</h1>
          <p className="hero-subtitle">Your next Roblox adventure is almost here.</p>
          <p className="hero-description">
            Get ready for RBXLift. Join our community and be there when the game launches on November 28.
          </p>
          <div className="hero-buttons">
            <button onClick={onPlayClick} className="hero-button hero-button-primary">
              <Gamepad2 size={20} />
              Play on Roblox
            </button>
            <a 
              href="https://discord.gg/robloxlift" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-button hero-button-secondary"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero