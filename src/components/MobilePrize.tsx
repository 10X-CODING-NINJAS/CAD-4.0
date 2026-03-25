export default function MobilePrize() {
  return (
    <div className="relative w-full min-h-screen bg-[#131313] overflow-hidden flex flex-col items-center justify-center">
      {/* Background starry effect */}
      <div className="absolute inset-0 opacity-24 z-0">
        <img
          src="/assets/prize/prize pool bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Grass background at bottom */}
      <div className="absolute bottom-0 w-full h-[40%] z-5">
        <img
          src="/assets/prize/Grass.png"
          alt=""
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Top gradient overlay */}
      <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-[#131313] via-[#131313]/50 to-transparent z-10"></div>


      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 gap-3 h-screen">
        
        {/* Prize Pool Title */}
        <h1 
          className="text-[42px] text-white text-center leading-tight mb-4"
          style={{
            color: '#FFF',
            textShadow: '0 0 25px rgba(215, 169, 54, 0.80)',
            fontFamily: 'Gegola DEMO',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            letterSpacing: '-0.04em'
          }}
        >
          PRIZE POOL
        </h1>

        {/* Prize Reveal Box */}
        <div className="relative">
          
          <div 
            className="border-[3px] border-[#D7A936] rounded-lg px-6 py-3 bg-black/50"
          >
            <div 
              className="text-center text-[#B8860B]"
              style={{
                fontFamily: 'Bebas Neue',
                textShadow: '0 0 10px rgba(133, 92, 11, 0.4)',
                letterSpacing: '0.02em',
                lineHeight: 1.1
              }}
            >
              <span className="text-[17px]">TO BE REVEALED SOON</span>
            </div>
          </div>
        </div>

        {/* Register Button */}
        <button 
          onClick={() => window.open('https://unstop.com/o/nvCL7I4?utm_medium=Share&utm_source=codin10x44066&utm_campaign=Online_coding_challenge', '_blank', 'noopener,noreferrer')}
          className="bg-white text-[#2C2C2C] font-kumbh font-bold text-sm px-10 py-2.5 rounded-full hover:bg-gray-100 transition-all uppercase tracking-wider mt-1"
          style={{
            boxShadow: '0 0 20px 0 #FDFDFD'
          }}
        >
          REGISTER
        </button>
      </div>

      {/* Character with money on left */}
      <div className="absolute left-[4px] bottom-0 w-[425px] z-25">
        <img
          src="/assets/prize/Richie.png"
          alt="Character"
          className="w-full h-auto"
        />
      </div>

      {/* Casino/dice elements - bottom right */}
      <div className="absolute right-0 bottom-0 w-[160px] z-25">
        <img
          src="/assets/prize/Dollar.png"
          alt="Casino elements"
          className="w-full h-auto"
        />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </div>
  );
}
