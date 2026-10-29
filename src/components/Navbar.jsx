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
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          RBXLift
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
            <a href="#home" className="nav-link" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="https://discord.gg/robloxlift" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link"
              onClick={closeMenu}
            >
              Discord
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
              Join Discord
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar