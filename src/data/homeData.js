import { FaShieldAlt, FaChalkboardTeacher, FaPuzzlePiece, FaHeartbeat, FaBuilding, FaComments } from 'react-icons/fa';

export const homeData = {
  hero: {
    title: "Where Every Step Leads to a Bright Future",
    subtitle: "Nurturing minds and hearts in a vibrant, safe, and loving environment. Join the My First Step family today!",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1920",
      "https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&q=80&w=1920"
    ]
  },
  welcome: {
    title: "Welcome to My First Step",
    text: "At My First Step Kids Nursery & Preschool, we believe that the early years are the most crucial for a child's development. Our holistic approach combines play-based learning with structured activities, ensuring your child receives the best foundation for lifelong success.",
    features: ["Child-Centric Approach", "Experienced Faculty", "Safe Environment"]
  },
  whyChooseUs: [
    { title: "Safe Environment", icon: "FaShieldAlt", color: "bg-[#5A0B73]" },
    { title: "Qualified Teachers", icon: "FaChalkboardTeacher", color: "bg-[#FFD600]" },
    { title: "Activity Based Learning", icon: "FaPuzzlePiece", color: "bg-[#32C5FF]" },
    { title: "Child Development", icon: "FaHeartbeat", color: "bg-[#7AC943]" },
    { title: "Modern Facilities", icon: "FaBuilding", color: "bg-[#FF6B6B]" },
    { title: "Parent Communication", icon: "FaComments", color: "bg-[#9D4EDD]" }
  ],
  programs: [
    { title: "Playgroup", age: "1 Year to 3 Years", color: "bg-[#FFE5D9]" },
    { title: "Nursery", age: "3 Years", color: "bg-[#D8F3DC]" },
    { title: "Junior KG", age: "4 Years", color: "bg-[#CAF0F8]" },
    { title: "Senior KG", age: "5 Years", color: "bg-[#E0AAFF]" },
    { title: "Day Care", age: "", color: "bg-[#FFF3B0]" },
    { title: "Tuition Classes", age: "", color: "bg-[#FFD6A5]" }
  ],
  testimonials: [
    { name: "Priya Sharma", role: "Parent", text: "My daughter loves going to My First Step. The teachers are incredibly caring and the environment is so positive!" },
    { name: "Rahul Verma", role: "Parent", text: "We've seen such a wonderful transformation in our son since he joined. Highly recommend this preschool." },
    { name: "Anita Desai", role: "Parent", text: "The activity-based learning approach here is fantastic. It truly makes learning fun for kids." }
  ]
};
