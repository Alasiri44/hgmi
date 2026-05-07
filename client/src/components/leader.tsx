type LeaderProps = {
  leader: {
    _id: string;
    name: string;
    position: string;
    description: string;
    image: string;
  };
};

export default function Leader({ leader }: LeaderProps) {
  return (
    <>
      <div
        key={leader._id}
        className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow group"
      >
        <div className="relative w-full aspect-[5/5]">
          <img
            src={leader.image}
            alt={leader.name}
            className="block max-w-full h-auto lg:w-full lg:h-full object-contain lg:object-cover lg:object-top transition-transform duration-500 lg:group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>

          <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">{leader.name}</h3>

            <p className="text-emerald-400 font-semibold uppercase tracking-widest text-sm">
              {leader.position}
            </p>
          </div>
        </div>

        <div className="p-8 text-center">
          <p className="text-slate-600 leading-relaxed">{leader.description}</p>
        </div>
      </div>
    </>
  );
}
