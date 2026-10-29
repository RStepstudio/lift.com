import React from 'react'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import './CommunitySection.css'

const CommunitySection = () => {
  return (
    <section id="community" className="community-section" aria-labelledby="community-title">
      <div className="community-container">
        <div className="community-icon" aria-hidden="true">
          <MessageCircle size={23} />
        </div>
        <p className="section-index">THE OFFICIAL COMMUNITY</p>
        <h2 id="community-title" className="community-title">Stay in the loop.</h2>
        <p className="community-description">
          One place for real updates, launch news, and the people waiting for the next stop.
        </p>
        <a href="https://discord.gg/robloxlift" target="_blank" rel="noopener noreferrer" className="community-button">
          Join RBXLift on Discord <ArrowUpRight size={18} aria-hidden="true" />
        </a>
        <span className="community-url">discord.gg/robloxlift</span>
      </div>
    </section>
  )
}

export default CommunitySection