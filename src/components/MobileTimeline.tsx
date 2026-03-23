import { useEffect, useRef } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const timelineEvents = [
  { label: 'INDUCTION STARTS', time: '22 March 10AM' },
  { label: 'HACKATHON STARTS', time: '22 March 2PM' },
  { label: 'FINAL REVIEW RESULT', time: '23 March 10AM' },
  { label: 'CLOSING CEREMONY', time: '23 March 3PM' },
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
    <section className="relative w-full min-h-screen bg-[#050510] overflow-hidden flex flex-col items-center">
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
        className="relative z-10 mt-8 sm:mt-10 text-white text-center px-4"
        style={{
          fontFamily: 'Gegola DEMO',
          fontSize: 'clamp(40px, 15vw, 70px)',
          textShadow: '0 0 25px #22d3ee, 0 0 50px #0891b2',
          letterSpacing: '0.05em',
        }}
      >
        TIMELINE
      </h1>

      {/* MUI Timeline */}
      <div className="relative z-10 w-full max-w-md mt-4 mb-auto">
        <Timeline position="alternate">
          {timelineEvents.map((event, index) => (
            <TimelineItem
              key={index}
              sx={{
                minHeight: { xs: '120px', sm: '140px' },
                mb: 2
              }}
            >
              <TimelineOppositeContent
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: { xs: '0.7rem', sm: '0.8rem' },
                  fontWeight: 400,
                  py: 2,
                  px: 1
                }}
              >
                {event.time}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: '#22d3ee',
                    boxShadow: '0 0 10px #22d3ee',
                    width: { xs: 10, sm: 12 },
                    height: { xs: 10, sm: 12 }
                  }}
                />
                {index < timelineEvents.length - 1 && (
                  <TimelineConnector
                    sx={{
                      bgcolor: 'rgba(34, 211, 238, 0.5)',
                      width: 2,
                      boxShadow: '0 0 5px rgba(34, 211, 238, 0.3)',
                      minHeight: '60px'
                    }}
                  />
                )}
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  color: 'white',
                  fontSize: { xs: '0.75rem', sm: '0.85rem' },
                  fontWeight: 'bold',
                  py: 2,
                  px: 1,
                  bgcolor: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(34, 211, 238, 0.3)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 0 10px rgba(34, 211, 238, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  minHeight: { xs: '50px', sm: '60px' },
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    border: '1px solid rgba(34, 211, 238, 0.6)',
                    boxShadow: '0 0 20px rgba(34, 211, 238, 0.6), 0 0 30px rgba(34, 211, 238, 0.4)'
                  }
                }}
              >
                {event.label}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>

      {/* Ground */}
      <img
        src="/assets/timeline/garden.svg"
        className="absolute bottom-0 w-full object-cover z-10"
        alt="Ground"
      />

      {/* Characters */}
      <img
        src="/assets/timeline/characters.png"
        className="absolute bottom-0 z-20 w-[80%] sm:w-[70%] max-w-[300px] object-contain mb-2"
        alt="Characters"
      />
    </section>
  );
}
