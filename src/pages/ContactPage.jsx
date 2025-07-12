import { useRef } from "react"
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";

const ContactPage = () => {
     const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wx0hsje", // replace
        "template_4lkl32z", // replace
        form.current,
        "iIgB8J1PIh3nG6nuv" // replace
      )
      .then(
        (result) => {
          console.log("Message sent ✅", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Error ❌", error.text);
          alert("Something went wrong!");
        }
      );

    e.target.reset(); // clear form after submit
  };

  return (
    <div className="bg-[url('/contact-page-image.jpg')] min-h-screen bg-cover bg-center text-white font-Nunito">
      <Navbar />

      <div className="flex items-center justify-center px-4 py-20 min-h-screen ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 w-full max-w-xl shadow-lg"
        >
          <h1 className="text-3xl font-bold text-center mb-8 text-white drop-shadow">
            Contact Me
          </h1>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                name="from_name"
                className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-cyan-600"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="from_email"
                placeholder="you@example.com"
                className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-cyan-600"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                name="message"
                className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-cyan-600"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-4 py-3 rounded bg-white/10 text-white font-semibold cursor-pointer hover:bg-white/20 transition duration-300"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
