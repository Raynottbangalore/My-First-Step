import { motion } from 'framer-motion';
import admissionImg from '../assets/admissionopen.png.jpeg';
import { FaGraduationCap, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdmissionOpen = () => {
  return (
    <div className="bg-[#f0f9ff] min-h-screen relative overflow-hidden font-sans pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#32C5FF 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      <div className="pt-32 pb-16 text-center relative z-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="inline-block bg-white px-8 py-4 rounded-full shadow-lg border-4 border-[#FFD600] mb-6"
        >
          <h1 className="text-4xl md:text-5xl font-black text-[#5A0B73]" style={{ fontFamily: "'Baloo 2', cursive" }}>
            Admissions Open!
          </h1>
        </motion.div>
        <p className="text-xl font-bold text-gray-700 bg-white/80 inline-block px-6 py-2 rounded-full shadow-sm backdrop-blur-sm">
          Secure your child's future today.
        </p>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border-4 border-[#32C5FF]">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-[#FFD600] transform -rotate-3 rounded-3xl -z-10"></div>
            <img src={admissionImg} alt="Admissions Open" className="w-full h-auto rounded-3xl shadow-lg border-8 border-white object-cover" />
            <div className="absolute -bottom-6 -right-6 text-7xl text-[#F52F7A] drop-shadow-md bg-white rounded-full p-2">
              <FaGraduationCap />
            </div>
          </motion.div>

          {/* Form / CTA Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A0B73]" style={{ fontFamily: "'Baloo 2', cursive" }}>Enrollment for 2026-2027 is now Live!</h2>
            <div className="w-20 h-2 bg-[#F52F7A] rounded-full"></div>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              We are currently accepting applications for the upcoming academic year. At My First Step, we provide a nurturing, creative, and safe environment where your child can thrive.
            </p>
            
            <div className="bg-[#e0f7fa] p-6 rounded-2xl border-2 border-[#32C5FF] border-dashed">
               <h3 className="text-xl font-bold text-[#00838F] mb-4">Fast Track Your Application</h3>
               <form className="space-y-4">
                 <input type="text" placeholder="Parent's Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#32C5FF]" />
                 <input type="text" placeholder="Child's Name & Age" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#32C5FF]" />
                 <input type="text" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#32C5FF]" />
                 <button type="button" className="w-full bg-[#5A0B73] text-white font-bold py-4 rounded-xl shadow-md hover:bg-[#FFD600] hover:text-[#5A0B73] transition-colors flex justify-center items-center gap-2">
                   Apply Now <FaArrowRight />
                 </button>
               </form>
            </div>
            
            <p className="text-sm text-gray-500 text-center">For any queries, please call <span className="font-bold text-[#F52F7A]">+91 98765 43210</span></p>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionOpen;
