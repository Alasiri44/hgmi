import EventCard from "../components/event";
import { FaCalendarAlt } from "react-icons/fa";
import { client } from "../lib/sanity";
import { useState, useEffect } from "react";

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
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const eventsQuery = `*[_type == "event"]{
        _id,
        title,
        subheading,
        date,
        description,
        location,
        time,
        buttonText,
        "image": image.asset->url
      }`;

      const eventsData = await client.fetch(eventsQuery);

      setEvents(eventsData);
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-20">
        {events.length > 0 ? (
          <div className="space-y-32">
            {events.map((event: Event, index: number) => (
              <div
                key={event.title}
                className={`flex flex-col ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-12`}
              >
                <EventCard event={event} />
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
