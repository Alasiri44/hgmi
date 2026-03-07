import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import audience from '../assets/discipleship.jpg'

export default function WelcomingSection() {
  const points = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      ),
      title: "Global Reach",
      description: "Preaching the gospel of the kingdom and showing its reality to the entire world.",
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.174L10.778 2.22a.75.75 0 011.166 0l6.517 7.954a.75.75 0 01-.131 1.054L12.982 15.66a.75.75 0 01-1.166 0l-5.348-4.432a.75.75 0 01-.208-1.054z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.982 15.66l5.348-4.432a.75.75 0 011.166 0L21.033 12.22a.75.75 0 010 1.166l-8.517 7.954a.75.75 0 01-1.166 0l-8.517-7.954a.75.75 0 010-1.166L4.26 10.174a.75.75 0 011.166 0z"
          />
        </svg>
      ),
      title: "Foundational Truths",
      description: "Laying Apostolic and Prophetic foundations for believers and churches globally.",
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8a1.5 1.5 0 011.5-1.5h4.34zM10.5 21.75a6.002 6.002 0 01-5.783-4.133 1.5 1.5 0 011.183-1.817H10.5m0-1.5h-.75a1.5 1.5 0 011.5 1.5v4.8zM21.75 12a6.002 6.002 0 01-4.133-5.783 1.5 1.5 0 01-1.817 1.183H15M10.5 7.5a6 6 0 015.84-7.38v4.8a1.5 1.5 0 01-1.5 1.5h-4.34zm0 0h.75a1.5 1.5 0 01-1.5-1.5V1.125m10.5 10.5v-.75a1.5 1.5 0 011.5 1.5h-4.8z"
          />
        </svg>
      ),
      title: "Mature Ministries",
      description: "Perfection of saints and maturity of five-fold ministry across the world.",
    },
  ];

  return (
    <div className="bg-[#F8F7F2] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="w-full md:w-1/2 relative">
          <div className="rounded-[40px] overflow-hidden shadow-2xl">
            <img src={audience} alt="HGMI Banner" className="w-full h-100" />
          </div>
          <div className="absolute bottom-[-20px] left-8 bg-[#EFB839] text-[#1E3A5F] px-8 py-5 rounded-xl font-bold text-center leading-tight shadow-xl">
            <span className="text-2xl">10+</span>
            <br />
            <span className="text-sm font-semibold">Countries<br />Impacted</span>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#EFB839]">
            NEW HERE?
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3A5F] mt-4 mb-8 leading-tight">
            Our Call & Mission
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-xl">
            Whether you're exploring faith for the first time or looking for a
            spiritual home, you're welcome here. At Higher Grounds, we are
            dedicated to raising kingdom ministries globally.
          </p>

          <div className="space-y-6 w-full max-w-lg">
            {points.map((point) => (
              <div key={point.id} className="flex items-start gap-4">
                <div className="bg-[#FBF6E9] text-[#EFB839] p-3 rounded-lg flex-shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1E3A5F]">
                    {point.title}
                  </h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-12 w-full">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#1E3A5F] hover:bg-[#152945] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-[#1E3A5F]/20 text-sm"
            >
              Get Connected
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/ministries"
              className="inline-flex items-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 px-8 py-4 rounded-xl font-bold transition-all text-sm"
            >
              View Ministries
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}