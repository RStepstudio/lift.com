import React from 'react'
import './ReleaseSection.css'

const ReleaseSection = () => {
  return (
    <section className="release-section">
      <div className="release-container">
        <h2 className="release-title">RBXLift releases November 28</h2>
        <p className="release-description">
          The wait is almost over. Join our Discord community to stay informed about the launch.
        </p>
        <a 
          href="https://discord.gg/robloxlift" 
          target="_blank" 
          rel="noopener noreferrer"
          className="release-button"
        >
          Join Discord
        </a>
      </div>
    </section>
  )
}

export default ReleaseSection