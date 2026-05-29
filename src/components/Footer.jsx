import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../assets/firststeplogo.png';

const Footer = () => {
  return (
    <footer className="bg-[#5A0B73] text-white pt-16 pb-8 rounded-t-[3rem] mt-auto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="inline-block mb-6 bg-white p-2 rounded-xl">
              <img src={logo} alt="My First Step Logo" className="h-32 w-auto object-contain mix-blend-multiply" />
            </div>
            <p className="text-purple-100 mb-6 text-sm leading-relaxed">
              Providing a safe, nurturing, and stimulating environment where children can learn, grow, and take their first steps towards a bright future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#FFD600] hover:text-[#5A0B73] rounded-full flex items-center justify-center transition-all">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#FFD600] hover:text-[#5A0B73] rounded-full flex items-center justify-center transition-all">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#FFD600] hover:text-[#5A0B73] rounded-full flex items-center justify-center transition-all">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#FFD600]">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about-us" className="text-purple-100 hover:text-white transition-colors flex items-center gap-2"><span className="text-[#32C5FF]">●</span> About Us</Link></li>
              <li><Link to="/academics" className="text-purple-100 hover:text-white transition-colors flex items-center gap-2"><span className="text-[#32C5FF]">●</span> Academics</Link></li>
              <li><Link to="/activities" className="text-purple-100 hover:text-white transition-colors flex items-center gap-2"><span className="text-[#32C5FF]">●</span> Activities</Link></li>
              <li><Link to="/gallery" className="text-purple-100 hover:text-white transition-colors flex items-center gap-2"><span className="text-[#32C5FF]">●</span> Gallery</Link></li>
              <li><Link to="/news-events" className="text-purple-100 hover:text-white transition-colors flex items-center gap-2"><span className="text-[#32C5FF]">●</span> News & Events</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#FFD600]">Programs</h3>
            <ul className="space-y-3">
              <li><Link to="/academics" className="text-purple-100 hover:text-white transition-colors flex items-center gap-2"><span className="text-[#7AC943]">●</span> Playgroup</Link></li>
              <li><Link to="/academics" className="text-purple-100 hover:text-white transition-colors flex items-center gap-2"><span className="text-[#7AC943]">●</span> Nursery</Link></li>
              <li><Link to="/academics" className="text-purple-100 hover:text-white transition-colors flex items-center gap-2"><span className="text-[#7AC943]">●</span> Junior KG</Link></li>
              <li><Link to="/academics" className="text-purple-100 hover:text-white transition-colors flex items-center gap-2"><span className="text-[#7AC943]">●</span> Senior KG</Link></li>
              <li><Link to="/academics" className="text-purple-100 hover:text-white transition-colors flex items-center gap-2"><span className="text-[#7AC943]">●</span> Day Care</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#FFD600]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-purple-100">
                <FaMapMarkerAlt className="text-[#32C5FF] mt-1 text-xl shrink-0" />
                <span>#51/1, 1st Floor, St. Anthony's Church Road, Beside DA Cyber Cafe, Basavanapura, Bangalore - 560083</span>
              </li>
              <li className="flex items-center gap-3 text-purple-100">
                <FaPhoneAlt className="text-[#32C5FF] shrink-0" />
                <span>+91 9740174704<br/>+91 9880152862</span>
              </li>
              <li className="flex items-center gap-3 text-purple-100">
                <FaEnvelope className="text-[#32C5FF] shrink-0" />
                <span>info@myfirststepindia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-purple-200">
          <p>&copy; {new Date().getFullYear()} My First Step Kids Nursery & Preschool. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
