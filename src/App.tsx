import Footer from './components/footer'
import HeroSection from './components/herosection'
import Timeline from './components/timeline'
import { PastEvents } from './components/PastEvents'
import './css/App.css'
import { SponsorPage } from './components/SponsorPage'
import Prize from './components/Prize'
import About from './components/about'


function App() {
  return (
    <div className="app-main">
      <section id="home">
        <HeroSection />
      </section>

      <section id="about" className="content-section">
        <About />
      </section>

      <section id="timeline">
        <Timeline />
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
