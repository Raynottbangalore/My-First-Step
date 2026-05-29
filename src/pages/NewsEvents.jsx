import { motion } from 'framer-motion';
import { newsData } from '../data/newsData';
import { FaThumbtack, FaCalendarAlt, FaBullhorn, FaNewspaper } from 'react-icons/fa';

const NewsEvents = () => {
  const getNoteStyle = (idx) => {
    const styles = [
      { bg: 'bg-[#FEF08A]', rotate: 'rotate-2' },
      { bg: 'bg-[#A7F3D0]', rotate: '-rotate-2' },
      { bg: 'bg-[#FECACA]', rotate: 'rotate-1' },
      { bg: 'bg-[#BFDBFE]', rotate: '-rotate-1' }
    ];
    return styles[idx % styles.length];
  };

  const getIcon = (type) => {
    switch (type) {
      case 'Event': return <FaCalendarAlt className="text-gray-600" />;
      case 'Announcement': return <FaBullhorn className="text-gray-600" />;
      default: return <FaNewspaper className="text-gray-600" />;
    }
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden font-sans pt-32 pb-20 px-4 md:px-8"
      style={{ 
        backgroundColor: '#e6ccb2',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/cork-board.png")'
      }}
    >
      {/* Board Wooden Frame */}
      <div className="absolute inset-4 border-[16px] md:border-[24px] border-[#7f4f24] rounded-lg shadow-2xl pointer-events-none z-20" style={{ borderStyle: 'ridge' }}></div>
      
      <div className="container mx-auto relative z-10">
        
        {/* Board Title (Pinned paper) */}
        <div className="flex justify-center mb-16">
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white px-12 py-6 shadow-md relative"
          >
            {/* Pins */}
            <div className="absolute top-3 left-4 w-4 h-4 rounded-full bg-red-500 shadow-sm border border-red-700">
              <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-white/50"></div>
            </div>
            <div className="absolute top-3 right-4 w-4 h-4 rounded-full bg-red-500 shadow-sm border border-red-700">
              <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-white/50"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-[#5A0B73] tracking-wider" style={{ fontFamily: "'Baloo 2', cursive" }}>
              NOTICE BOARD
            </h1>
          </motion.div>
        </div>

        {/* Notices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 md:gap-16 px-4">
          {newsData.news.map((item, idx) => {
            const style = getNoteStyle(idx);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
                className={`relative p-6 shadow-xl ${style.bg} ${style.rotate} transition-transform`}
                style={{ 
                  boxShadow: '3px 10px 15px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 10px rgba(0,0,0,0.05)'
                }}
              >
                {/* Push Pin */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-2xl text-red-500 drop-shadow-md z-10">
                  <FaThumbtack className="transform -rotate-12" />
                </div>
                
                {/* Paper Fold Effect */}
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-black/5 transform -skew-x-12 -skew-y-12"></div>

                {/* Content */}
                <div className="mt-4 mb-4 relative z-0">
                  {item.image && (
                    <div className="w-full h-40 mb-4 bg-white/50 border border-black/10 p-2 transform rotate-1">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale-[20%]" />
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider bg-black/10 px-2 py-1 rounded text-black/70 flex items-center gap-2">
                      {getIcon(item.type)} {item.type}
                    </span>
                    <span className="text-sm font-bold text-black/60 font-mono">{item.date}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-800 mb-3 leading-tight" style={{ fontFamily: "'Baloo 2', cursive" }}>{item.title}</h2>
                  <p className="text-gray-700 text-sm font-medium" style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>
                    {item.excerpt}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;
