import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/hgmi-logo.png";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeLink = "text-emerald-700 font-bold border-b-2 border-[#fbbf24]";
  const normalLink =
    "text-gray-600 hover:text-emerald-600 transition-colors duration-200 font-medium";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-[#fbbf24] px-6 py-1 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <img src={logo} alt="HGMI Logo" className="h-15 w-auto ml-[1px]" />
        <h2 className="text-lg font-bold text-emerald-900 uppercase tracking-tight">
          <span className="lg:hidden">HGMI</span>
          <span className="hidden lg:block">Higher Grounds</span>
          <span className="hidden lg:block text-emerald-600">
            Ministries International
          </span>
        </h2>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          About
        </NavLink>
        <NavLink
          to="/sermons"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          Sermons
        </NavLink>
        <NavLink
          to="/ministries"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          Ministries
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          Events
        </NavLink>
        <NavLink
          to="/give"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          Give
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          Contact
        </NavLink>
      </div>

      {/* Action buttons (desktop always visible) */}
      <div className="flex items-center gap-1.5 sm:gap-3">
        <NavLink
          to="https://www.facebook.com/hganairobiwest"
          className="flex items-center gap-1.5 bg-emerald-700 text-white px-3 py-1 sm:px-5 sm:py-2 rounded-full sm:rounded-md font-bold uppercase text-[10px] sm:text-sm hover:bg-emerald-800 transition-all shadow-sm sm:shadow-md active:scale-95 tracking-wide"
        >
          <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-white"></span>
          </span>
          <span className="block sm:hidden">Live</span>
          <span className="hidden sm:block">Watch Live</span>
        </NavLink>

        <NavLink
          to="https://www.google.com/maps/dir/?api=1&destination=-1.3085544321730092,36.824518910903066,"
          className="flex items-center gap-1.5 bg-emerald-50 sm:bg-emerald-700 text-emerald-800 sm:text-white border border-emerald-200 sm:border-transparent px-3 py-1 sm:px-5 sm:py-2 rounded-full sm:rounded-md font-bold uppercase text-[10px] sm:text-sm hover:bg-emerald-100 sm:hover:bg-emerald-800 transition-all shadow-none sm:shadow-md active:scale-95 tracking-wide"
        >
          <span className="block sm:hidden">Map</span>
          <span className="hidden sm:block">Get Directions</span>
        </NavLink>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-800 focus:outline-none ml-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 md:hidden gap-4 border-b border-[#fbbf24]">
          <NavLink
            to="/"
            end
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            About
          </NavLink>
          <NavLink
            to="/sermons"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Sermons
          </NavLink>
          <NavLink
            to="/ministries"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Ministries
          </NavLink>
          <NavLink
            to="/events"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Events
          </NavLink>
          <NavLink
            to="/give"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Give
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}
