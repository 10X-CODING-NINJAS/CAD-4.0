import { useEffect, useRef } from 'react';

const timelineEvents = [
  { label: 'INDUCTION STARTS',   time: '22 March 10AM' },
  { label: 'HACKATHON STARTS',   time: '22 March 2PM'  },
  { label: 'FINAL REVIEW RESULT', time: '23 March 10AM' },
  { label: 'CLOSING CEREMONY',   time: '23 March 3PM'  },
];

export default function MobileTimeline() {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = starsRef.current;
    if (!container || container.childElementCount > 0) return;
    for (let i = 0; i < 60; i++) {
      const star = document.createElement('div');
      star.style.cssText = `
        position:absolute;
        border-radius:50%;
        background:white;
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        width:${Math.random() * 2 + 1}px;
        height:${Math.random() * 2 + 1}px;
        opacity:${Math.random() * 0.6 + 0.2};
      `;
      container.appendChild(star);
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#050510] overflow-hidden flex flex-col items-center pb-10">

      {/* Stars */}
      <div ref={starsRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Top gradient */}
      <div className="absolute top-0 left-0 w-full h-[120px] pointer-events-none z-[1]"
        style={{ background: 'linear-gradient(to bottom, #050510, transparent)' }}
      />

      {/* Clouds */}
      <img src="/assets/timeline/cloud1.png" className="absolute top-[5%] left-[-5%] w-[55%] opacity-40 pointer-events-none z-[1]" alt="" />
      <img src="/assets/timeline/cloud2.png" className="absolute top-[5%] right-[-5%] w-[55%] opacity-40 pointer-events-none z-[1]" alt="" />
      <img src="/assets/timeline/cloud1.png" className="absolute top-[35%] left-[-8%] w-[45%] opacity-25 pointer-events-none z-[1]" alt="" />
      <img src="/assets/timeline/cloud2.png" className="absolute top-[35%] right-[-8%] w-[45%] opacity-25 pointer-events-none z-[1]" alt="" />

      {/* Title */}
      <h1
        className="relative z-10 mt-10 text-white text-center"
        style={{
          fontFamily: 'Gegola DEMO',
          fontSize: 'clamp(52px, 18vw, 90px)',
          textShadow: '0 0 30px #22d3ee, 0 0 60px #0891b2',
          letterSpacing: '0.05em',
        }}
      >
        TIMELINE
      </h1>

      {/* Vertical timeline */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-xs mt-8 px-4">

        {/* Vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]"
          style={{ background: 'linear-gradient(to bottom, #22d3ee, #0891b2, #22d3ee)' }}
        />

        {timelineEvents.map((event, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`relative flex w-full mb-10 ${isLeft ? 'justify-start pr-[52%]' : 'justify-end pl-[52%]'}`}
            >
              {/* Card */}
              <div
                className="bg-white/5 border border-cyan-400/30 rounded-xl p-3 text-center backdrop-blur-sm w-full"
                style={{ boxShadow: '0 0 12px rgba(34,211,238,0.15)' }}
              >
                <h3 className="text-cyan-300 font-bold text-[12px] leading-tight tracking-wide">
                  {event.label}
                </h3>
                <p className="text-white/70 text-[11px] mt-1">{event.time}</p>
              </div>

              {/* Dot on the line */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-cyan-400 bg-[#050510] z-10"
                style={{ boxShadow: '0 0 8px #22d3ee' }}
              />
            </div>
          );
        })}
      </div>

      {/* Characters */}
      <img
        src="/assets/timeline/characters.png"
        className="relative z-10 w-[90%] max-w-sm object-contain mt-2"
        alt="Characters"
      />

      {/* Ground */}
      <img
        src="/assets/timeline/ground.png"
        className="w-full object-cover relative z-10 mt-[-10px]"
        alt="Ground"
      />
    </section>
  );
}
