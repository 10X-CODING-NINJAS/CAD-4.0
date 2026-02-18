import { useState } from "react";
export const PastEvents = (): JSX.Element => {
  const [currentWatchIndex, setCurrentWatchIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [rotationDirection, setRotationDirection] = useState(1); // 1 for next, -1 for prev
  
  // Array of watch screen images - add more images here
  const watchScreenImages = [
    
    "/assets/PastEvents/watch2.png",
    "/assets/PastEvents/watch3.png",
    "/assets/PastEvents/watch4.png",
  ];

  const handlePrevious = () => {
    if (isRotating) return;
    setRotationDirection(-1);
    setIsRotating(true);
    setTimeout(() => {
      setCurrentWatchIndex((prev) => (prev === 0 ? watchScreenImages.length - 1 : prev - 1));
      setIsRotating(false);
    }, 400);
  };

  const handleNext = () => {
    if (isRotating) return;
    setRotationDirection(1);
    setIsRotating(true);
    setTimeout(() => {
      setCurrentWatchIndex((prev) => (prev === watchScreenImages.length - 1 ? 0 : prev + 1));
      setIsRotating(false);
    }, 400);
  };

  return (
    <main className="relative w-full h-screen bg-[#131313] overflow-hidden flex items-center justify-center">
      {/* Background Images */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Gemini generated background"
        src="/assets/PastEvents/PastEvents bg.png"
      />

      <img
        className="absolute bottom-0 left-0 w-full h-[42vh] sm:h-[45vh] md:h-[50vh] object-fill opacity-50 pointer-events-none z-[2]"
        alt="Background overlay"
        src="/assets/PastEvents/bg.png"
      />

      {/* Black gradient from bottom of watch to page end */}
      <div className="absolute bottom-0 left-0 w-full h-[52%] pointer-events-none z-[8]" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.85) 65%, #000 100%)' }} />

      <div className="absolute top-0 left-0 w-full h-[20px] sm:h-[25px] md:h-[31px] pointer-events-none z-0">
        <img className="w-full h-full object-cover" alt="Top overlay" src="/assets/PastEvents/overlay.svg" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-1 sm:px-2 overflow-hidden">
        
        {/* Title */}
        <h1 
          className="absolute top-[5px] xs:top-[8px] sm:top-[1.5vh] md:top-[1.8vh] lg:top-[2vh] xl:top-[2.5vh] left-1/2 -translate-x-1/2 whitespace-nowrap text-center max-w-[95vw]"
          style={{
            color: '#FFF',
            textShadow: '0 0 30px #91CE00',
            fontFamily: 'Gegola DEMO',
            fontSize: 'clamp(40px, 11vw, 85px)',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal'
          }}
        >
          Past Events
        </h1>

        {/* Subtitle */}
        <div className="absolute top-[80px] xs:top-[95px] sm:top-[110px] md:top-[88px] lg:top-[92px] xl:top-[96px] left-1/2 -translate-x-1/2 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-[15px] xs:text-[16px] sm:text-[clamp(14px,1.2vw,20px)] tracking-[-0.40px] leading-tight whitespace-nowrap">
          <span className="font-light italic text-white tracking-[-0.16px]">
            Turn To{" "}
          </span>
          <span className="font-light italic text-[#9ef43c] text-[16px] xs:text-[18px] sm:text-[clamp(16px,1.4vw,23px)] tracking-[-0.21px]">
            Access
          </span>
        </div>

        {/* Left Character - Red/Dark Alien */}
        <div className="absolute bottom-0 left-[-20px] xs:left-[-25px] sm:left-[-2vw] md:left-[-2.5vw] lg:left-[-3vw] xl:left-[-3.2vw] w-[42vw] xs:w-[38vw] sm:w-[clamp(155px,20vw,549px)] h-auto z-[25]">
          <img
            className="relative w-full h-auto object-cover pl-[8px] xs:pl-[10px] sm:pl-[18px] md:pl-[25px] lg:pl-[30px] xl:pl-[34px]"
            alt="Left character"
            src="/assets/PastEvents/fourarms.png"
          />
          
        </div>

        {/* Center Watch Display */}
        <div className="absolute top-[44%] -translate-y-1/2 md:top-auto md:translate-y-0 md:bottom-0 left-1/2 -translate-x-1/2 w-[105vw] xs:w-[100vw] sm:w-[80vw] md:w-[540px] lg:w-[620px] xl:w-[665px] h-auto z-20">
          {/* Watch Base - Static */}
          <img 
            className="w-full h-auto drop-shadow-[0_0_15px_rgba(144,205,0,0.3)]"
            alt="Watch display" 
            src="/assets/PastEvents/watch.png"
          />
          
          {/* Watch Screen Content - Rotating */}
          <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[42%] h-[35%]" style={{ perspective: '1000px' }}>
            <img 
              className={`w-full h-full object-contain transition-all duration-700`}
              alt="Watch screen content" 
              src={watchScreenImages[currentWatchIndex]}
              key={currentWatchIndex}
              style={{
                transform: isRotating ? `rotateY(${180 * rotationDirection}deg)` : 'rotateY(0deg)',
                transformStyle: 'preserve-3d',
              }}
            />
          </div>
          
          {/* Left Arrow Image - Clickable */}
          <img
            src="/assets/PastEvents/left.png"
            alt="Previous"
            onClick={!isRotating ? handlePrevious : undefined}
            className="absolute left-[10%] top-[52%] w-[5%] md:w-[8%] h-auto cursor-pointer z-30 hover:scale-110 active:scale-95 transition-transform"
            style={{ pointerEvents: isRotating ? 'none' : 'auto' }}
          />
          
          {/* Right Arrow Image - Clickable */}
          <img
            src="/assets/PastEvents/right.png"
            alt="Next"
            onClick={!isRotating ? handleNext : undefined}
            className="absolute right-[10%] top-[52%] w-[5%] md:w-[8%] h-auto cursor-pointer z-30 hover:scale-110 active:scale-95 transition-transform"
            style={{ pointerEvents: isRotating ? 'none' : 'auto' }}
          />

          {/* Small Alien Icon - anchored to bottom-left of watch */}
          <img
            className="absolute bottom-[6%] left-[5%] w-[17%] h-auto object-cover z-30 drop-shadow-lg"
            alt="Alien character"
            src="/assets/PastEvents/alien.png"
          />
        </div>

        {/* Right Character - Yellow/Orange Alien */}
        <div className="absolute bottom-0 right-[-20px] xs:right-[-25px] sm:right-[-2vw] md:right-[-2.5vw] lg:right-[-3vw] xl:right-[-3.5vw] w-[42vw] xs:w-[38vw] sm:w-[clamp(155px,21vw,643px)] h-auto rotate-[-7.42deg] z-[25]">
          <img
            className="relative w-full h-auto rotate-[7.42deg] object-cover"
            alt="Right character"
            src="/assets/PastEvents/wildmutt.png"
          />
         
        </div>



        {/* Turn Knobs Controls - Bottom */}
      
      </div>
    </main>
  );
};
