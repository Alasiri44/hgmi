import { FaPlay, FaUser, FaCalendarAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

type SermonProps = {
  videoId: string;
  title: string;
  preacher: string;
};

export default function LatestSermon({ videoId, title }: SermonProps) {
  return (
    <div className="bg-[#FDF9F0] min-h-screen font-sans">
      <header className="text-center pt-16 pb-10">
        <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-sm">
          Latest Message
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-3">
          This Week's Sermon
        </h1>
      </header>

      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          <div className="w-full md:w-1/2 bg-slate-900 flex items-center justify-center p-4 md:p-0">
            <div className="relative w-full aspect-video shadow-2xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                title={title}
                src={`https://www.facebook.com/plugins/video.php?height=414&href=${videoId}&show_text=false&width=660&t=0`}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
              {title || "Annointing Service"}
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Discover how to embrace God's promises and walk confidently into
              the new year with renewed faith and purpose.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-10 border-t border-gray-100 pt-6">
              <div className="flex items-center gap-2">
                <FaUser className="text-emerald-500" />
                <span className="text-sm font-medium">
                  Pastor Laureen Rakiro
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-emerald-500" />
                <span className="text-sm font-medium">March 1, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-emerald-500" />
                <span className="text-sm font-medium">3 hours</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="https://www.youtube.com/live/gfxoungDgf0?si=wR4esq-BcO3X6v2W"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-emerald-200">
                  <FaPlay className="text-sm" />
                  Watch in Youtube
                </button>
              </Link>
              <Link
              to='/sermons'
              >
              <button className="px-8 py-3 rounded-xl border border-gray-200 text-slate-700 font-bold hover:bg-gray-50 transition-all">
                View All Sermons
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}