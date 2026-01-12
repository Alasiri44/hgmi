import { NavLink } from "react-router-dom";
import logo from '../assets/hgmi-logo.png';

export default function NavBar() {
    const activeLink = "text-emerald-700 font-bold border-b-2 border-emerald-700";
    const normalLink = "text-gray-600 hover:text-emerald-600 transition-colors duration-200 font-medium";

    return (
        <nav className="w-full bg-white shadow-sm border-b border-gray-100 px-6 py-1 flex items-center justify-between">
            
            <div className="flex items-center gap-3">
                <img src={logo} alt="HGMI Logo" className="h-15 w-auto" />
                <h2 className="text-lg font-bold text-emerald-900 hidden lg:block uppercase tracking-tight">
                    <span className="block">Higher Grounds</span>
                    <span className="block text-emerald-600">
                        Ministries International
                    </span>
                </h2>
            </div>

            <div className="hidden md:flex items-center gap-8">
                <NavLink to='/' end className={({ isActive }) => isActive ? activeLink : normalLink}>Home</NavLink>
                <NavLink to='/about' className={({ isActive }) => isActive ? activeLink : normalLink}>About</NavLink>
                <NavLink to='/sermons' className={({ isActive }) => isActive ? activeLink : normalLink}>Sermons</NavLink>
                <NavLink to='/ministries' className={({ isActive }) => isActive ? activeLink : normalLink}>Ministries</NavLink>
                <NavLink to='/events' className={({ isActive }) => isActive ? activeLink : normalLink}>Events</NavLink>
                <NavLink to='/give' className={({ isActive }) => isActive ? activeLink : normalLink}>Give</NavLink>
                <NavLink to='/contact' className={({ isActive }) => isActive ? activeLink : normalLink}>Contact</NavLink>
            </div>

            <div className="flex items-center">
                <NavLink 
                    to='/sermons' 
                    className="flex items-center gap-2 bg-emerald-700 text-white px-5 py-2 rounded-md font-bold uppercase text-sm hover:bg-emerald-800 transition-all shadow-md active:scale-95"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                    Watch Live
                </NavLink>
            </div>
        </nav>
    );
}
