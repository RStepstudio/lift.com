import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import './ReleaseSection.css'

const ReleaseSection = () => {
  return (
    <section id="launch" className="release-section" aria-labelledby="release-title">
      <div className="release-container">
        <div className="release-heading">
          <p className="section-index">01 / Launch information</p>
          <h2 id="release-title" className="release-title">The details, straight from the source.</h2>
          <p className="release-description">Release timing and launch announcements can change. Check the official Discord for the latest confirmed information.</p>
        </div>
        <dl className="release-facts">
          <div className="release-fact"><dt>Platform</dt><dd>Roblox</dd></div>
          <div className="release-fact"><dt>Release updates</dt><dd>Official Discord</dd></div>
          <div className="release-fact"><dt>Game access</dt><dd>Availability announced by the team</dd></div>
        </dl>
        <div id="faq" className="faq-section" aria-labelledby="faq-title">
          <p className="section-index">02 / Quick answers</p>
          <h2 id="faq-title">Lift, at a glance.</h2>
          <div className="faq-list">
            <div className="faq-item"><h3>What is Lift?</h3><p>Lift is a Roblox experience. Follow its official Discord for announcements from the team.</p></div>
            <div className="faq-item"><h3>Where can I find release news?</h3><p>The official Discord is the source for confirmed release timing, launch updates, and game access news.</p></div>
            <div className="faq-item"><h3>Where will Lift be available?</h3><p>Lift is being made for Roblox. Check the official community for access details.</p></div>
          </div>
          <a className="release-link" href="https://discord.gg/robloxlift" target="_blank" rel="noopener noreferrer">Visit the official Discord <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}

export default ReleaseSection