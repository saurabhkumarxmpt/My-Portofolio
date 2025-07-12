import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Skill = ({ label,width = "w-3/5" }) => (
  <div className="my-2">
    <div className="flex justify-between text-sm">
      <span>{label}</span>
      {/* <span className="text-gray-300">●●●●●</span> */}
    </div>
    <div className="h-2 bg-gray-700 rounded mt-1">
      <div className={`h-full bg-cyan-600 rounded ${width}`}></div>
    </div>
  </div>
);

const ResumePage = () => {
  return (
    <div className="relative bg-[url('/resume-page-image.jpg')] min-h-screen bg-cover bg-center text-white">
      <Navbar />

      <div className="p-6 md:p-12 min-h-screen font-Nunito">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT PANEL */}
          <div className="space-y-10">
            {/* SOFTWARE SKILLS */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                >
                <h2 className="text-xl font-bold border-b border-gray-500 pb-2">TECHNICAL SKILLS</h2>
                <Skill label="JavaScript" width="w-[80%]" />
                <Skill label="React Js" width="w-[75%]" />
                <Skill label="Express Js" width="w-[85%]" />
                <Skill label="MongoDB" width="w-[65%]" />
                <Skill label="Node Js" width="w-[60%]" />
            </motion.div>

            {/* LANGUAGES */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-xl font-bold border-b border-gray-500 pb-2">LANGUAGES</h2>
              <Skill label="English" width="w-[60%]" />
              <Skill label="Hindi" width="w-[90%]" />
            </motion.div>

            {/* PERSONAL SKILLS */}
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-xl font-bold border-b border-gray-500 pb-2">PERSONAL SKILLS</h2>
              <p className="text-sm mt-2">Coding - Team Work - Organisation</p>
            </motion.div>
          </div>

          {/* CENTER PANEL - EXPERIENCE TIMELINE */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl font-bold border-b border-gray-500 pb-2">EXPERIENCE</h2>
            {[
              { year: "2024 - 25", company: "BPCL (Distributorship)", role: "Computer Oprator" },
              { year: "2022- 22", company: "LOCAL WHEREHOUSE", role: "Stock Manager (Excel)" }
            ].map((item, i) => (
              <div key={i} className="relative pl-6 border-l-2 border-cyan-600">
                <div className="absolute -left-2 top-1 w-4 h-4 bg-cyan-600 rounded-full"></div>
                <p className="text-xs text-gray-300">{item.year}</p>
                <h3 className="font-semibold">{item.company}</h3>
                <p className="text-sm">{item.role}</p>
              </div>
            ))}
            {/* EDUCATION */}
            <div>
              <h2 className="text-xl font-bold border-b border-gray-500 pb-2">EDUCATION</h2>
              <p className="text-sm mt-2 font-semibold">BCA in Computer Application</p>
              <p className="text-sm text-gray-300">Mahatma Jyotiba Phule Rohilkhand University, Bareilly</p>
            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* WHAT CAN I DO */}
            <div>
              <h2 className="text-xl font-bold border-b border-gray-500 pb-2">WHAT CAN I DO?</h2>
              <ul className="text-sm list-disc ml-5 mt-2 space-y-1">
                <li>Full-stack MERN web development</li>
                <li>REST API creation & integration</li>
                <li>MongoDB schema design</li>
                <li>Deployment on Vercel/Render</li>
              </ul>
            </div>

            {/* DESIGN SKILLS */}
            <div>
              <h2 className="text-xl font-bold border-b border-gray-500 pb-2">DESIGN SKILLS</h2>
              <ul className="text-sm list-disc ml-5 mt-2 space-y-1">
                <li><span className="font-bold">Frontend:</span> React.js, Tailwind CSS, Framer Motion</li>
                <li><span className="font-bold">Backend:</span> Node.js, Express.js</li>
                <li><span className="font-bold">Database:</span> MongoDB, MySQL</li>
                <li>API Integration & RESTful Services</li>
                <li><span className="font-bold">Version Control:</span> Git, GitHub</li>
              </ul>
            </div>

            {/* HOBBIES */}
            <div>
              <h2 className="text-xl font-bold border-b border-gray-500 pb-2">HOBBIES & INTERESTS</h2>
              <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                <span>💻 Programming</span>
                <span>📸 Video Making</span>
                <span>🔉 Music </span>
                <span>🌍 Travel</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
