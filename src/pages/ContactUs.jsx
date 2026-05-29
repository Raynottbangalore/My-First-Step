import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane, FaBus, FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-[#e0f7fa] min-h-screen relative overflow-hidden font-sans pb-20">
      
      {/* Background Campus Grid / Landscape */}
      <div className="absolute inset-0 bg-[#c8e6c9] z-0" style={{ backgroundImage: 'linear-gradient(white 2px, transparent 2px), linear-gradient(90deg, white 2px, transparent 2px)', backgroundSize: '100px 100px', opacity: '0.4' }}></div>
      
      {/* Animated School Bus */}
      <motion.div
        className="absolute top-40 left-0 text-[#FFD600] text-7xl z-10 drop-shadow-xl"
        animate={{ x: ['-10vw', '110vw'] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      >
        <FaBus className="text-[#FFD600] bg-[#FFD600] rounded-lg" style={{ color: '#FFD600', filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.3))' }} />
      </motion.div>

      {/* Header */}
      <div className="pt-32 pb-8 text-center relative z-20">
        <motion.h1 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-black text-[#5A0B73] drop-shadow-md mb-4"
          style={{ fontFamily: "'Baloo 2', cursive" }}
        >
          Visit Our Campus
        </motion.h1>
        <p className="text-xl font-bold text-gray-700 bg-white/70 inline-block px-6 py-2 rounded-full shadow-sm">
          We'd love to show you around!
        </p>
      </div>

      <div className="container mx-auto px-4 relative z-20 mt-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          
          {/* Left: The Mini Map Experience */}
          <div className="w-full lg:w-1/2 relative bg-[#aed581] p-8 md:p-12 rounded-[3rem] shadow-2xl border-8 border-white overflow-hidden">
            {/* Winding Road SVG */}
            <svg className="absolute inset-0 w-full h-full text-white/40" viewBox="0 0 400 400" preserveAspectRatio="none">
              <path d="M-50,50 Q100,50 150,150 T300,250 T450,300" fill="none" stroke="currentColor" strokeWidth="40" strokeLinecap="round" />
              <path d="M-50,50 Q100,50 150,150 T300,250 T450,300" fill="none" stroke="#607d8b" strokeWidth="20" strokeLinecap="round" strokeDasharray="10 15" />
            </svg>

            {/* School Building Placeholder */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-[#F52F7A] rounded-t-3xl shadow-lg border-4 border-white flex flex-col justify-end items-center pb-2">
              <div className="w-8 h-12 bg-white rounded-t-md"></div>
              <span className="text-white font-bold text-xs mt-1 absolute -bottom-6 bg-[#5A0B73] px-2 py-1 rounded">My First Step</span>
            </div>

            <div className="relative z-10 space-y-8 mt-20">
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-4 rounded-2xl shadow-lg flex items-start gap-4 max-w-sm ml-auto mr-12">
                <div className="w-12 h-12 bg-[#FFD600] rounded-full flex items-center justify-center text-xl text-[#5A0B73] shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="font-bold text-[#5A0B73]">Campus Location</h3>
                  <p className="text-sm text-gray-600 leading-tight mt-1">#51/1, 1st Floor, St. Anthony's Church Road,<br/>Beside DA Cyber Cafe, Basavanapura, Bangalore - 560083</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-4 rounded-2xl shadow-lg flex items-start gap-4 max-w-sm mr-auto ml-12">
                <div className="w-12 h-12 bg-[#32C5FF] rounded-full flex items-center justify-center text-xl text-white shrink-0">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3 className="font-bold text-[#5A0B73]">Call Us</h3>
                  <p className="text-sm text-gray-600">+91 9740174704</p>
                  <p className="text-sm text-gray-600">+91 9880152862</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-4 rounded-2xl shadow-lg flex items-start gap-4 max-w-sm ml-auto mr-4">
                <div className="w-12 h-12 bg-[#7AC943] rounded-full flex items-center justify-center text-xl text-white shrink-0">
                  <FaClock />
                </div>
                <div>
                  <h3 className="font-bold text-[#5A0B73]">Visiting Hours</h3>
                  <p className="text-sm text-gray-600">Mon - Fri: 9:00 AM - 4:00 PM</p>
                  <p className="text-sm text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-white p-8 md:p-10 rounded-[3rem] shadow-2xl border-4 border-[#32C5FF]"
            >
              <h2 className="text-3xl font-bold text-[#5A0B73] mb-6" style={{ fontFamily: "'Baloo 2', cursive" }}>Send us a Message!</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2 ml-2">Parent's Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name" 
                    className="w-full bg-gray-50 border-2 border-gray-200 px-6 py-4 rounded-full focus:outline-none focus:border-[#F52F7A] transition-colors font-medium"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2 ml-2">Child's Name & Age</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Aryan, 3 years" 
                    className="w-full bg-gray-50 border-2 border-gray-200 px-6 py-4 rounded-full focus:outline-none focus:border-[#F52F7A] transition-colors font-medium"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="hello@example.com" 
                    className="w-full bg-gray-50 border-2 border-gray-200 px-6 py-4 rounded-full focus:outline-none focus:border-[#F52F7A] transition-colors font-medium"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2 ml-2">Your Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="How can we help you?" 
                    className="w-full bg-gray-50 border-2 border-gray-200 px-6 py-4 rounded-3xl focus:outline-none focus:border-[#F52F7A] transition-colors font-medium resize-none"
                  ></textarea>
                </div>
                <button 
                  type="button" 
                  className="w-full bg-[#F52F7A] hover:bg-[#d41c62] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
