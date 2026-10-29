import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ReleaseSection from './components/ReleaseSection'
import CommunitySection from './components/CommunitySection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <ReleaseSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  )
}

export default App