import React, { useEffect } from "react";
import "./timeline.css";

const Timeline = () => {

useEffect(() => {
const container = document.querySelector('.stars-container');
if (!container) return;

```
for (let i = 0; i < 60; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';

  const size = Math.random() * 2 + 1 + 'px';
  star.style.width = size;
  star.style.height = size;
  star.style.opacity = (Math.random() * 0.5 + 0.3).toString();

  container.appendChild(star);
}
```

}, []);

return ( <div className="timeline"> <div className="top-gradient"></div> <div className="stars-container"></div>

```
  <h1 className="title">TIMELINE</h1>

  <img src="/assets/cloud1.png" className="cloud left" />
  <img src="/assets/cloud2.png" className="cloud right" />
  <img src="/assets/path.png" className="path" />
  <img src="/assets/ground.png" className="ground" />
  <img src="/assets/characters.png" className="characters" />

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
```

);
};

export default Timeline;
