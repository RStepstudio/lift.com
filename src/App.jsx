import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ReleaseSection from './components/ReleaseSection'
import CommunitySection from './components/CommunitySection'
import Footer from './components/Footer'
import ReleaseModal from './components/ReleaseModal'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero onPlayClick={openModal} />
        <ReleaseSection />
        <CommunitySection />
      </main>
      <Footer />
      <ReleaseModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default App