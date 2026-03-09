import axios from "axios";
import { useEffect, useState } from "react";
import EventCard from "../components/event";
import { FaCalendarAlt } from "react-icons/fa";

type Event = {
  id: number;
  title: string;
  subheading: string;
  image: string;
  date: string;
  time: string;
  location: string;
  description: string;
  buttonText: string;
};
export default function EventCardList() {
  const [eventData, setEventData] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/events");
        setEventData(response.data);
        setLoading(false);
      } catch (err: any) {
        console.log(err);
        setError("Error getting the events");
      }
    };

    fetchData();
  }, []);
  error && <p>Error getting the ministries</p>;
  loading && <p>The page is loading....</p>;

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-20">
        {eventData.length > 0 ? (
          <div className="space-y-32">
            {eventData.map((event, index) => (
              <div
                key={event.title}
                className={`flex flex-col ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-12`}
              >
                < EventCard event={event}/>
              </div>
            ))}
          </div>
        ) : (
          /* No Events State */
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-emerald-50">
            <FaCalendarAlt className="mx-auto text-emerald-200 text-6xl mb-4" />
            <h3 className="text-2xl font-serif font-bold text-slate-900">
              No Events Scheduled
            </h3>
            <p className="text-gray-500 mt-2">
              Check back soon for new updates and gatherings!
            </p>
          </div>
        )}
      </section>
    </>
  );
}
