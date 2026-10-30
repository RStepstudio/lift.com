import { useEffect, useState } from 'react'
import { Cookie, Settings2, X } from 'lucide-react'
import './CookieNotice.css'

const CONSENT_KEY = 'lift-consent-v1'

const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isManaging, setIsManaging] = useState(false)
  const [rememberTheme, setRememberTheme] = useState(false)

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(CONSENT_KEY) || 'null')
      setIsVisible(!saved)
      setRememberTheme(Boolean(saved?.functional))
    } catch {
      setIsVisible(false)
    }

    const openSettings = () => {
      setIsManaging(true)
      setIsVisible(true)
    }
    window.addEventListener('lift:open-consent', openSettings)
    return () => window.removeEventListener('lift:open-consent', openSettings)
  }, [])

  const saveConsent = (functional) => {
    setIsVisible(false)
    setIsManaging(false)
    setRememberTheme(functional)
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({
        essential: true,
        functional,
        savedAt: new Date().toISOString(),
      }))
    } catch {
      setIsVisible(true)
    }
    window.dispatchEvent(new CustomEvent('lift:consent-change', { detail: { functional } }))
  }

  if (!isVisible) return null

  return (
    <div className="consent-backdrop">
      <section className="cookie-notice" role="dialog" aria-modal="true" aria-labelledby="consent-title">
        <div className="consent-heading">
          <span className="consent-icon"><Cookie size={19} aria-hidden="true" /></span>
          <button type="button" className="consent-close" onClick={() => saveConsent(false)} aria-label="Use essential storage only and close">
            <X size={18} />
          </button>
          <p className="consent-eyebrow">PRIVACY / YOUR CHOICE</p>
          <h2 id="consent-title">Storage, on your terms.</h2>
          <p className="consent-intro">This site currently uses browser storage for essential consent and, only with your permission, to remember your theme. It does not use analytics or advertising trackers.</p>
        </div>
        {isManaging && (
          <div className="consent-options">
            <div className="consent-option">
              <div><strong>Essential</strong><p>Remembers your choice. Always active.</p></div>
              <span className="consent-required">ON</span>
            </div>
            <label className="consent-option consent-option-toggle">
              <span><strong>Remember my theme</strong><p>Saves light or dark mode on this device.</p></span>
              <input type="checkbox" checked={rememberTheme} onChange={(event) => setRememberTheme(event.target.checked)} />
            </label>
            <p className="consent-future-note">Forum sign-in is not enabled. If it is added, necessary session cookies and their purpose will be disclosed here.</p>
          </div>
        )}
        <div className="consent-actions">
          {isManaging ? (
            <>
              <button type="button" className="consent-primary" onClick={() => saveConsent(rememberTheme)}>Save choices</button>
              <button type="button" className="consent-secondary" onClick={() => saveConsent(false)}>Essential only</button>
            </>
          ) : (
            <>
              <button type="button" className="consent-primary" onClick={() => setIsManaging(true)}><Settings2 size={16} /> Manage choices</button>
              <button type="button" className="consent-secondary" onClick={() => saveConsent(false)}>Essential only</button>
            </>
          )}
        </div>
        <a className="consent-privacy-link" href="/privacy">Read the privacy details</a>
      </section>
    </div>
  )
}

export default CookieNotice