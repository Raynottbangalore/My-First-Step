import { motion } from 'framer-motion';
import { academicData } from '../data/academicData';
import { FaLeaf, FaAppleAlt } from 'react-icons/fa';

const Academics = () => {
  const FallingLeaf = ({ left, delay, duration, color }) => (
    <motion.div
      className={`absolute text-2xl ${color} z-0 opacity-60`}
      style={{ left }}
      animate={{ 
        y: ['-10vh', '110vh'],
        x: [0, 30, -30, 20, -20, 0],
        rotate: [0, 90, 180, 270, 360]
      }}
      transition={{ repeat: Infinity, duration, delay, ease: "linear" }}
    >
      <FaLeaf />
    </motion.div>
  );

  return (
    <div className="bg-[#E8F5E9] min-h-screen relative overflow-hidden font-sans pb-20">
      {/* Falling Leaves */}
      <FallingLeaf left="10%" delay={0} duration={12} color="text-[#4CAF50]" />
      <FallingLeaf left="30%" delay={4} duration={15} color="text-[#FFC107]" />
      <FallingLeaf left="60%" delay={2} duration={14} color="text-[#FF5722]" />
      <FallingLeaf left="85%" delay={7} duration={16} color="text-[#8BC34A]" />

      {/* Header */}
      <div className="pt-32 pb-10 text-center relative z-10">
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-5xl md:text-7xl font-black text-[#2E7D32] drop-shadow-sm mb-4"
          style={{ fontFamily: "'Baloo 2', cursive" }}
        >
          The Learning Tree
        </motion.h1>
        <p className="text-xl md:text-2xl text-[#388E3C] font-bold max-w-2xl mx-auto px-4">
          {academicData.approach}
        </p>
      </div>

      {/* Tree Structure */}
      <div className="container mx-auto px-4 relative z-10 mt-12">
        {/* The Trunk */}
        <div className="absolute left-1/2 top-0 bottom-0 w-8 md:w-16 bg-[#795548] transform -translate-x-1/2 rounded-t-full shadow-inner border-l-4 border-r-4 border-[#5D4037]">
          {/* Wood texture lines */}
          <div className="w-full h-full opacity-20 bg-[repeating-linear-gradient(transparent,transparent_20px,#3E2723_20px,#3E2723_22px)]"></div>
        </div>

        <div className="relative pt-10 pb-20 space-y-32">
          {academicData.programs.map((program, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className={`flex ${isLeft ? 'justify-start' : 'justify-end'} relative w-full`}>
                
                {/* Branch connector */}
                <div className={`absolute top-1/2 left-1/2 w-1/4 md:w-1/3 h-6 bg-[#795548] border-y-2 border-[#5D4037] transform -translate-y-1/2 z-0 ${isLeft ? '-translate-x-full rounded-l-full' : 'rounded-r-full'}`}></div>

                {/* Apple / Leaf Icon on Branch */}
                <div className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 z-10 text-4xl ${isLeft ? '-translate-x-[150%] text-[#FF5252]' : 'translate-x-[50%] text-[#8BC34A]'}`}>
                  {isLeft ? <FaAppleAlt /> : <FaLeaf />}
                </div>

                {/* Program Card */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className={`w-[85%] md:w-[45%] relative z-10 ${program.color} p-6 md:p-8 rounded-[2rem] shadow-xl border-4 border-white flex flex-col`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className={`text-3xl font-black ${program.textColor}`} style={{ fontFamily: "'Baloo 2', cursive" }}>{program.title}</h2>
                    <span className="bg-white/60 px-4 py-1 rounded-full font-bold text-sm text-gray-800 shadow-sm">{program.age}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {program.focus.map((item, i) => (
                      <span key={i} className="bg-white/80 px-3 py-1 rounded-lg text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <FaLeaf className={program.textColor} /> {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Tree Roots / Base */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-64 h-32 bg-[#795548] rounded-[100%] z-0 border-t-8 border-[#5D4037]"></div>
      </div>
    </div>
  );
};

export default Academics;
