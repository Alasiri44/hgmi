import SermonPlayer from "../components/sermon";
import { FaPlay, FaUser, FaCalendarAlt, FaClock } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-[#FDF9F0] min-h-screen font-sans">
      {/* Header Section */}
      <header className="text-center pt-16 pb-10">
        <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-sm">
          Latest Message
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-3">
          This Week's Sermon
        </h1>
      </header>

      {/* Sermon Card Section */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          {/* Left Side: Video/Thumbnail Placeholder */}
          <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-[400px] group">
            {/* Replace with actual thumbnail or SermonPlayer component */}
            <SermonPlayer
              videoId="56oZSNGd93o"
              title="Sunday Service | Walking in Faith"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 pointer-events-none"></div>

            </div>
          {/* Right Side: Content */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="inline-block px-4 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wide mb-6 self-start">
              New Year, New Faith
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
              Walking in Faith: Trusting God's Plan
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Discover how to embrace God's promises and walk confidently into
              the new year with renewed faith and purpose.
            </p>

            {/* Metadata Icons */}
            <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-10 border-t border-gray-100 pt-6">
              <div className="flex items-center gap-2">
                <FaUser className="text-emerald-500" />
                <span className="text-sm font-medium">
                  Pastor John Matthews
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-emerald-500" />
                <span className="text-sm font-medium">January 5, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-emerald-500" />
                <span className="text-sm font-medium">42 min</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-emerald-200">
                <FaPlay className="text-sm" />
                Watch Now
              </button>
              <button className="px-8 py-3 rounded-xl border border-gray-200 text-slate-700 font-bold hover:bg-gray-50 transition-all">
                View All Sermons
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
