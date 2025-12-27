import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 inset-x-0 z-50 w-full text-sm bg-black">
      <nav className="w-full bg-black py-2.5 md:flex md:items-center md:px-4">
        <div className="flex items-center justify-between px-4 md:px-0">
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex justify-center items-center w-8 h-8 border border-gray-700 text-gray-300 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800 transition-colors"
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} md:block transition-all duration-200`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-1 md:gap-3 mt-2 md:mt-0 py-2 md:py-0 px-4 md:px-0">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`py-2 md:py-3 px-2 md:px-0 rounded md:rounded-none border-b-2 md:border-b-2 ${location.pathname === '/' ? 'border-gray-300 text-white bg-gray-800 md:bg-transparent' : 'border-transparent text-gray-300'} hover:text-white hover:bg-gray-800 md:hover:bg-transparent transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className={`py-2 md:py-3 px-2 md:px-0 rounded md:rounded-none border-b-2 md:border-b-2 ${location.pathname === '/projects' ? 'border-gray-300 text-white bg-gray-800 md:bg-transparent' : 'border-transparent text-gray-300'} hover:text-white hover:bg-gray-800 md:hover:bg-transparent transition-colors`}
            >
              Projects
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`py-2 md:py-3 px-2 md:px-0 rounded md:rounded-none border-b-2 md:border-b-2 ${location.pathname === '/about' ? 'border-gray-300 text-white bg-gray-800 md:bg-transparent' : 'border-transparent text-gray-300'} hover:text-white hover:bg-gray-800 md:hover:bg-transparent transition-colors`}
            >
              aboutMe
            </Link>
            <Link
              to="/gpt"
              onClick={() => setIsOpen(false)}
              className={`py-2 md:py-3 px-2 md:px-0 rounded md:rounded-none border-b-2 md:border-b-2 ${location.pathname === '/gpt' ? 'border-gray-300 text-white bg-gray-800 md:bg-transparent' : 'border-transparent text-gray-300'} hover:text-white hover:bg-gray-800 md:hover:bg-transparent transition-colors`}
            >
              myGpt
            </Link>
            <Link
              to="/compiler"
              onClick={() => setIsOpen(false)}
              className={`py-2 md:py-3 px-2 md:px-0 rounded md:rounded-none border-b-2 md:border-b-2 ${location.pathname === '/compiler' ? 'border-gray-300 text-white bg-gray-800 md:bg-transparent' : 'border-transparent text-gray-300'} hover:text-white hover:bg-gray-800 md:hover:bg-transparent transition-colors`}
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
