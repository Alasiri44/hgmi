import { NavLink } from "react-router-dom";
import logo from "../assets/hgmi-logo.png";
// Note: You can use react-icons or standard SVG for the social icons
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaSpotify,
  FaTree,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-black border-t border-amber-400 pt-16 pb-8 relative">
      {/* Golden Curve */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M0,40 C300,-10 600,120 900,60 C1150,20 1300,20 1440,50 L1440,0 L0,0 Z"
            fill="url(#goldGradient)"
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Brand & About */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="HGMI Logo" className="h-10 w-auto" />
            <h2 className="text-xl font-bold text-black leading-tight">
              Higher Ground
              <br />
              Assembly
            </h2>
          </div>
          <p className="text-sm leading-relaxed">
            Wisdom and knowledge will be the stability of your times, And the
            strength of salvation;
          </p>

          <div className="flex items-center gap-4 text-black text-xl pt-2">
            <a
              href="https://web.facebook.com/hganairobiwest"
              className="hover:text-amber-400 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fhga_nairobiwest%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExSDYxd3lESUVTOWZsdnNsUnNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR6rrFonFvuIAnTZkps8boQvdRW9LJj5AvK0syTkUXWX-Nnv40Dg_arphyKNsw_aem_7u1MNr1YFY2WMJu3Wf2axw&h=AT0Oy_SHokRP4nQ_2nJl5z_JTbTF53dY7Vbijcznb1t_PLjWoNxrnnLkOi2Xs8FodPVYCjDwYwyUVSI_VS0PY1HSjPPG5IphAzcWivbCwFbAPWI8W5L0DAdZ4Xf1"
              className="hover:text-amber-400 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@highergroundassembly"
              className="hover:text-amber-400 transition-colors"
            >
              <FaTiktok />
            </a>
            <a
              href="https://l.facebook.com/l.php?u=http%3A%2F%2Fopen.spotify.com%2Fuser%2FThe%2520Higher%2520Ground%2520Podcast%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExSDYxd3lESUVTOWZsdnNsUnNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR76PthGSc8fOBDimY_wZBDfzzlux81wzE6oaGDD805oyJiJORJ4YHv535hLqw_aem_b2d_D_5ddOq3PMs-W-ShYA&h=AT2w5WeLKxhNiM6Ri_rsSJlsstDPdw7-qo46IQ6wnOMJt09-hEeWnv6iOWfT52cxKdW6VpaQaCtcWxXxr2TLavcLulwxOgWL6YscYBLdlhNRvD1iF_bt6_rSRo2R"
              className="hover:text-amber-400 transition-colors"
            >
              <FaSpotify />
            </a>
            <a
              href="https://linktr.ee/highergroundassembly"
              className="hover:text-amber-400 transition-colors"
            >
              <FaTree title="Linktree" />
            </a>
            <a
              href="https://www.youtube.com/@highergroundassembly-nairo8748"
              className="hover:text-amber-400 transition-colors"
            >
              <FaYoutube title="YouTube" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-black font-bold uppercase tracking-wider mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <NavLink to="/about" className="hover:text-amber-400">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/sermons" className="hover:text-amber-400">
                Sermons
              </NavLink>
            </li>
            <li>
              <NavLink to="/ministries" className="hover:text-amber-400">
                Ministries
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" className="hover:text-amber-400">
                Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/give" className="hover:text-amber-400">
                Give
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-amber-400">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Column 3: Ministries */}
        <div>
          <h3 className="text-black font-bold uppercase tracking-wider mb-6">
            Ministries
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <NavLink to="/ministries/men" className="hover:text-amber-400">
                Men's Ministry
              </NavLink>
            </li>
            <li>
              <NavLink to="/ministries/women" className="hover:text-amber-400">
                Women's Ministry
              </NavLink>
            </li>
            <li>
              <NavLink to="/ministries/youth" className="hover:text-amber-400">
                Support Ministry
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ministries/children"
                className="hover:text-amber-400"
              >
                Media Ministry
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ministries/small-groups"
                className="hover:text-amber-400"
              >
                Outreach and Missions
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Column 4: Visit Us */}
        <div>
          <h3 className="text-black font-bold uppercase tracking-wider mb-6">
            Visit Us
          </h3>
          <div className="text-sm space-y-4">
            <p>
              P O Box 47408, Niamey Road, Nairobi West
              <br />
              Nairobi, Kenya
            </p>
            <p className="font-medium text-black">+254 798 985068</p>
            <div className="pt-2">
              <p className="font-bold text-black">Service Times:</p>
              <p>Sunday: 10:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-amber-400 text-center text-xs text-black">
        <p>
          &copy; {new Date().getFullYear()} Higher Grounds Ministries
          International. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
