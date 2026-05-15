import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-amber-400 shadow">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "font-bold text-black" : "text-amber-800"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/counter"
        className={({ isActive }) =>
          isActive ? "font-bold text-fuchsia-600" : "text-amber-800"
        }
      >
        Counter
      </NavLink>
      <NavLink
        to="/components"
        className={({ isActive }) =>
          isActive ? "font-bold text-fuchsia-600" : "text-amber-800"
        }
      >
        Components
      </NavLink>
      <NavLink
        to="/posts"
        className={({ isActive }) =>
          isActive ? "font-bold text-fuchsia-600" : "text-amber-800"
        }
      >
        Posts
      </NavLink>
    </nav>
  );
}