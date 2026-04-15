import { NavLink } from "react-router-dom";

export default function SermonNavBar() {
  const baseStyle =
    "px-4 py-2 text-sm font-semibold rounded-lg transition";

  const activeStyle =
    "bg-emerald-600 text-white";

  const inactiveStyle =
    "text-slate-600 hover:text-emerald-600";

  return (
    <div className="flex justify-center mt-10">
      <div className="flex gap-6 bg-white shadow-sm border border-gray-100 px-4 py-2 rounded-xl">
        
        <NavLink
          to="/sermons/preachings"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Sermons
        </NavLink>

        <NavLink
          to="/sermons/reels"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Reels
        </NavLink>

        <NavLink
          to="/sermons/books"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Books
        </NavLink>

      </div>
    </div>
  );
}