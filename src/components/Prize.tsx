export default function Index() {
  return (
    <div className="relative w-full min-h-screen bg-[#131313] overflow-hidden flex flex-col items-center pt-20">
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
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 gap-8 mt-12 sm:mt-0">

        {/* Prize Pool Title */}
        <h1
          className="text-6xl sm:text-6xl md:text-8xl lg:text-[180px] text-white text-center leading-none whitespace-normal md:whitespace-nowrap px-4 mb-4 md:mb-6"
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

        {/* Prize Reveal Box */}
        <div
          className="border-3 md:border-[4px] border-[#D7A936] rounded-2xl px-6 md:px-8 lg:px-10 py-4 md:py-5 lg:py-6"
          style={{
            backgroundColor: 'rgba(38, 27, 2, 0.64)'
          }}
        >
          <div
            className="text-center text-[#B8860B]"
            style={{
              fontFamily: 'Bebas Neue',
              letterSpacing: '0.06em',
              textShadow: '0 0 14px rgba(133, 92, 11, 0.4)'
            }}
          >
            <span
              className="inline-block text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold leading-none"
              style={{
                letterSpacing: '0.04em',
                background: 'linear-gradient(180deg, #FFF9DA 0%, #F7D774 38%, #D7A936 67%, #8D5C0B 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.35)) drop-shadow(0 0 16px rgba(215, 169, 54, 0.65))'
              }}
            >
              50,000+
            </span>
          </div>
        </div>

        {/* Register Button */}
        <button
          onClick={() => window.open('https://unstop.com/o/nvCL7I4?utm_medium=Share&utm_source=codin10x44066&utm_campaign=Online_coding_challenge', '_blank', 'noopener,noreferrer')}
          className="bg-white text-[#2C2C2C] font-kumbh font-bold text-sm md:text-base px-8 md:px-10 py-2 md:py-3 rounded-full hover:bg-gray-100 transition-all"
          style={{
            boxShadow: '0 0 20px 0 #FDFDFD'
          }}
        >
          REGISTER
        </button>
      </div>

      {/* Character with money on left */}
      <div className="absolute left-0 bottom-0  max-w-[800px] z-25">
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
