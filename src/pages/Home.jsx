import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { homeData } from '../data/homeData';
import heroImage from '../assets/firststephero.png';
import heroImage2 from '../assets/hero2.png';
import heroImage3 from '../assets/hero3.png';
import heroImage4 from '../assets/hero4.png';
import { FaArrowRight, FaShieldAlt, FaChalkboardTeacher, FaPuzzlePiece, FaHeartbeat, FaBuilding, FaComments, FaCloud } from 'react-icons/fa';

const heroImages = [heroImage, heroImage2, heroImage3, heroImage4];

const iconMap = {
  FaShieldAlt: <FaShieldAlt />,
  FaChalkboardTeacher: <FaChalkboardTeacher />,
  FaPuzzlePiece: <FaPuzzlePiece />,
  FaHeartbeat: <FaHeartbeat />,
  FaBuilding: <FaBuilding />,
  FaComments: <FaComments />
};

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[90vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Swiper Carousel */}
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            allowTouchMove={false}
            className="h-full w-full"
          >
            {heroImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#5A0B73]/40 mix-blend-multiply z-[1]"></div>
        <div className="absolute inset-0 bg-black/20 z-[2]"></div>
        
        <div className="relative z-10 text-center flex flex-col items-center justify-center w-full px-4 mt-12">
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2 drop-shadow-md">Welcome To,</h2>
          <h1 className="text-white text-6xl md:text-[6rem] font-black mb-4 drop-shadow-lg tracking-wide leading-none" style={{ fontFamily: "'Baloo 2', cursive" }}>
            My First Step
          </h1>
          <p className="text-white text-xl md:text-2xl font-bold mb-10 drop-shadow-md">Strive. Sparkle. Succeed</p>
          
          <Link to="/academics" className="bg-[#F52F7A] hover:bg-[#d41c62] text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-lg md:text-xl transition-all shadow-[0_4px_15px_rgba(245,47,122,0.5)] hover:scale-105 inline-block text-center">
            Our Academics
          </Link>
        </div>
        
        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full leading-[0] m-0 p-0 transform translate-y-1">
          <svg className="block w-full h-[60px] md:h-[120px]" viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" d="M0,30 Q720,150 1440,30 L1440,150 L0,150 Z"></path>
          </svg>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-[#FFF9C4] relative overflow-hidden">
        {/* Floating toys shapes */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-[#FF5252] rounded-xl transform rotate-12 opacity-50 blur-[2px]"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-[#448AFF] rounded-full opacity-50 blur-[2px]"></div>
        <div className="absolute top-20 right-32 w-16 h-16 bg-[#69F0AE] transform rotate-45 opacity-50 blur-[2px]"></div>

        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative min-h-[400px] md:min-h-[500px]"
            >
              <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80" alt="Kids playing" className="absolute top-0 left-0 md:left-4 w-48 h-48 md:w-64 md:h-64 object-cover rounded-3xl shadow-2xl border-8 border-white transform -rotate-6 z-10" />
              <img src="https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=600&q=80" alt="Kids learning" className="absolute bottom-0 right-0 md:right-4 w-56 h-56 md:w-72 md:h-72 object-cover rounded-3xl shadow-2xl border-8 border-white transform rotate-3 z-20" />
              <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 text-6xl md:text-8xl text-[#FFD600] drop-shadow-xl z-30 transform -rotate-12"><FaHeartbeat /></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-6 relative z-10"
            >
              <h2 className="text-4xl md:text-6xl font-black text-[#5A0B73]" style={{ fontFamily: "'Baloo 2', cursive" }}>
                {homeData.welcome.title}
              </h2>
              <div className="w-24 h-2 bg-[#F52F7A] rounded-full"></div>
              <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed bg-white/50 p-6 md:p-8 rounded-3xl shadow-sm border border-white/60 backdrop-blur-sm">
                {homeData.welcome.text}
              </p>
              <div className="pt-4">
                <Link to="/about-us" className="inline-flex items-center gap-2 bg-[#5A0B73] hover:bg-[#FFD600] hover:text-[#5A0B73] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:-translate-y-1">
                  Know More About Us <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#E0F7FA] relative">
        {/* SVG wave top */}
        <div className="absolute top-0 left-0 w-full leading-[0] m-0 p-0 transform -translate-y-1/2 md:-translate-y-[45%]">
           <svg className="block w-full h-[30px] md:h-[60px]" viewBox="0 0 1440 100" preserveAspectRatio="none"><path fill="#FFF9C4" d="M0,50 C320,150 420,-50 1440,50 L1440,0 L0,0 Z"></path></svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 pt-10">
          <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
            <h2 className="text-5xl md:text-6xl font-black text-[#00838F] mb-6 drop-shadow-sm" style={{ fontFamily: "'Baloo 2', cursive" }}>Why Choose Us?</h2>
            <p className="text-teal-800 text-lg md:text-xl font-bold bg-white/50 inline-block px-6 md:px-8 py-2 rounded-full shadow-sm">Nurturing your child's boundless potential.</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {homeData.whyChooseUs.map((item, idx) => {
              const sizes = ['w-56 h-56 md:w-64 md:h-64', 'w-64 h-64 md:w-72 md:h-72', 'w-52 h-52 md:w-60 md:h-60'];
              const margins = ['mt-0', 'mt-4 md:mt-16', 'mt-0 md:mt-4'];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: 'spring' }}
                  className={`bg-white rounded-full ${sizes[idx%sizes.length]} ${margins[idx%margins.length]} p-4 md:p-6 shadow-2xl flex flex-col items-center justify-center text-center border-8 ${idx%2===0 ? 'border-[#FFD600]' : 'border-[#F52F7A]'} group cursor-pointer hover:border-[#32C5FF] transition-colors`}
                >
                  <div className={`text-5xl md:text-6xl ${idx%2===0 ? 'text-[#FFD600]' : 'text-[#F52F7A]'} group-hover:text-[#32C5FF] group-hover:scale-110 transition-transform mb-3 md:mb-4`}>
                    {iconMap[item.icon]}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-gray-800 leading-tight" style={{ fontFamily: "'Baloo 2', cursive" }}>{item.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-[#5A0B73] mb-4" style={{ fontFamily: "'Baloo 2', cursive" }}>Our Programs</h2>
            <div className="w-24 h-2 bg-[#7AC943] rounded-full mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg md:text-xl font-medium max-w-2xl mx-auto">Age-appropriate programs designed to meet the developmental needs of your child.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {homeData.programs.slice(0, 4).map((program, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -15, scale: 1.02 }}
                className={`${program.color} rounded-t-full rounded-b-3xl pt-16 pb-10 px-6 relative overflow-hidden shadow-lg text-center border-4 border-white ring-4 ${idx%2===0?'ring-[#FFD600]':'ring-[#32C5FF]'}`}
              >
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-inner">
                   {idx % 4 === 0 && <FaPuzzlePiece className="text-[#FFD600]" />}
                   {idx % 4 === 1 && <FaChalkboardTeacher className="text-[#32C5FF]" />}
                   {idx % 4 === 2 && <FaBuilding className="text-[#F52F7A]" />}
                   {idx % 4 === 3 && <FaShieldAlt className="text-[#7AC943]" />}
                </div>
                <h3 className="text-3xl font-black text-gray-800 mt-6 mb-3" style={{ fontFamily: "'Baloo 2', cursive" }}>{program.title}</h3>
                <span className="inline-block bg-white px-4 py-1 rounded-full text-sm font-bold text-gray-700 mb-4 shadow-sm">
                  {program.age}
                </span>
                <p className="text-gray-700 font-medium mb-2 leading-tight">A perfect blend of play and structured learning.</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/academics" className="inline-flex items-center gap-2 bg-[#5A0B73] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#FFD600] hover:text-[#5A0B73] transition-colors shadow-xl">
              View All Programs <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#32C5FF] text-white relative overflow-hidden">
        {/* Sky styling */}
        <div className="absolute top-10 left-10 md:left-20 text-white/30 text-7xl md:text-8xl"><FaCloud /></div>
        <div className="absolute bottom-10 right-10 md:right-20 text-white/30 text-8xl md:text-9xl"><FaCloud /></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-4 text-[#FFD600] drop-shadow-md" style={{ fontFamily: "'Baloo 2', cursive" }}>What Parents Say</h2>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 40 },
              1024: { slidesPerView: 3, spaceBetween: 50 }
            }}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            className="pb-16 px-2 md:px-4"
          >
            {homeData.testimonials.map((test, idx) => (
              <SwiperSlide key={idx} className="pt-4">
                {/* Speech Bubble */}
                <div className="bg-white text-gray-800 p-8 rounded-3xl shadow-2xl relative mb-8 min-h-[160px]">
                  {/* Bubble tail */}
                  <div className="absolute -bottom-6 left-12 w-0 h-0 border-l-[20px] border-l-transparent border-t-[30px] border-t-white border-r-[20px] border-r-transparent"></div>
                  
                  <div className="text-[#F52F7A] text-6xl absolute -top-8 left-6 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-md pb-6 font-serif">"</div>
                  <p className="text-base md:text-lg font-medium leading-relaxed mt-2">{test.text}</p>
                </div>
                
                {/* Parent Info */}
                <div className="flex items-center gap-4 ml-6 md:ml-8">
                  <div className="w-14 h-14 bg-[#FFD600] rounded-full flex items-center justify-center text-2xl font-bold text-[#5A0B73] border-4 border-white shadow-md">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl drop-shadow-sm">{test.name}</h4>
                    <p className="text-sm font-medium text-white/90">{test.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Admission CTA Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-br from-[#FFD600] to-[#FF9800] rounded-[3rem] md:rounded-[4rem] p-8 md:p-20 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(255,152,0,0.3)]">
            {/* Sun rays effect */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-conic-gradient(from 0deg, transparent 0deg 15deg, white 15deg 30deg)' }}></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#5A0B73] mb-6 drop-shadow-md" style={{ fontFamily: "'Baloo 2', cursive" }}>Admissions Open 2026-27</h2>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#5A0B73]/90 mb-10 max-w-2xl mx-auto bg-white/40 inline-block px-6 md:px-8 py-2 md:py-3 rounded-full shadow-sm">
                Give your child the best start in life!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                <button className="bg-[#F52F7A] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-lg md:text-xl shadow-xl hover:scale-105 transition-transform transform border-4 border-white">
                  Apply Now
                </button>
                <button className="bg-white text-[#5A0B73] px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-lg md:text-xl shadow-xl hover:scale-105 transition-transform transform border-4 border-[#F52F7A]">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
