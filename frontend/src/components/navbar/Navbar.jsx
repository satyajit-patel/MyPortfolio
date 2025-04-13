import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 inset-x-0 z-50 w-full text-sm bg-black">
      <nav className="w-full bg-black py-2.5 md:flex md:items-center md:px-4">
        {/* Top row: brand area / toggle button */}
        <div className="flex items-center justify-between px-4 md:px-0">
          {/* Logo or brand name could go here */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex justify-center items-center border border-gray-700 text-gray-300 rounded-full hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Nav links */}
        <div className={`${isOpen ? "block" : "hidden"} md:block`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 px-4 md:px-0">
            <Link
              to="/"
              className="py-0.5 md:py-3 border-b-2 border-gray-300 text-gray-300 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="py-0.5 md:py-3 border-b-2 border-transparent text-gray-300 hover:text-white"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="py-0.5 md:py-3 border-b-2 border-transparent text-gray-300 hover:text-white"
            >
              aboutMe
            </Link>
            <Link
              to="/gpt"
              className="py-0.5 md:py-3 border-b-2 border-transparent text-gray-300 hover:text-white"
            >
              myGpt
            </Link>
            <Link
              to="/compiler"
              className="py-0.5 md:py-3 border-b-2 border-transparent text-gray-300 hover:text-white"
            >
              myCompiler
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
