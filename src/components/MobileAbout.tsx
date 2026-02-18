export default function MobileAbout() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: '100svh',
        background: 'linear-gradient(to bottom, #0c1027 0%, #14183a 100%)',
        fontFamily: "'League Spartan', sans-serif",
      }}
    >
      {/* Stars */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: 'url("/assets/About/about_stars.png")',
          backgroundRepeat: 'repeat',
          backgroundSize: '600px',
          opacity: 0.7,
        }}
      />

      {/* Purple glow — full page top to bottom */}
      <img
        src="/assets/About/about_bg.png"
        className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
        style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.85 }}
        alt=""
      />

      {/* ── TOWER — anchored to bottom, below fence ── */}
      <img
        src="/assets/About/building.png"
        className="absolute left-1/2 -translate-x-1/2 z-[3] pointer-events-none"
        style={{ bottom: '0', height: '82svh', width: 'auto', objectFit: 'contain' }}
        alt="Building"
      />

      {/* ── TITLE ── */}
      <h1
        className="absolute left-1/2 -translate-x-1/2 z-[5] text-center text-white whitespace-nowrap"
        style={{
          top: '3%',
          fontFamily: 'Gegola DEMO',
          fontSize: 'clamp(58px, 22vw, 96px)',
          fontWeight: 600,
          lineHeight: 1,
          letterSpacing: '0.02em',
        }}
      >
        ABOUT
      </h1>

      {/* ── LEFT TEXT ── */}
      <div
        className="absolute z-[5] text-white"
        style={{
          top: '18%',
          left: '3%',
          width: '44%',
          textAlign: 'left',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <p style={{ fontSize: 'clamp(9px, 2.8vw, 13px)', opacity: 0.9, lineHeight: 1.4 }}>
          This National Level Hackathon Is The Cornerstone Of An
        </p>
        <p style={{ fontSize: 'clamp(11px, 3.4vw, 15px)', color: '#cdb9ff', fontWeight: 700, lineHeight: 1.3 }}>
          Immersive Fest, Blending Technical
        </p>
        <p style={{ fontSize: 'clamp(9px, 2.8vw, 13px)', opacity: 0.9, lineHeight: 1.4 }}>
          prowess with engaging non-technical activities.
        </p>
      </div>

      {/* ── RIGHT TEXT ── */}
      <div
        className="absolute z-[5] text-white"
        style={{
          top: '18%',
          right: '3%',
          width: '44%',
          textAlign: 'left',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <p style={{ fontSize: 'clamp(9px, 2.8vw, 13px)', opacity: 0.9, lineHeight: 1.4 }}>
          Embark On A
        </p>
        <p style={{ fontSize: 'clamp(11px, 3.4vw, 15px)', color: '#cdb9ff', fontWeight: 700, lineHeight: 1.3 }}>
          Coding Odyssey
        </p>
        <p style={{ fontSize: 'clamp(9px, 2.8vw, 13px)', opacity: 0.9, lineHeight: 1.4 }}>
          With CN SRM As We Proudly Present Our Flagship Event
        </p>
      </div>

      {/* ── REGISTER BUTTON ── */}
      <div className="absolute left-1/2 -translate-x-1/2 z-[6]" style={{ bottom: '27%' }}>
        <button
          className="px-9 py-[7px] rounded-full font-bold tracking-widest uppercase"
          style={{
            background: '#e8e8e8',
            color: '#111',
            fontSize: 'clamp(11px, 3.5vw, 14px)',
            letterSpacing: '0.12em',
            boxShadow: '0 0 16px rgba(255,255,255,0.25)',
            whiteSpace: 'nowrap',
          }}
        >
          REGISTER
        </button>
      </div>

      {/* ── GARDEN (fence + grass) ── */}
      <img
        src="/assets/About/garden.png"
        className="absolute left-0 w-full pointer-events-none z-[6]"
        style={{ bottom: '-2%', objectFit: 'cover', transform: 'scale(1.15)', transformOrigin: 'bottom center' }}
        alt="Garden"
      />

      {/* ── GARDEN CHARACTERS (baked-in phineas + ferb above fence) ── */}
      <img
        src="/assets/About/garden_char.png"
        className="absolute left-0 w-full pointer-events-none z-[7]"
        style={{ bottom: '-2%', objectFit: 'cover', transform: 'scale(1.15)', transformOrigin: 'bottom center' }}
        alt=""
      />


    </section>
  );
}
