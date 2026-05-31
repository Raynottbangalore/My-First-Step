import directorImg from '../assets/director.png';

export const aboutData = {
  hero: {
    title: "About Us",
    subtitle: "Discover the story, vision, and people behind My First Step.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1920"
  },
  story: "Founded with a passion for early childhood education, My First Step Kids Nursery & Preschool has been a nurturing home for little learners. We believe in providing a holistic environment where children are encouraged to explore, question, and discover the world around them.",
  visionMission: [
    {
      title: "Our Vision",
      text: "To be a leading preschool that inspires a lifelong love for learning, fostering creativity, critical thinking, and character development in every child.",
      icon: "FaEye",
      color: "text-[#32C5FF]"
    },
    {
      title: "Our Mission",
      text: "To provide a safe, inclusive, and stimulating environment where children can reach their full potential through engaging, play-based educational experiences.",
      icon: "FaRocket",
      color: "text-[#FFD600]"
    }
  ],
  coreValues: [
    { title: "Compassion", desc: "Caring for each child's unique needs." },
    { title: "Excellence", desc: "Striving for the highest quality in early education." },
    { title: "Innovation", desc: "Embracing new teaching methodologies." },
    { title: "Integrity", desc: "Building trust with parents and the community." }
  ],
  messages: [
    {
      role: "Director's Message",
      name: "Mary Anupama",
      message: "Welcome to My First Step! We are committed to providing a foundation of excellence for your child. Our dedicated team works tirelessly to ensure that every day is a new adventure in learning.",
      image: directorImg
    }
  ]
};
