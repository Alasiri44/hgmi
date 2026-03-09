import {
  FaCross,
  FaGlobe,
  FaHandsHelping,
  FaMapMarkerAlt,
} from "react-icons/fa";
import PageBanner from "../components/pagesBanner";
import plr from "../assets/pastorlaureen.jpg";
import rnr from "../assets/revnobert.jpg";
import Map from "../components/Map";

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Higher Ground Assembly"
        subheading="Who We are"
        paragraph="Raising Kingdom Ministries Globally by laying Apostolic and Prophetic foundations."
      />
      <div className="bg-white">
        {/* The Mandate & History */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                The Mission
              </h2>
              <div className="w-20 h-1.5 bg-emerald-500"></div>
              <p className="text-slate-600 text-lg leading-relaxed">
                Based in Nairobi West, Kenya, Higher Ground Assembly is more
                than a local church; it is a global mandate. Under the spiritual
                covering of Rev. Nobert and Pastor Laureen Rakiro, we are
                committed to the perfection of saints and the maturity of the
                five-fold ministry.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                We believe in preaching the gospel of the kingdom and showing
                its reality to the entire world through foundational biblical
                truths and the power of the Holy Spirit.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1510519133417-2407cbb2241f?q=80&w=1600&auto=format&fit=crop"
                alt="Church Sanctuary"
                className="rounded-[2rem] shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                    <FaGlobe size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase">
                      Impact
                    </p>
                    <p className="text-xl font-bold text-slate-900">
                      Global Ministry
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="bg-slate-50 py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-slate-900">
                Our Leadership
              </h2>
              <p className="text-slate-500 mt-4">
                Led by the Spirit, serving the People
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Rev. Nobert - Card with Image and Bottom-aligned Details */}
              <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative w-full aspect-[5/5]">
                  <img
                    src={rnr}
                    alt="Rev. Nobert Rakiro"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>

                  {/* Text anchored to the bottom of the image */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">
                      Rev. Nobert Rakiro
                    </h3>
                    <p className="text-emerald-400 font-semibold uppercase tracking-widest text-sm">
                      Senior Pastor & Visionary
                    </p>
                  </div>
                </div>
                <div className="p-8 text-center">
                  <p className="text-slate-600 leading-relaxed">
                    Rev. Nobert is a man of prayer and deep apostolic insight.
                    His ministry is focused on raising a generation of believers
                    who are established in the truth and walk in the fullness of
                    their spiritual inheritance.
                  </p>
                </div>
              </div>

              {/* Pastor Laureen - Card with Image and Bottom-aligned Details */}
              <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative w-full aspect-[5/5]">
                  <img
                    src={plr}
                    alt="Pastor Laureen Rakiro"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>

                  {/* Text anchored to the bottom of the image */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                    <h3 className="text-2xl font-bold text-white">
                      Pastor Laureen Rakiro
                    </h3>
                    <p className="text-emerald-400 font-semibold uppercase tracking-widest text-sm">
                      Senior Pastor
                    </p>
                  </div>
                </div>
                <div className="p-8 text-center">
                  <p className="text-slate-600 leading-relaxed">
                    Pastor Laureen serves with a heart of selfless love and
                    compassion. She is passionate about the perfection of the
                    saints, the health of godly families, and mentoring leaders
                    across the five-fold ministry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Grid */}
        <section className="py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="space-y-4">
                <FaCross className="text-emerald-500 text-3xl" />
                <h4 className="text-xl font-bold text-slate-900">
                  Apostolic Foundation
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We believe in the restoration of the apostolic and prophetic
                  ministry as the foundation for modern church growth.
                </p>
              </div>
              <div className="space-y-4">
                <FaHandsHelping className="text-emerald-500 text-3xl" />
                <h4 className="text-xl font-bold text-slate-900">
                  Kingdom Community
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Unity, loyalty, and selfless love are the hallmarks of our
                  fellowship in Nairobi West and beyond.
                </p>
              </div>
              <div className="space-y-4">
                <FaMapMarkerAlt className="text-emerald-500 text-3xl" />
                <h4 className="text-xl font-bold text-slate-900">
                  Nairobi West Home
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Strategically located on Niamey Road to serve as a light in
                  the city and a hub for global impact.
                </p>
              </div>
            </div>
            < Map/>
          </div>
        </section>
      </div>
    </>
  );
}
