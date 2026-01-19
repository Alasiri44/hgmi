import { useState } from 'react';

export default function ContactFormCard() {
    const [isAnonymous, setIsAnonymous] = useState(false);

    return (
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-emerald-50">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 text-left">
                        Send us a Message
                    </h3>
                    <p className="text-gray-500 text-left">
                        {!isAnonymous ? 'Fill out the form below and we will get back to you shortly.': 'Fill out the form anonymously'}
                    </p>
                </div>
                
                {/* Anonymous Toggle Button */}
                <button  
                    type="button"
                    onClick={() => setIsAnonymous(!isAnonymous)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all font-bold text-sm ${
                        isAnonymous 
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-700 shadow-sm' 
                        : 'border-gray-100 text-gray-400 hover:border-emerald-200'
                    }`}
                >
                    <div className={`w-3 h-3 rounded-full ${isAnonymous ? 'bg-emerald-600 animate-pulse' : 'bg-gray-300'}`}></div>
                    {isAnonymous ? 'Sharing Anonymously' : 'Share Anonymously'}
                </button>
            </div>
            
            <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className={isAnonymous ? "opacity-40 cursor-not-allowed" : ""}>
                        <label className="block text-left text-sm font-bold text-slate-700 mb-2">Full Name</label>
                        <input 
                            type="text" 
                            disabled={isAnonymous}
                            placeholder={isAnonymous ? "---" : "John Doe"} 
                            className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-emerald-500 focus:outline-none transition-all disabled:bg-gray-50" 
                        />
                    </div>
                    <div className={isAnonymous ? "opacity-40 cursor-not-allowed" : ""}>
                        <label className="block text-left text-sm font-bold text-slate-700 mb-2">Email Address</label>
                        <input 
                            type="email" 
                            disabled={isAnonymous}
                            placeholder={isAnonymous ? "---" : "john@example.com"} 
                            className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-emerald-500 focus:outline-none transition-all disabled:bg-gray-50" 
                        />
                    </div>
                </div>
                
                <div className="text-left">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                    <select className="w-full md:w-auto p-4 rounded-xl border-2 border-gray-100 focus:border-emerald-500 focus:outline-none bg-white transition-all cursor-pointer">
                        <option>General Inquiry</option>
                        <option>Prayer Request</option>
                        <option>Joining a Ministry</option>
                        <option>Testimony</option>
                    </select>
                </div>

                <div className="text-left">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea 
                        rows={5} 
                        placeholder={isAnonymous ? "Share your heart with us anonymously..." : "How can we help you?"} 
                        className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-emerald-500 focus:outline-none transition-all"
                    ></textarea>
                </div>

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200 transition-all text-lg flex justify-center items-center gap-2">
                    {isAnonymous ? 'Send Anonymous Message' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}