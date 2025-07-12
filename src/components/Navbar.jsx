import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const linkClass =
    "px-4 py-2 text-gray-400 transition-all duration-300 font-Nunito";
  const activeClass = "text-white font-semibold";
  const hoverEffect = "hover:text-white hover:px-6";

  return (
    <nav className="px-6 py-6 text-md text-white  relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between font-Nunito">
        {/* Logo */}
        <div className="text-xl font-bold md:hidden">Saurabh</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-grow justify-center space-x-5 text-md">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `${linkClass} ${hoverEffect} ${
                    isActive ? activeClass : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-5 flex flex-col justify-between items-center z-50"
            aria-label="Toggle Menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-3" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Background Overlay  */}
      {isOpen && (
        <div
          className="fixed inset-0   z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Slide-in Mobile Menu */}
       <div
      className={`fixed top-0 right-0 h-screen w-64 z-40 transform transition-transform duration-300 ease-in-out md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        backdrop-blur-xl bg-white/2 bg-clip-padding border-l border-white/20 shadow-lg
      `}
        >
      <div className="p-6 flex flex-col space-y-4 mt-16">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `${linkClass} ${hoverEffect} ${
                isActive ? activeClass : ""
              } block w-full`
            }
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
</div>
    </nav>
  );
};

export default Navbar;
