import React from 'react'
import { Users } from 'lucide-react'
import './CommunitySection.css'

const CommunitySection = () => {
  return (
    <section className="community-section">
      <div className="community-container">
        <div className="community-icon">
          <Users size={32} />
        </div>
        <h2 className="community-title">Be Part of the Community</h2>
        <p className="community-description">
          Join the official Discord to connect with the community and keep up with RBXLift's release.
        </p>
        <a 
          href="https://discord.gg/robloxlift" 
          target="_blank" 
          rel="noopener noreferrer"
          className="community-button"
        >
          Join Discord
        </a>
      </div>
    </section>
  )
}

export default CommunitySection