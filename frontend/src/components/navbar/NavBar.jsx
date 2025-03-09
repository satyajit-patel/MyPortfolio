import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 flex justify-center">
      <div className="flex space-x-2">
        <button className="px-4 py-2 border border-[#D97706] text-[#D97706] rounded-md hover:bg-[#fbbf24] hover:text-black transition">
          <Link to="/">Home</Link>
        </button>
        <button className="px-3 py-1 text-sm border border-gray-400 text-gray-400 rounded-md hover:bg-gray-400 hover:text-black transition">
          <Link to="/projects">Projects</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
