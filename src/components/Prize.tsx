export default function Index() {
  return (
    <div className="relative w-full min-h-screen bg-[#131313] overflow-hidden flex flex-col items-center pt-4 sm:pt-8 md:pt-12 lg:pt-16">
      {/* Background starry effect */}
      <div className="absolute inset-0 opacity-24 z-0">
        <img
          src="/assets/prize/prize pool bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Grass background at bottom */}
      <div className="absolute bottom-0 w-full h-[40%] sm:h-1/2 z-5">
        <img
          src="/assets/prize/Grass.png"
          alt=""
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Top gradient overlay */}
      <div className="absolute top-0 w-full h-40 bg-gradient-to-b from-[#131313] via-[#131313]/50 to-transparent z-10"></div>

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center w-full px-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">

        {/* Prize Pool Title */}
        <h1
          className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px] text-white text-center leading-none tracking-tight"
          style={{
            color: '#FFF',
            textShadow: '0 0 30px rgba(215, 169, 54, 0.80)',
            fontFamily: 'Gegola DEMO',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            letterSpacing: '-0.04em'
          }}
        >
          PRIZE POOL
        </h1>

        {/* Prize Amount Box */}
        <div
          className="border-2 sm:border-3 md:border-[4px] border-[#D7A936] rounded-2xl px-6 sm:px-8 md:px-12 py-2 sm:py-3 lg:py-4"
          style={{
            backgroundColor: 'transparent'
          }}
        >
          <div
            className="text-3xl sm:text-4xl md:text-4xl lg:text-[50px] xl:text-[60px] 2xl:text-[70px] text-[#D7A936] leading-none text-center"
            style={{
              fontFamily: 'Bebas Neue',
              textShadow: '0 0 27.3px rgba(206, 164, 0, 0.74)'
            }}
          >
            ₹ 1,50,000
          </div>
        </div>

        {/* Register Button */}
        <button
          className="bg-white text-[#2C2C2C] font-kumbh font-bold text-xs md:text-sm px-6 md:px-8 py-1.5 md:py-2 rounded-full hover:bg-gray-100 transition-all"
          style={{
            boxShadow: '0 0 20px 0 #FDFDFD'
          }}
        >
          REGISTER
        </button>
      </div>

      {/* Character with money on left */}
      <div className="absolute left-4 sm:left-8 md:left-12 lg:left-20 bottom-0 w-28 sm:w-40 md:w-56 lg:w-[15%] xl:w-[20%] max-w-[350px] z-25">
        <img
          src="/assets/prize/Richie.png"
          alt="Character"
          className="w-full h-auto"
        />
      </div>

      {/* Dog character on right */}
      <div className="absolute right-4 sm:right-8 md:right-12 lg:right-20 bottom-0 w-28 sm:w-40 md:w-56 lg:w-[15%] xl:w-[20%] max-w-[350px] z-25">
        <img
          src="/assets/prize/Dollar.png"
          alt="Dog"
          className="w-full h-auto"
        />
      </div>

      {/* Floating Money Bills - Bottom Section Only */}

      {/* Distributed Money Spread - Natural Ground Scattering */}
      <img
        src="/assets/prize/Money.png"
        alt=""
        className="absolute w-36 sm:w-44 md:w-52 lg:w-64 z-15"
        style={{
          left: '28%',
          bottom: '5%',
          animation: 'moneyFlow 7.2s ease-in-out infinite 3s'
        }}
      />

      <img
        src="/assets/prize/Money.png"
        alt=""
        className="absolute w-32 sm:w-40 md:w-48 lg:w-60 z-15"
        style={{
          left: '72%',
          bottom: '2%',
          animation: 'moneyFlow 8.5s ease-in-out infinite 2.2s'
        }}
      />

      <img
        src="/assets/prize/Money.png"
        alt=""
        className="absolute w-44 md:w-52 lg:w-64 z-15"
        style={{
          left: '50%',
          bottom: '8%',
          animation: 'moneyFlow 9.4s ease-in-out infinite 1.5s'
        }}
      />

      <img
        src="/assets/Prize/Money.png"
        alt=""
        className="absolute w-32 sm:w-40 md:w-48 lg:w-56 z-15"
        style={{
          left: '35%',
          bottom: '3%',
          animation: 'moneyFlow 7.8s ease-in-out infinite 2.8s'
        }}
      />

      <div className="hidden md:block">
        <img
          src="/assets/Prize/Money.png"
          alt=""
          className="absolute w-36 md:w-44 lg:w-56 z-15"
          style={{
            left: '25%',
            bottom: '10%',
            animation: 'moneyFlow 7.8s ease-in-out infinite 0.7s'
          }}
        />

        <img
          src="/assets/Prize/Money.png"
          alt=""
          className="absolute w-32 md:w-40 lg:w-52 z-15"
          style={{
            left: '32%',
            bottom: '8%',
            animation: 'moneyFlow 6.5s ease-in-out infinite 2.9s'
          }}
        />

        <img
          src="/assets/Prize/Money.png"
          alt=""
          className="absolute w-34 md:w-42 lg:w-54 z-15"
          style={{
            left: '45%',
            bottom: '12%',
            animation: 'moneyFlow 7.1s ease-in-out infinite 3.4s'
          }}
        />

        <img
          src="/assets/Prize/Money.png"
          alt=""
          className="absolute w-30 md:w-38 lg:w-50 z-15"
          style={{
            left: '55%',
            bottom: '5%',
            animation: 'moneyFlow 6.8s ease-in-out infinite 1.3s'
          }}
        />

        <img
          src="/assets/Prize/Money.png"
          alt=""
          className="absolute w-36 md:w-44 lg:w-56 z-15"
          style={{
            left: '65%',
            bottom: '14%',
            animation: 'moneyFlow 7.5s ease-in-out infinite 2.4s'
          }}
        />

        <img
          src="/assets/Prize/Money.png"
          alt=""
          className="absolute w-32 md:w-40 lg:w-52 z-15"
          style={{
            left: '75%',
            bottom: '3%',
            animation: 'moneyFlow 6.3s ease-in-out infinite 3.6s'
          }}
        />

        <img
          src="/assets/Prize/Money.png"
          alt=""
          className="absolute w-38 md:w-48 lg:w-60 z-15"
          style={{
            left: '28%',
            bottom: '7%',
            animation: 'moneyFlow 7.4s ease-in-out infinite 1.4s'
          }}
        />

        <img
          src="/assets/Prize/Money.png"
          alt=""
          className="absolute w-30 md:w-38 lg:w-50 z-15"
          style={{
            left: '38%',
            bottom: '4%',
            animation: 'moneyFlow 6.9s ease-in-out infinite 2.6s'
          }}
        />

        <img
          src="/assets/Prize/Money.png"
          alt=""
          className="absolute w-44 md:w-52 lg:w-64 z-15"
          style={{
            left: '60%',
            bottom: '5%',
            animation: 'moneyFlow 6.8s ease-in-out infinite 2.1s'
          }}
        />

        <img
          src="/assets/Prize/Money.png"
          alt=""
          className="absolute w-36 md:w-44 lg:w-56 z-15"
          style={{
            left: '70%',
            bottom: '9%',
            animation: 'moneyFlow 7.2s ease-in-out infinite 1.7s'
          }}
        />

        <img
          src="/assets/Prize/Money.png"
          alt=""
          className="absolute w-36 md:w-44 lg:w-56 z-15"
          style={{
            left: '30%',
            bottom: '12%',
            animation: 'moneyFlow 6.4s ease-in-out infinite 3.1s'
          }}
        />

        <img
          src="/assets/Prize/Money.png"
          alt=""
          className="absolute w-32 md:w-40 lg:w-52 z-15"
          style={{
            left: '42%',
            bottom: '6%',
            animation: 'moneyFlow 8.2s ease-in-out infinite 0.9s'
          }}
        />

        <img
          src="/assets/Prize/Money.png"
          alt=""
          className="absolute w-38 md:w-48 lg:w-60 z-15"
          style={{
            left: '52%',
            bottom: '4%',
            animation: 'moneyFlow 7.7s ease-in-out infinite 1.8s'
          }}
        />

        <img
          src="/assets/Prize/Money.png"
          alt=""
          className="absolute w-34 md:w-42 lg:w-54 z-15"
          style={{
            left: '62%',
            bottom: '10%',
            animation: 'moneyFlow 6.6s ease-in-out infinite 2.5s'
          }}
        />

        <img
          src="/assets/Prize/Money.png"
          alt=""
          className="absolute w-36 md:w-44 lg:w-56 z-15"
          style={{
            left: '35%',
            bottom: '11%',
            animation: 'moneyFlow 8.3s ease-in-out infinite 1.1s'
          }}
        />

        <img
          src="/assets/Prize/Money.png"
          alt=""
          className="absolute w-44 md:w-52 lg:w-64 z-15"
          style={{
            left: '50%',
            bottom: '5%',
            animation: 'moneyFlow 7.0s ease-in-out infinite 0.5s'
          }}
        />
      </div>

      <div className="hidden md:block">
        <img
          src="/assets/Prize/Money.png"
          alt=""
          className="absolute w-36 md:w-44 lg:w-56 z-15"
          style={{
            left: '26%',
            bottom: '12%',
            animation: 'moneyFlow 8.1s ease-in-out infinite 3.2s'
          }}
        />

        <img
          src="/assets/Prize/Money.png"
          alt=""
          className="absolute w-44 md:w-52 lg:w-64 z-15"
          style={{
            left: '38%',
            bottom: '15%',
            animation: 'moneyFlow 9.2s ease-in-out infinite 1.6s'
          }}
        />

        <img
          src="/assets/Prize/Money.png"
          alt=""
          className="absolute w-38 md:w-46 lg:w-58 z-15"
          style={{
            left: '52%',
            bottom: '5%',
            animation: 'moneyFlow 7.9s ease-in-out infinite 0.6s'
          }}
        />

        <img
          src="/assets/Prize/Money.png"
          alt=""
          className="absolute w-48 md:w-56 lg:w-72 z-15"
          style={{
            left: '68%',
            bottom: '8%',
            animation: 'moneyFlow 8.8s ease-in-out infinite 1.2s'
          }}
        />

        <img
          src="/assets/Prize/Money.png"
          alt=""
          className="absolute w-44 md:w-52 lg:w-64 z-15"
          style={{
            left: '74%',
            bottom: '12%',
            animation: 'moneyFlow 7.4s ease-in-out infinite 0.4s'
          }}
        />
      </div>

      <style>{`
        @keyframes moneyFlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) translateX(5px) rotate(2deg);
          }
          50% {
            transform: translateY(-20px) translateX(0px) rotate(-1deg);
          }
          75% {
            transform: translateY(-10px) translateX(-5px) rotate(-2deg);
          }
        }
      `}</style>
    </div>
  );
}
