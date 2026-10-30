import React, { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import './Navbar.css'

const Navbar = ({ theme, onThemeChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="nav-logo" onClick={closeMenu} aria-label="Lift home">
          <span className="nav-symbol" aria-hidden="true">L</span>
          <span>Lift</span>
        </a>
        
        <button 
          className="nav-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-controls="site-navigation"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul id="site-navigation" className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/forums" className="nav-link" onClick={closeMenu}>Forums</a>
          </li>
          <li className="nav-item">
            <a href="/articles/lift" className="nav-link" onClick={closeMenu}>Game guide</a>
          </li>
          <li className="nav-item">
            <a 
              href="https://discord.gg/robloxlift" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-button"
              onClick={closeMenu}
            >
              Join Discord <span aria-hidden="true">↗</span>
            </a>
          </li>
          <li className="nav-item nav-theme-item">
            <button
              className={`theme-toggle ${theme === 'dark' ? 'is-dark' : ''}`}
              type="button"
              role="switch"
              aria-checked={theme === 'dark'}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
            >
              <span className="theme-toggle-icon" aria-hidden="true">
                {theme === 'dark' ? <Moon size={15} /> : <Sun size={15} />}
              </span>
              <span className="theme-toggle-track"><span className="theme-toggle-thumb" /></span>
              <span className="theme-toggle-label">{theme === 'dark' ? 'Dark' : 'Light'}</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar