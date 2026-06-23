import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">

      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-400">
        MySite
      </h1>

      {/* Links */}
      <div className="flex gap-6 text-sm">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 border-b-2 border-blue-400 pb-1"
              : "hover:text-blue-300 transition"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 border-b-2 border-blue-400 pb-1"
              : "hover:text-blue-300 transition"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 border-b-2 border-blue-400 pb-1"
              : "hover:text-blue-300 transition"
          }
        >
          Blog
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 border-b-2 border-blue-400 pb-1"
              : "hover:text-blue-300 transition"
          }
        >
          Contact
        </NavLink>

      </div>
    </nav>
  );
}