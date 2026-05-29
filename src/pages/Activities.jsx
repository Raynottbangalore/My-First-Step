import { motion } from 'framer-motion';
import { activityData } from '../data/activityData';
import { FaPalette, FaFutbol, FaMusic, FaBookOpen, FaSmile, FaTree, FaMapMarkerAlt } from 'react-icons/fa';

const Activities = () => {
  // Map icons to categories/titles manually since we are making an adventure park
  const getZoneDetails = (title) => {
    if (title.includes('Art')) return { icon: <FaPalette />, color: 'bg-[#FF9A9E]', shadow: 'shadow-[#FF9A9E]/50' };
    if (title.includes('Outdoor') || title.includes('Yoga') || title.includes('Field')) return { icon: <FaFutbol />, color: 'bg-[#A18CD1]', shadow: 'shadow-[#A18CD1]/50' };
    if (title.includes('Music') || title.includes('Annual')) return { icon: <FaMusic />, color: 'bg-[#FBC2EB]', shadow: 'shadow-[#FBC2EB]/50' };
    if (title.includes('Story')) return { icon: <FaBookOpen />, color: 'bg-[#84FAB0]', shadow: 'shadow-[#84FAB0]/50' };
    return { icon: <FaSmile />, color: 'bg-[#FFECD2]', shadow: 'shadow-[#FFECD2]/50' };
  };

  return (
    <div className="bg-[#f0f9ff] min-h-screen relative overflow-hidden font-sans">
      {/* Background Pattern - Map Grid */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#32C5FF 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Decorative Trees */}
      <div className="absolute top-20 left-10 text-6xl text-[#7AC943] opacity-40"><FaTree /></div>
      <div className="absolute bottom-40 right-20 text-8xl text-[#7AC943] opacity-40"><FaTree /></div>
      <div className="absolute top-1/2 left-4 text-5xl text-[#7AC943] opacity-40"><FaTree /></div>

      {/* Header */}
      <div className="pt-32 pb-16 text-center relative z-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="inline-block bg-white px-8 py-4 rounded-full shadow-lg border-4 border-[#FFD600] mb-6"
        >
          <h1 className="text-4xl md:text-5xl font-black text-[#5A0B73]" style={{ fontFamily: "'Baloo 2', cursive" }}>
            Kids Adventure World
          </h1>
        </motion.div>
        <p className="text-xl font-bold text-gray-700 bg-white/80 inline-block px-6 py-2 rounded-full shadow-sm backdrop-blur-sm">
          Explore our fun-filled activity zones!
        </p>
      </div>

      {/* The Map Zones */}
      <div className="container mx-auto px-4 pb-32 relative z-10">
        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {activityData.activities.map((activity, idx) => {
            const { icon, color, shadow } = getZoneDetails(activity.title);
            // Stagger up and down to look like a map path
            const yOffset = idx % 2 === 0 ? 'translate-y-0' : 'translate-y-6 md:translate-y-24';
            
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0] }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative w-64 ${yOffset} group cursor-pointer`}
              >
                {/* Map Pin */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-4xl text-[#F52F7A] z-20 animate-bounce">
                  <FaMapMarkerAlt />
                </div>

                {/* The Island / Zone */}
                <div className={`w-full aspect-square rounded-full ${color} shadow-2xl ${shadow} p-2 border-8 border-white relative overflow-hidden transition-all duration-300`}>
                  <img src={activity.image} alt={activity.title} className="w-full h-full object-cover rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Overlay content */}
                  <div className="absolute inset-0 bg-black/30 rounded-full flex flex-col items-center justify-center text-white opacity-100 transition-all duration-300 group-hover:bg-black/10">
                    <div className="text-5xl mb-2 drop-shadow-md transform group-hover:scale-125 transition-transform">{icon}</div>
                    <h3 className="text-2xl font-black text-center drop-shadow-md leading-tight px-4" style={{ fontFamily: "'Baloo 2', cursive" }}>
                      {activity.title}
                    </h3>
                  </div>
                </div>

                {/* Map Label */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg border-2 border-gray-100 whitespace-nowrap z-20">
                  <p className="font-bold text-[#5A0B73]">{activity.category} Zone</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Activities;
