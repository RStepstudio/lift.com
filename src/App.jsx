import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ReleaseSection from './components/ReleaseSection'
import CommunitySection from './components/CommunitySection'
import Footer from './components/Footer'
import CommunityPages from './components/CommunityPages'
import CookieNotice from './components/CookieNotice'
import './App.css'

const readConsent = () => {
  try {
    return JSON.parse(localStorage.getItem('lift-consent-v1') || 'null')
  } catch {
    return null
  }
}

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return readConsent()?.functional && localStorage.getItem('lift-theme') === 'dark' ? 'dark' : 'light'
    } catch {
      return 'light'
    }
  })
  const [canRememberTheme, setCanRememberTheme] = useState(() => Boolean(readConsent()?.functional))
  const isHome = window.location.pathname === '/'

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      if (canRememberTheme) {
        localStorage.setItem('lift-theme', theme)
      } else {
        localStorage.removeItem('lift-theme')
      }
    } catch {
      return
    }
  }, [theme, canRememberTheme])

  useEffect(() => {
    const handleConsentChange = (event) => setCanRememberTheme(Boolean(event.detail?.functional))
    window.addEventListener('lift:consent-change', handleConsentChange)
    return () => window.removeEventListener('lift:consent-change', handleConsentChange)
  }, [])

  return (
    <div className="app">
      <Navbar theme={theme} onThemeChange={setTheme} />
      {isHome ? (
        <>
          <main>
            <Hero />
            <ReleaseSection />
            <CommunitySection />
          </main>
          <Footer />
        </>
      ) : (
        <CommunityPages pathname={window.location.pathname} />
      )}
      <CookieNotice />
    </div>
  )
}

export default App