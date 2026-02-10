import "../css/about.css";

export default function About() {
  return (
    <section className="about-wrapper">
      <section className="about">

        {/* BACKGROUND LAYERS */}
        <div className="stars" />
        <img src="/assets/About/about_bg.png" className="purple-glow" />

        {/* TITLE */}
        <h1 className="title">ABOUT</h1>

        {/* TOWER */}
        <img src="/assets/About/building.png" className="tower" />

        {/* TEXT BLOCKS */}
        <div className="text left">
          <p className="small">
            This National Level Hackathon Is The Cornerstone Of An
          </p>
          <p className="highlight">Immersive Fest, Blending Technical</p>
          <p className="small">
            prowess with engaging non-technical activities.
          </p>
        </div>

        <div className="text right">
          <p className="small">Embark On A</p>
          <p className="highlight">Coding Odyssey</p>
          <p className="small">
            With CN SRM As We Proudly Present Our Flagship Event
          </p>
        </div>

        {/* REGISTER BUTTON */}
        <button className="register">REGISTER</button>

        {/* FOREGROUND */}
        <img src="/assets/About/garden.png" className="garden" />

        {/* CHARACTERS */}
        <img src="/assets/About/phineas.png" className="char phineas" />
        <img src="/assets/About/perry.png" className="char perry" />
        <img src="/assets/About/ferb.png" className="char ferb" />

      </section>
    </section>
  );
}

