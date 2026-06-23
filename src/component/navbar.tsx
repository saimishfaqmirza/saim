// components/Navbar.tsx
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-400">
        MySite
      </h1>

      {/* Links */}
      <div className="flex gap-6">
        {["/", "/about", "/blog", "/contact"].map((path, i) => {
          const names = ["Home", "About", "Blog", "Contact"];
          return (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                  : "hover:text-blue-300 transition"
              }
            >
              {names[i]}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}