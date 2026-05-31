import { motion } from 'framer-motion';
import { aboutData } from '../data/aboutData';
import { FaCloud, FaSeedling, FaSun, FaStar, FaHeart, FaRocket, FaEye } from 'react-icons/fa';
import { IoFootsteps } from 'react-icons/io5';

const AboutUs = () => {
  const Cloud = ({ top, left, delay, duration }) => (
    <motion.div
      className="absolute text-white/50 text-6xl z-0"
      style={{ top, left }}
      animate={{ x: [0, 50, 0], y: [0, -20, 0] }}
      transition={{ repeat: Infinity, duration, delay, ease: "easeInOut" }}
    >
      <FaCloud />
    </motion.div>
  );

  const getIcon = (iconStr) => {
    switch(iconStr) {
      case 'FaEye': return <FaEye />;
      case 'FaRocket': return <FaRocket />;
      default: return <FaStar />;
    }
  };

  return (
    <div className="bg-[#87CEEB] min-h-screen relative overflow-hidden font-sans">
      {/* Sky Background with Clouds and Sun */}
      <div className="absolute top-10 right-10 text-[#FFD600] text-9xl animate-[spin_20s_linear_infinite] opacity-80 z-0">
        <FaSun />
      </div>
      <Cloud top="10%" left="10%" delay={0} duration={15} />
      <Cloud top="30%" left="80%" delay={5} duration={18} />
      <Cloud top="60%" left="15%" delay={2} duration={20} />
      <Cloud top="85%" left="75%" delay={8} duration={16} />

      {/* Header */}
      <div className="pt-32 pb-16 text-center relative z-10">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl md:text-8xl font-black text-white drop-shadow-lg mb-6"
          style={{ fontFamily: "'Baloo 2', cursive" }}
        >
          Our Journey
        </motion.h1>
        <p className="text-xl md:text-2xl text-white font-bold max-w-2xl mx-auto drop-shadow-md px-4">
          {aboutData.story}
        </p>
      </div>

      {/* The Journey Path */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Curved dashed line in center (left on mobile) */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-2 border-l-4 border-dashed border-white/60 transform -translate-x-1/2"></div>
        
        {/* Milestone 0: History */}
        <div className="flex flex-col md:flex-row justify-center md:items-center mb-24 md:mb-32 relative pl-16 md:pl-0">
          <div className="hidden md:block w-1/2 pr-12"></div>
          <div className="absolute left-8 md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl text-white drop-shadow-md">
            <IoFootsteps className="transform rotate-45 scale-x-[-1]" />
          </div>
          <div className="w-full md:w-1/2 md:pl-12 text-left">
            <motion.div 
              whileInView={{ opacity: 1, x: 0, rotate: 2 }}
              initial={{ opacity: 0, x: 100 }}
              className="bg-white p-8 rounded-[3rem] shadow-xl inline-block max-w-md border-4 border-[#FF6B6B]"
            >
              <div className="text-5xl text-[#FF6B6B] mb-4 flex justify-start"><FaStar /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A0B73] mb-4">History</h2>
              <h3 className="text-xl font-bold text-[#F52F7A] mb-3">{aboutData.history.title}</h3>
              <p className="text-gray-700 text-base md:text-lg font-medium">{aboutData.history.description}</p>
            </motion.div>
          </div>
        </div>

        {/* Milestone 1: Vision */}
        <div className="flex flex-col md:flex-row justify-center md:items-center mb-24 md:mb-32 relative pl-16 md:pl-0">
          <div className="w-full md:w-1/2 md:pr-12 md:text-right">
            <motion.div 
              whileInView={{ opacity: 1, x: 0, rotate: -2 }}
              initial={{ opacity: 0, x: -100 }}
              className="bg-white p-8 rounded-[3rem] shadow-xl inline-block max-w-md border-4 border-[#32C5FF]"
            >
              <div className="text-5xl text-[#32C5FF] mb-4 flex justify-end"><FaEye /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A0B73] mb-4">{aboutData.visionMission[0].title}</h2>
              <p className="text-gray-700 text-base md:text-lg font-medium">{aboutData.visionMission[0].text}</p>
            </motion.div>
          </div>
          <div className="absolute left-8 md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl text-white drop-shadow-md">
            <IoFootsteps className="transform -rotate-45" />
          </div>
          <div className="hidden md:block w-1/2 pl-12"></div>
        </div>

        {/* Milestone 2: Mission */}
        <div className="flex flex-col md:flex-row justify-center md:items-center mb-24 md:mb-32 relative pl-16 md:pl-0">
          <div className="hidden md:block w-1/2 pr-12"></div>
          <div className="absolute left-8 md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl text-white drop-shadow-md">
            <IoFootsteps className="transform rotate-45 scale-x-[-1]" />
          </div>
          <div className="w-full md:w-1/2 md:pl-12 text-left">
            <motion.div 
              whileInView={{ opacity: 1, x: 0, rotate: 2 }}
              initial={{ opacity: 0, x: 100 }}
              className="bg-white p-8 rounded-[3rem] shadow-xl inline-block max-w-md border-4 border-[#FFD600]"
            >
              <div className="text-5xl text-[#FFD600] mb-4 flex justify-start"><FaRocket /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A0B73] mb-4">{aboutData.visionMission[1].title}</h2>
              <p className="text-gray-700 text-base md:text-lg font-medium">{aboutData.visionMission[1].text}</p>
            </motion.div>
          </div>
        </div>

        {/* Milestone 3: Core Values */}
        <div className="flex flex-col md:flex-row justify-center md:items-center mb-24 md:mb-32 relative pl-16 md:pl-0">
          <div className="w-full md:w-1/2 md:pr-12 md:text-right">
            <motion.div 
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              className="bg-[#5A0B73] p-6 md:p-8 rounded-[3rem] shadow-xl inline-block w-full max-w-lg border-4 border-[#F52F7A]"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center md:text-right">Core Values</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {aboutData.coreValues.map((val, idx) => (
                  <div key={idx} className="bg-white/10 p-4 rounded-2xl">
                    <h3 className="text-[#FFD600] font-bold text-xl mb-2">{val.title}</h3>
                    <p className="text-white/90 text-sm">{val.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="absolute left-8 md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl text-white drop-shadow-md">
            <IoFootsteps className="transform -rotate-45" />
          </div>
          <div className="hidden md:block w-1/2 pl-12"></div>
        </div>

        {/* Milestone 4: Messages */}
        <div className="flex flex-col items-center mb-20 relative pl-8 md:pl-0">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -top-16 text-5xl text-white drop-shadow-md">
            <IoFootsteps className="transform rotate-0" />
          </div>
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            className="w-full max-w-4xl"
          >
            <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 border-4 border-[#7AC943] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#7AC943]/20 rounded-bl-full"></div>
              <h2 className="text-4xl font-bold text-[#5A0B73] mb-12 text-center relative z-10">Director</h2>
              
              <div className="max-w-2xl mx-auto relative z-10">
                {aboutData.messages.map((msg, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#FFD600] mb-6 shadow-lg">
                      <img src={msg.image} alt={msg.role} className="w-full h-full object-cover" />
                    </div>
                    {msg.name && (
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">{msg.name}</h3>
                    )}
                    <p className="text-[#F52F7A] text-lg font-bold mb-4">{msg.role}</p>
                    <p className="text-gray-600 text-lg italic">"{msg.message}"</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Grassy Bottom */}
      <div className="w-full h-32 bg-[#7AC943] relative z-10 border-t-8 border-[#5ea330]" style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }}>
        <div className="flex justify-around pt-8 text-4xl text-[#5ea330]">
          <FaSeedling /><FaSeedling /><FaSeedling /><FaSeedling /><FaSeedling />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
