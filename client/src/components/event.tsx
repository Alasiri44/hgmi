import { useState } from "react";
import { FaClock, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

type Event = {
  title: string;
  subheading: string;
  image: string;
  date: string;
  time: string;
  location: string;
  description: string;
  buttonText: string;
};

type EventCardProps = {
  event: Event;
};

export default function EventCard({ event }: EventCardProps) {
    const [canZoom, setCanZoom] = useState<boolean>(true)

    // Helper to ensure Unsplash or external URLs request high-res versions
  const getHighResUrl = (url: string) => {
    if (url.includes('unsplash.com')) {
      // Force quality to 100 and width to 1600px for sharpness on all screens
      return url.replace(/q=\d+/, 'q=100').replace(/w=\d+/, 'w=1600');
    }
    return url;
  };
  return (
    <>
      {/* Event Image */}
      <div className="w-full lg:w-1/2 relative group overflow-hidden rounded-3xl bg-gray-200">
        <img
        src={getHighResUrl(event.image)}
        alt={event.title}
        className={`w-full h-[450px] object-cover shadow-xl transition-transform duration-500 antialiased ${
          canZoom ? "group-hover:scale-[1.05]" : ""
        }`}
        style={{ 
          imageRendering: 'auto', // Ensures the browser uses the best interpolation
          WebkitBackfaceVisibility: 'hidden', // Prevents blur during the scale transition
          transform: 'translateZ(0)' // Forces GPU acceleration for clearer rendering
        }}
        onLoad={(e) => {
          const img = e.currentTarget;
          // Only allow zoom if the image is at least 1.5x the size of the container
          if (img.naturalHeight < 900 || img.naturalWidth < 1200) {
            setCanZoom(false);
          }
        }}
      />

        {/* Date Badge Overlay */}
        <div className="absolute top-6 left-6 bg-emerald-600 text-white px-5 py-2 rounded-xl shadow-lg font-bold">
          {event.date}
        </div>
      </div>

      {/* Event Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">
          {event.subheading}
        </span>
        <h2 className="text-4xl font-serif font-bold text-slate-900 leading-tight">
          {event.title}
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          {event.description}
        </p>

        {/* Event Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F3EFE0]/60 p-6 rounded-2xl border border-emerald-50">
          <div className="flex items-center gap-3 text-slate-700">
            <FaClock className="text-emerald-600" />
            <span className="font-medium">{event.time}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-700">
            <FaMapMarkerAlt className="text-emerald-600" />
            <span className="font-medium">{event.location}</span>
          </div>
        </div>

        <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-emerald-200 group">
          {event.buttonText}
          <FaArrowRight className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </>
  );
}
