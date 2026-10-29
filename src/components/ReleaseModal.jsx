import React, { useEffect } from 'react'
import { PartyPopper, X } from 'lucide-react'
import './ReleaseModal.css'

const ReleaseModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      onClose()
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button 
          className="modal-close" 
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        
        <div className="modal-content">
          <div className="modal-icon">
            <PartyPopper size={40} />
          </div>
          <h2 id="modal-title" className="modal-title">GREAT NEWS!</h2>
          <p className="modal-release">RBXLift releases November 28!</p>
          <p className="modal-message">
            The wait is almost over. Join our Discord community to stay updated and get ready for launch!
          </p>
          <div className="modal-buttons">
            <a 
              href="https://discord.gg/robloxlift" 
              target="_blank" 
              rel="noopener noreferrer"
              className="modal-button modal-button-primary"
            >
              Join Discord
            </a>
            <button onClick={onClose} className="modal-button modal-button-secondary">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReleaseModal