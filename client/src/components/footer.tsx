import { NavLink } from 'react-router-dom';
import logo from '../assets/hgmi-logo.png';
// Note: You can use react-icons or standard SVG for the social icons
import { FaFacebook, FaInstagram, FaTiktok, FaSpotify, FaTree, FaYoutube } from 'react-icons/fa'; 

export default function Footer() {
    return (
        <footer className="bg-emerald-600 text-black border-t border-gray-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                
                {/* Column 1: Brand & About */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="HGMI Logo" className="h-10 w-auto" />
                        <h2 className="text-xl font-bold text-black leading-tight">
                            Higher Ground<br/>Assembly
                        </h2>
                    </div>
                    <p className="text-sm leading-relaxed">
                        A Christ-centered community committed to worship, discipleship, and serving our neighbors with the love of Jesus.
                    </p>
                    {/* Social Links */}
                    <div className="flex items-center gap-4 text-black text-xl pt-2">
                        <a href="https://web.facebook.com/hganairobiwest" className="hover:text-white transition-colors"><FaFacebook /></a>
                        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fhga_nairobiwest%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExSDYxd3lESUVTOWZsdnNsUnNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR6rrFonFvuIAnTZkps8boQvdRW9LJj5AvK0syTkUXWX-Nnv40Dg_arphyKNsw_aem_7u1MNr1YFY2WMJu3Wf2axw&h=AT0Oy_SHokRP4nQ_2nJl5z_JTbTF53dY7Vbijcznb1t_PLjWoNxrnnLkOi2Xs8FodPVYCjDwYwyUVSI_VS0PY1HSjPPG5IphAzcWivbCwFbAPWI8W5L0DAdZ4Xf1" className="hover:text-white transition-colors"><FaInstagram /></a>
                        <a href="https://www.tiktok.com/@highergroundassembly" className="hover:text-white transition-colors"><FaTiktok /></a>
                        <a href="https://l.facebook.com/l.php?u=http%3A%2F%2Fopen.spotify.com%2Fuser%2FThe%2520Higher%2520Ground%2520Podcast%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExSDYxd3lESUVTOWZsdnNsUnNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR76PthGSc8fOBDimY_wZBDfzzlux81wzE6oaGDD805oyJiJORJ4YHv535hLqw_aem_b2d_D_5ddOq3PMs-W-ShYA&h=AT2w5WeLKxhNiM6Ri_rsSJlsstDPdw7-qo46IQ6wnOMJt09-hEeWnv6iOWfT52cxKdW6VpaQaCtcWxXxr2TLavcLulwxOgWL6YscYBLdlhNRvD1iF_bt6_rSRo2R" className="hover:text-white transition-colors"><FaSpotify /></a>
                        <a href="https://linktr.ee/highergroundassembly" className="hover:text-white transition-colors"><FaTree title="Linktree" /></a>
                        <a href="https://www.youtube.com/@highergroundassembly-nairo8748" className="hover:text-white transition-colors"><FaYoutube title="YouTube" /></a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h3 className="text-black font-bold uppercase tracking-wider mb-6">Quick Links</h3>
                    <ul className="space-y-3 text-sm">
                        <li><NavLink to="/about" className="hover:text-white">About Us</NavLink></li>
                        <li><NavLink to="/sermons" className="hover:text-white">Sermons</NavLink></li>
                        <li><NavLink to="/ministries" className="hover:text-white">Ministries</NavLink></li>
                        <li><NavLink to="/events" className="hover:text-white">Events</NavLink></li>
                        <li><NavLink to="/give" className="hover:text-white">Give</NavLink></li>
                        <li><NavLink to="/contact" className="hover:text-white">Contact</NavLink></li>
                    </ul>
                </div>

                {/* Column 3: Ministries */}
                <div>
                    <h3 className="text-black font-bold uppercase tracking-wider mb-6">Ministries</h3>
                    <ul className="space-y-3 text-sm">
                        <li><NavLink to="/ministries/men" className="hover:text-white">Men's Ministry</NavLink></li>
                        <li><NavLink to="/ministries/women" className="hover:text-white">Women's Ministry</NavLink></li>
                        <li><NavLink to="/ministries/youth" className="hover:text-white">Youth Ministry</NavLink></li>
                        <li><NavLink to="/ministries/children" className="hover:text-white">Children's Ministry</NavLink></li>
                        <li><NavLink to="/ministries/small-groups" className="hover:text-white">Small Groups</NavLink></li>
                    </ul>
                </div>

                {/* Column 4: Visit Us */}
                <div>
                    <h3 className="text-black font-bold uppercase tracking-wider mb-6">Visit Us</h3>
                    <div className="text-sm space-y-4">
                        <p>
                            P O Box 47408, Niamey Road, Nairobi West<br />Nairobi, Kenya</p>
                        <p className="font-medium text-black">+254 798 985068</p>
                        <p>info@gracecommunity.church</p>
                        <div className="pt-2">
                            <p className="font-bold text-black">Service Times:</p>
                            <p>Sunday: 10:00 AM - 1:00 PM</p>
                            <p>Wednesday: 7:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-100 text-center text-xs text-black">
                <p>&copy; {new Date().getFullYear()} Higher Grounds Ministries International. All rights reserved.</p>
            </div>
        </footer>
    );
}