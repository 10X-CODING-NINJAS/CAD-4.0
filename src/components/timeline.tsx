import { useEffect, useRef } from 'react';
import '../css/timeline.css';

import cloud1 from '/assets/timeline/cloud1.png';
import cloud2 from '/assets/timeline/cloud2.png';
import pathImg from '/assets/timeline/path.png';
import ground from '/assets/timeline/ground.png';
import characters from '/assets/timeline/characters.png';

const Timeline = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = starsRef.current;
    if (!container || container.childElementCount > 0) return;
    for (let i = 0; i < 80; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      const size = Math.random() * 2 + 1 + 'px';
      star.style.width = size;
      star.style.height = size;
      const baseOpacity = Math.random() * 0.5 + 0.3;
      star.style.opacity = String(baseOpacity);
      star.style.setProperty('--star-base-opacity', String(baseOpacity));
      star.style.setProperty('--twinkle-duration', (Math.random() * 3 + 2) + 's');
      star.style.setProperty('--twinkle-delay', (Math.random() * 5) + 's');
      container.appendChild(star);
    }
  }, []);

  return (
    <div className="timeline">
      <div className="top-gradient"></div>
      <div className="stars-container" ref={starsRef}></div>

      <h1 className="title">TIMELINE</h1>

      <img src={cloud1} className="cloud cloud-left" alt="" />
      <img src={cloud2} className="cloud cloud-right" alt="" />
      <img src={cloud2} className="cloud cloud-top-left" alt="" />
      <img src={cloud1} className="cloud cloud-top-right" alt="" />
      <img src={cloud1} className="cloud cloud-mid-left" alt="" />
      <img src={cloud2} className="cloud cloud-mid-right" alt="" />
      <img src={pathImg} className="path-img" alt="" />
      <img src={ground} className="ground-img" alt="" />
      <img src={characters} className="characters-img" alt="" />

      <div className="node n1">
        <div className="card">
          <h3>INDUCTION STARTS</h3>
          <p>22 March 10AM</p>
        </div>
        <div className="dot"></div>
      </div>

      <div className="node n2">
        <div className="card">
          <h3>HACKATHON STARTS</h3>
          <p>22 March 2PM</p>
        </div>
        <div className="dot"></div>
      </div>

      <div className="node n3">
        <div className="card">
          <h3>FINAL REVIEW RESULT</h3>
          <p>23 March 10AM</p>
        </div>
        <div className="dot"></div>
      </div>

      <div className="node n4">
        <div className="card">
          <h3>CLOSING CEREMONY</h3>
          <p>23 March 3PM</p>
        </div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Timeline;
