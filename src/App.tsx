import Footer from './components/footer'
import HeroSection from './components/herosection'
import Timeline from './components/timeline'
//import PastEvents from './components/PastEvents'
import './css/App.css'


function App() {
  return (
    <div className="app-main">
      <HeroSection />

      <Timeline />
      {/* <PastEvents /> */}
      <Footer />

      <section id="about" className="content-section">
        <h2>About CAD 4.0</h2>
        <p>Information about the event goes here.</p>
      </section>

      <section id="timeline" className="content-section">
        <h2>Timeline</h2>
        <p>Event schedule and milestones.</p>
      </section>

      <section id="sponsors" className="content-section">
        <h2>Our Sponsors</h2>
        <p>Thank you to our amazing sponsors.</p>
      </section>

      <section id="events" className="content-section">
        <h2>Past Events</h2>
        <p>Highlights from previous years.</p>
      </section>

      <section id="register" className="content-section">
        <h2>Registration</h2>
        <p>Sign up for CAD 4.0 now!</p>
      </section>
    </div>
  )
}

export default App
