import { FaArrowRight } from "react-icons/fa";
import MinistryCard from "../components/ministry";
import { useEffect, useState } from "react";
import axios from "axios";

type Ministry = {
  id: number;
  title: string;
  image: string;
  subheading: string;
  description: string;
  tags: string[];
  time: string;
  location: string;
};

export default function MinistryCardList() {
  const [ministryData, setMinistryData] = useState<Ministry[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://hgmi-backend.onrender.com//ministries");
        setMinistryData(response.data);
        setLoading(false);
      } catch (err: any) {
        console.log("Error getting the data", err);
        setError(err);
      }
    };

    fetchData();
  }, []);

  error && <p>Error getting the ministries</p>;
  loading && <p>The page is loading....</p>;
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {ministryData.map((m, index) => (
          <div
            key={m.title}
            className={`flex flex-col ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-12`}
          >
            <MinistryCard image={m.image} title={m.title} />

            {/* Content Section */}
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">
                {m.subheading}
              </span>
              <h2 className="text-4xl font-serif font-bold text-slate-900 leading-tight">
                {m.title}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {m.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {m.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-[#F3EFE0] text-slate-700 rounded-full text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meeting Times Card */}
              <div className="bg-[#F3EFE0]/60 p-6 rounded-2xl border border-emerald-50 space-y-3">
                <div className="flex items-center gap-3 text-slate-700">
                  <span className="text-emerald-600">🕒</span>
                  <span className="font-medium">{m.time}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <span className="text-emerald-600">📍</span>
                  <span className="font-medium">{m.location}</span>
                </div>
              </div>

              <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-emerald-200 group">
                Get Connected
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
