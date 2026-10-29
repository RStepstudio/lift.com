import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const Navbar = () => {
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
        <a href="#home" className="nav-logo" onClick={closeMenu} aria-label="RBXLift home">
          <span className="nav-symbol" aria-hidden="true">R</span>
          <span>RBXLift</span>
        </a>
        
        <button 
          className="nav-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#launch" className="nav-link" onClick={closeMenu}>
              Launch info
            </a>
          </li>
          <li className="nav-item">
            <a href="#faq" className="nav-link" onClick={closeMenu}>
              FAQ
            </a>
          </li>
          <li className="nav-item">
            <a href="#community" className="nav-link" onClick={closeMenu}>
              Community
            </a>
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
        </ul>
      </div>
    </nav>
  )
}

export default Navbar