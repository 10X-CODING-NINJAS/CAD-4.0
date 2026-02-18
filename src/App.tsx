import Footer from './components/footer'
import HeroSection from './components/herosection'
import Timeline from './components/timeline'
import MobileTimeline from './components/MobileTimeline'
import { PastEvents } from './components/PastEvents'
import './css/App.css'
import { SponsorPage } from './components/SponsorPage'
import Prize from './components/Prize'
import About from './components/about'
import MobileAbout from './components/MobileAbout'


function App() {
  return (
    <div className="app-main">
      <section id="home">
        <HeroSection />
      </section>

      {/* About — mobile version below md, desktop version md and above */}
      <section id="about" className="content-section">
        <div className="block md:hidden">
          <MobileAbout />
        </div>
        <div className="hidden md:block">
          <About />
        </div>
      </section>

      {/* Timeline — mobile version below md, desktop version md and above */}
      <section id="timeline">
        <div className="block md:hidden">
          <MobileTimeline />
        </div>
        <div className="hidden md:block">
          <Timeline />
        </div>
      </section>

      <section id="prize">
        <Prize />
      </section>
      <section id="sponsors" className="content-section">
        <SponsorPage />
      </section>

      <section id="events">
        <PastEvents />
      </section>
      <Footer />
    </div>
  )
}

export default App
