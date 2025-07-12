import Navbar from "../components/Navbar";
import { motion } from "motion/react";

const AboutPage = () => {
  return (
    <>
      <div className="relative bg-[url('/about-page-image.jpg')] min-h-screen bg-cover bg-center text-white">
        <Navbar />

        {/* Main Left-Side Content with margin from top and left */}
        <div className="flex items-start ">
          <div className="w-full md:w-1/2 px-6 md:px-16 pt-32 space-y-6 font-Nunito">
            <motion.h1
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h1>

            <motion.p
              className="text-base md:text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              I'm a passionate <span className="text-cyan-600 font-semibold">MERN Stack Developer</span> with 1 year of hands-on experience building real-world web applications. I focus on clean code and practical functionality more than flashy design. I work with <span className="text-cyan-600">React.js</span>, <span className="text-cyan-600">Express.js</span>, <span className="text-cyan-600">MongoDB</span>, and <span className="text-cyan-600">MySQL</span> to build full-stack apps.
            </motion.p>
            <motion.p
            className="text-base md:text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >Email: saurabhkumarxmpt@gmail.com</motion.p>
          </div>
        </div>

        {/* Address fixed to bottom center */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-sm md:text-base text-gray-300 font-Nunito"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p>📍 Meerut, Uttar Pradesh</p>
          <p>🇮🇳 India</p>
        </motion.div>
      </div>
    </>
  );
};

export default AboutPage;
