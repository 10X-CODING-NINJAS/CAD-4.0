import React from 'react';
import './PastEvents.css';

const events = [
  { id: 'cq3', img: '/cq 3.0.png', alt: 'CQ 3.0' },
  { id: 'cad3', img: '/cad 3.0.png', alt: 'CAD 3.0' },
  { id: 'cq4', img: '/cq 4.0.png', alt: 'CQ 4.0' }
];

const PastEvents: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(1); // Start at CAD 3.0
  const wildmuttVideoRef = React.useRef<HTMLVideoElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const handleWildmuttTimeUpdate = () => {
    if (wildmuttVideoRef.current && wildmuttVideoRef.current.currentTime >= 2.75) {
      wildmuttVideoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="past-events-wrapper" data-name="PastEvents">
      {/* Background Layer */}
      <div className="background-layer">
        <img
          src="/background.png"
          alt="Background"
          className="background-image"
        />
        <img
          src="/bg.png"
          alt="Background Base"
          className="background-image-base"
        />
        <div className="vignette-overlay"></div>
      </div>

      {/* Bubbles effect overlay */}
      <div className="particles-overlay">
        {[...Array(15)].map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="bubble"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: Math.random() * 0.4
            }}
          />
        ))}
      </div>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Title Area */}
        <header className="header-content">
          <h1 className="title-text">Past Events</h1>
          <p className="subtitle-text">
            Turn To <span className="highlight">Access</span>
          </p>
        </header>

        {/* Display Center Container */}
        <div className="display-center">
          {/* Main Card */}
          <div className="card-container">
            <div className="card-glow"></div>
            <img
              src={events[currentIndex].img}
              alt={events[currentIndex].alt}
              className="event-card-img"
            />
          </div>

          {/* Platform and Controls */}
          <div className="platform-section">
            <div className="platform-controls">
              <button className="nav-btn left" onClick={handlePrev}>
                <img src="/turn knob left.svg" alt="Previous" />
              </button>

              <div className="platform-anchor">
                <div className="platform-glow"></div>
                <img
                  src="/watch.png"
                  alt="Omnitrix Platform"
                  className="platform-base-img"
                />
              </div>

              <button className="nav-btn right" onClick={handleNext}>
                <img src="/turn knob right.svg" alt="Next" />
              </button>
            </div>
          </div>
        </div>

        <div className="side-character character-left">
          <div className="character-card">
            <video
              src="/animations/character-animation.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="character-video"
            />
          </div>
        </div>
        <div className="side-character character-right">
          <div className="character-card character-card-right">
            <video
              ref={wildmuttVideoRef}
              src="/animations/wildmutt-animation.mp4"
              autoPlay
              muted
              playsInline
              onTimeUpdate={handleWildmuttTimeUpdate}
              className="character-video wildmutt-video"
            />
          </div>
        </div>
      </main>

      {/* Fog/Mist Overlay at bottom */}
      <div className="bottom-fog"></div>
    </div>
  );
};

export default PastEvents;
