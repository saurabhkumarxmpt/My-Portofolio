import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Centered menu using flex-grow */}
        <ul className="flex flex-grow justify-center space-x-6 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600">About</Link>
          </li>
          <li>
            <Link to="/resume" className="hover:text-blue-600">Resume</Link>
          </li>
          <li>
            <Link to="/project" className="hover:text-blue-600">Project</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          </li>
        </ul>

        {/* Right side mobile number */}
        {/* <div className="text-sm font-semibold">
          📞 +91 9876543210
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
