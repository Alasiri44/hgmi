import ContactFormCard from '../components/contactFormCard';
import PageBanner from '../components/pagesBanner';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Contact() {
    return (
        <div className="pt-20 bg-[#FDF9F0] min-h-screen font-sans">
            {/* 1. Page Banner */}
            <PageBanner 
                title="Get In Touch"
                subheading="Contact HGMI"
                paragraph="Have a question, need prayer, or want to learn more about our community? We are here to listen and walk alongside you on your journey of faith."
            />

            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    
                    {/* 2. Contact Form Card */}
                    < ContactFormCard/>

                    {/* 3. Reach Us Info (Dark Themed to match the Give Page logic) */}
                    <div className="space-y-8">
                        <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                            {/* Decorative Glow */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>
                            
                            <h3 className="text-2xl font-serif font-bold mb-8 relative z-10">Our Information</h3>
                            
                            <div className="space-y-8 relative z-10">
                                <div className="flex items-start gap-4">
                                    <div className="bg-emerald-500/20 p-3 rounded-lg text-emerald-400">
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-emerald-400 uppercase text-xs tracking-widest mb-1">Visit Us</h4>
                                        <p className="text-slate-300">P O Box 47408, Niamey Road, Nairobi West</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-emerald-500/20 p-3 rounded-lg text-emerald-400">
                                        <FaPhone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-emerald-400 uppercase text-xs tracking-widest mb-1">Call Us</h4>
                                        <p className="text-slate-300">+254 798 985068</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-emerald-500/20 p-3 rounded-lg text-emerald-400">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-emerald-400 uppercase text-xs tracking-widest mb-1">Email Us</h4>
                                        <p className="text-slate-300">highergroundassembly@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-emerald-500/20 p-3 rounded-lg text-emerald-400">
                                        <FaClock size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-emerald-400 uppercase text-xs tracking-widest mb-1">Office Hours</h4>
                                        <p className="text-slate-300">Sunday 9:00 AM - 5:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Prompt Card */}
                        <div className="bg-emerald-600 p-8 rounded-3xl text-white shadow-xl flex items-center justify-between">
                            <div>
                                <h4 className="text-xl font-bold mb-1">Need Immediate Prayer?</h4>
                                <p className="text-emerald-100 text-sm">Our prayer team is standing by to support you.</p>
                            </div>
                            <button className="bg-white text-emerald-700 px-6 py-2 rounded-xl font-bold hover:bg-emerald-50 transition-colors">
                                Prayer Wall
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}