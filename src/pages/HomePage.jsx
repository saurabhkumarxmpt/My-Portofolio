import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
    <div className="bg-[url('./home-page-image.jpg')] min-h-screen bg-cover text-white ">
    <Navbar/>
    <div className="pt-28 px-8 md:px-20 lg:px-32 font-roboto text-white flex items-center">
  <div>
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold ">
      Hi, I'm <span className="text-white">Saurabh Kumar</span>
    </h1>
    <p className="text-xl md:text-2xl my-4 font-Nunito ">
      A passionate <span className="text-white">MERN Stack Developer</span>
    </p>
    <p className="text-base md:text-lg font-Nunito  max-w-xl">
      Turning ideas into real-world web apps with clean code and modern design.
    </p>

    {/* Buttons */}
    <div className="mt-6 flex gap-4">
      <a
        href="#projects"
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
      >
        View Projects
      </a>
      <a
        href="#contact"
        className="border border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-600 hover:text-white transition"
      >
        Contact Me
      </a>
    </div>
  </div>
</div>

    </div>
    </>
  );
};

export default HomePage;
