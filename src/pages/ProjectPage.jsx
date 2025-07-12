import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const projects = [
  {
  id: 1, // 
  title: "MERN Blog App",
  skills: "React.js, Express.js, MongoDB,React-router-dom",
  about: [
    "A full-stack MERN app",
    "Includes authentication",
    "Full CRUD functionality",
    "Dynimic Routing on Frontend",
    " I create responsive design using Tailwind CSS"
  ],
  image: "/projects/project1.png",
  codeLink: "https://github.com/saurabhkumarxmpt/mern-blog-app",
  liveLink: "https://logics-lab.vercel.app/",
},
  {
  id: 2, // 
  title: "JWT - Authentication  System",
  skills: "React.js, Express.js, MongoDB,Json web tokens,bcrypt",
  about: [
    "A full authentication system",
    "Password encrypted using bcrypt",
    "Session-based login",
    "Signup triggers a verification email"
  ],
  image: "/projects/project2.png",
  codeLink: "https://github.com/saurabhkumarxmpt/jwt-auth-app/",
  liveLink: "https://github.com/saurabhkumarxmpt/jwt-auth-app/",
},
 {
  id: 2, // 
  title: "16-Handles – A Restaurant Website",
  skills: "HTML,CSS,JavaScript",
  about: [
    "A static website",
    "Fully responsive layout",
    "Showcases my frontend skills",
    "Modern and clean design"
  ],
  image: "/projects/project3.png",
  codeLink: "https://github.com/saurabhkumarxmpt/16-handles",
  liveLink: "https://saurabhkumarxmpt.github.io/16-handles/",
},
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden flex flex-col md:flex-row text-white shadow-xl w-full border border-white/10"
    >
      {/* Left - Image */}
      <div className="md:w-1/2">
        <img src={project.image} alt={project.title} className="w-full h-64 md:h-full object-cover" />
      </div>

      {/* Right - Content */}
      <div className="p-6 md:w-1/2 flex flex-col justify-between font-Nunito">
        <div>
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-sm text-gray-300 mb-1"><strong>Skills Used:</strong> {project.skills}</p>
          <ul className="list-disc ml-5 text-sm">
            {project.about.map((data, index) => (
                <li key={index}>{data}</li>
            ))}
            </ul>
        </div>
        <div className="flex gap-6 mt-2">
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-md text-sm font-medium shadow transition duration-300 ease-in-out transform  hover:scale-105 hover:bg-white/20 hover:shadow-md hover:ring-1 hover:ring-cyan-400">Code</button>
          </a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-md text-sm font-medium shadow transition duration-300 ease-in-out transform  hover:scale-105 hover:bg-white/20 hover:shadow-md hover:ring-1 hover:ring-cyan-400">Live Link</button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectPage = () => {
  return (
    <div className="relative bg-[url('/project-page-image.jpg')] min-h-screen bg-cover bg-center text-white">
      <Navbar />

      <div className="px-4 md:px-10 py-16 min-h-screen font-Nunito">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 drop-shadow-md"
        >
          Projects
        </motion.h1>

        <div className="space-y-10 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
