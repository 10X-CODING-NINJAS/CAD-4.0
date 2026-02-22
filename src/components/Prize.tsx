import { useState, useEffect, useRef } from 'react';

export default function Index() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const targetPrize = 150000;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          startAnimation();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const startAnimation = () => {
    setHasAnimated(true);
    let startTime: number | null = null;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuad = (t: number) => t * (2 - t);
      const currentCount = Math.floor(easeOutQuad(progress) * targetPrize);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div ref={sectionRef} className="relative w-full min-h-screen bg-[#131313] overflow-hidden flex flex-col items-center pt-20">
      {/* Background starry effect */}
      <div className="absolute inset-0 opacity-24 z-0">
        <img
          src="/assets/prize/prize pool bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Grass background at bottom */}
      <div className="absolute bottom-0 w-full h-1/2 z-5">
        <img
          src="/assets/prize/Grass.png"
          alt=""
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Top gradient overlay */}
      <div className="absolute top-0 w-full h-40 bg-gradient-to-b from-[#131313] via-[#131313]/50 to-transparent z-10"></div>

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center w-full px-4 gap-8 mt-12 sm:mt-0">

        {/* Prize Pool Title */}
        <h1
          className="text-6xl sm:text-6xl md:text-8xl lg:text-[180px] text-white text-center leading-none whitespace-normal md:whitespace-nowrap px-4"
          style={{
            color: '#FFF',
            textShadow: '0 0 30px rgba(215, 169, 54, 0.80)',
            fontFamily: 'Gegola DEMO',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1.1',
            letterSpacing: '-0.04em'
          }}
        >
          PRIZE POOL
        </h1>

        {/* Prize Amount Box */}
        <div
          className="border-3 md:border-[4px] border-[#D7A936] rounded-2xl px-2 md:px-1 lg:px-1 py-3 md:py-4 lg:py-6"
          style={{
            backgroundColor: 'transparent'
          }}
        >
          <div
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[90px] text-[#D7A936] leading-none px-4"
            style={{
              fontFamily: 'Bebas Neue',
              textShadow: '0 0 27.3px rgba(206, 164, 0, 0.74)'
            }}
          >
            ₹ {count.toLocaleString()}
          </div>
        </div>

        {/* Register Button */}
        <button
          className="bg-white text-[#2C2C2C] font-kumbh font-bold text-sm md:text-base px-8 md:px-10 py-2 md:py-3 rounded-full hover:bg-gray-100 transition-all"
          style={{
            boxShadow: '0 0 20px 0 #FDFDFD'
          }}
        >
          REGISTER
        </button>
      </div>

      {/* Character with money on left */}
      <div className="absolute left-0 bottom-0 w-[40%] sm:w-1/4 md:w-[20%] lg:w-1/4 max-w-[350px] z-25">
        <img
          src="/assets/prize/Richie.png"
          alt="Character"
          className="w-full h-auto opacity-80 sm:opacity-100"
        />
      </div>

      {/* Dog character on right */}
      <div className="absolute right-0 bottom-0 w-[40%] sm:w-1/4 md:w-[20%] lg:w-1/4 max-w-[350px] z-25">
        <img
          src="/assets/prize/Dollar.png"
          alt="Dog"
          className="w-full h-auto opacity-80 sm:opacity-100"
        />
      </div>

      {/* Floating Money Bills - Bottom Section Only */}

      <img
        src="/assets/prize/Money.png"
        alt=""
        className="absolute w-56 md:w-72 lg:w-96 z-15"
        style={{
          right: '30%',
          top: '48%',
          animation: 'float 7s ease-in-out infinite 3s'
        }}
      />

      <img
        src="/assets/prize/Money.png"
        alt=""
        className="absolute w-48 md:w-56 lg:w-72 z-15"
        style={{
          right: '25%',
          top: '50%',
          animation: 'float 8.2s ease-in-out infinite 2.2s'
        }}
      />

      <img
        src="/assets/prize/Money.png"
        alt=""
        className="absolute w-52 md:w-64 lg:w-80 z-15"
        style={{
          right: '42%',
          top: '60%',
          animation: 'float 9s ease-in-out infinite 1.5s'
        }}
      />

      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-48 md:w-60 lg:w-76 z-15"
        style={{
          left: '22%',
          top: '60%',
          animation: 'float 7.2s ease-in-out infinite 2.8s'
        }}
      />

      {/* Bottom Left Spread */}
      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-44 md:w-56 lg:w-72 z-15"
        style={{
          left: '-20%',
          top: '46%',
          animation: 'float 7.8s ease-in-out infinite 0.7s'
        }}
      />

      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-40 md:w-52 lg:w-68 z-15"
        style={{
          left: '2%',
          top: '62%',
          animation: 'float 6.5s ease-in-out infinite 2.9s'
        }}
      />

      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-42 md:w-54 lg:w-70 z-15"
        style={{
          left: '6%',
          top: '50%',
          animation: 'float 7.1s ease-in-out infinite 3.4s'
        }}
      />

      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-38 md:w-50 lg:w-66 z-15"
        style={{
          left: '4%',
          top: '56%',
          animation: 'float 6.8s ease-in-out infinite 1.3s'
        }}
      />

      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-36 md:w-48 lg:w-64 z-15"
        style={{
          left: '1%',
          top: '48%',
          animation: 'float 7.5s ease-in-out infinite 2.4s'
        }}
      />

      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-40 md:w-52 lg:w-68 z-15"
        style={{
          left: '3%',
          top: '67%',
          animation: 'float 6.3s ease-in-out infinite 3.6s'
        }}
      />

      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-48 md:w-64 lg:w-80 z-15"
        style={{
          left: '8%',
          top: '55%',
          animation: 'float 7.4s ease-in-out infinite 1.4s'
        }}
      />

      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-38 md:w-50 lg:w-66 z-15"
        style={{
          left: '11%',
          top: '64%',
          animation: 'float 6.9s ease-in-out infinite 2.6s'
        }}
      />

      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-52 md:w-68 lg:w-[22rem] z-15"
        style={{
          left: '28%',
          top: '65%',
          animation: 'float 6.8s ease-in-out infinite 2.1s'
        }}
      />

      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-44 md:w-56 lg:w-72 z-15"
        style={{
          left: '18%',
          top: '59%',
          animation: 'float 7.2s ease-in-out infinite 1.7s'
        }}
      />

      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-46 md:w-60 lg:w-76 z-15"
        style={{
          left: '24%',
          top: '53%',
          animation: 'float 6.4s ease-in-out infinite 3.1s'
        }}
      />

      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-36 md:w-48 lg:w-60 z-15"
        style={{
          left: '10%',
          top: '68%',
          animation: 'float 8.2s ease-in-out infinite 0.9s'
        }}
      />

      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-48 md:w-60 lg:w-76 z-15"
        style={{
          left: '17%',
          top: '70%',
          animation: 'float 7.7s ease-in-out infinite 1.8s'
        }}
      />

      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-40 md:w-48 lg:w-64 z-15"
        style={{
          left: '32%',
          top: '58%',
          animation: 'float 6.6s ease-in-out infinite 2.5s'
        }}
      />

      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-44 md:w-56 lg:w-72 z-15"
        style={{
          left: '15%',
          top: '48%',
          animation: 'float 8.3s ease-in-out infinite 1.1s'
        }}
      />

      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-52 md:w-64 lg:w-80 z-15"
        style={{
          left: '25%',
          top: '72%',
          animation: 'float 7.0s ease-in-out infinite 0.5s'
        }}
      />

      {/* Bottom Right Spread */}
      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-46 md:w-60 lg:w-76 z-15"
        style={{
          right: '0.5%',
          top: '52%',
          animation: 'float 6.5s ease-in-out infinite 3.2s'
        }}
      />

      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-52 md:w-68 lg:w-[22rem] z-15"
        style={{
          right: '6%',
          top: '65%',
          animation: 'float 7.3s ease-in-out infinite 1.6s'
        }}
      />

      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-44 md:w-60 lg:w-80 z-15"
        style={{
          right: '2%',
          top: '55%',
          animation: 'float 8.1s ease-in-out infinite 0.6s'
        }}
      />

      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-60 md:w-76 lg:w-[24rem] z-15"
        style={{
          right: '5%',
          top: '48%',
          animation: 'float 8.4s ease-in-out infinite 1.2s'
        }}
      />

      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-52 md:w-68 lg:w-[22rem] z-15"
        style={{
          right: '20%',
          top: '72%',
          animation: 'float 7.1s ease-in-out infinite 0.4s'
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }
      `}</style>
    </div>
  );
}
