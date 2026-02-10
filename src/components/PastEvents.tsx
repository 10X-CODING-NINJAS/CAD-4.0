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
        className="absolute inset-0 w-full h-full object-contain"
        alt="Background overlay"
        src="/assets/PastEvents/bg.png"
      />

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
            fontSize: 'clamp(32px, 5vw, 200px)',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal'
          }}
        >
          Past Events
        </h1>

        {/* Subtitle */}
        <div className="absolute top-[80px] xs:top-[95px] sm:top-[12vh] md:top-[13vh] lg:top-[14vh] xl:top-[16vh] left-1/2 -translate-x-1/2 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-[11px] xs:text-[13px] sm:text-[clamp(13px,1.2vw,20px)] tracking-[-0.40px] leading-tight whitespace-nowrap">
          <span className="font-light italic text-white tracking-[-0.16px]">
            Turn To{" "}
          </span>
          <span className="font-light italic text-[#9ef43c] text-[13px] xs:text-[15px] sm:text-[clamp(15px,1.4vw,23px)] tracking-[-0.21px]">
            Access
          </span>
        </div>

        {/* Left Character - Red/Dark Alien */}
        <div className="absolute top-[70px] xs:top-[80px] sm:top-[8vh] md:top-[9vh] lg:top-[10vh] xl:top-[11vh] left-[-30px] xs:left-[-35px] sm:left-[-2.5vw] md:left-[-2.8vw] lg:left-[-3vw] xl:left-[-3.2vw] w-[120px] xs:w-[140px] sm:w-[clamp(140px,20vw,549px)] h-auto z-10">
          <img
            className="absolute top-0 left-[8px] xs:left-[10px] sm:left-[18px] md:left-[25px] lg:left-[30px] xl:left-[34px] w-full h-auto object-cover"
            alt="Left character"
            src="/assets/PastEvents/60acf5171e361641318f536072564c1e-1.png"
          />
          <img
            className="absolute top-px left-[8px] xs:left-[10px] sm:left-[18px] md:left-[25px] lg:left-[30px] xl:left-[34px] w-full h-auto"
            alt="Left character overlay"
            src="/assets/PastEvents/group-10121.png"
          />
        </div>

        {/* Center Watch Display */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] xs:w-[320px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[665px] h-auto z-20">
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
            className="absolute left-[10%] top-[52%] w-[8%] h-auto cursor-pointer z-30 hover:scale-110 active:scale-95 transition-transform"
            style={{ pointerEvents: isRotating ? 'none' : 'auto' }}
          />
          
          {/* Right Arrow Image - Clickable */}
          <img
            src="/assets/PastEvents/right.png"
            alt="Next"
            onClick={!isRotating ? handleNext : undefined}
            className="absolute right-[10%] top-[52%] w-[8%] h-auto cursor-pointer z-30 hover:scale-110 active:scale-95 transition-transform"
            style={{ pointerEvents: isRotating ? 'none' : 'auto' }}
          />
        </div>

        {/* Right Character - Yellow/Orange Alien */}
        <div className="absolute bottom-[120px] xs:bottom-[140px] sm:bottom-[16vh] md:bottom-[18vh] lg:bottom-[20vh] xl:bottom-[22vh] right-[-30px] xs:right-[-35px] sm:right-[-2.5vw] md:right-[-2.8vw] lg:right-[-3vw] xl:right-[-30vw] w-[120px] xs:w-[140px] sm:w-[clamp(140px,21vw,643px)] h-auto rotate-[-7.42deg] z-10">
          <img
            className="absolute top-[-5px] xs:top-[-6px] sm:top-[-11px] md:top-[-16px] lg:top-[-23px] xl:top-[-26px] left-[-5px] xs:left-[-6px] sm:left-[-9px] md:left-[-13px] lg:left-[-15px] xl:left-[-17px] w-full h-auto rotate-[7.42deg] object-cover"
            alt="Right character"
            src="/assets/PastEvents/cf8dfd9acc107c283954140a1c6e904e-1.png"
          />
          <img
            className="absolute top-[-5px] xs:top-[-8px] sm:top-[-11px] md:top-[-16px] lg:top-[-23px] xl:top-[-26px] left-[-5px] xs:left-[-6px] sm:left-[-9px] md:left-[-13px] lg:left-[-15px] xl:left-[-17px] w-full h-auto rotate-[7.42deg]"
            alt="Right character mask"
            src="/assets/PastEvents/mask-group.png"
          />
        </div>

        {/* Small Alien Icon - Left Bottom Side of Watch */}
        <img
          className="absolute bottom-[40px] xs:bottom-[50px] sm:bottom-[5vh] md:bottom-[5.5vh] lg:bottom-[6vh] xl:bottom-[7vh] left-[50%] -translate-x-[180px] xs:-translate-x-[200px] sm:-translate-x-[clamp(200px,20vw,280px)] w-[38px] xs:w-[44px] sm:w-[clamp(44px,5vw,102px)] h-auto object-cover z-30 drop-shadow-lg"
          alt="Alien character"
          src="/assets/PastEvents/alien.png"
        />

        {/* Turn Knobs Controls - Bottom */}
      
      </div>
    </main>
  );
};
