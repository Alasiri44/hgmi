import { FaBook, FaUser, FaArrowRight } from "react-icons/fa";

type Book = {
  title: string;
  subheading: string;
  image: string;
  price: string;
  format: string; // e.g. "Hard Copy"
  link: string;
  author: string;
  description: string;
  buttonText: string;
};

type BookCardProps = {
  book: Book;
};

export default function BookCard({ book }: BookCardProps) {

  // Helper to ensure high-res images
  const getHighResUrl = (url: string) => {
    if (!url) return "";
    if (url.includes("unsplash.com")) {
      return url.replace(/q=\d+/, "q=100").replace(/w=\d+/, "w=1600");
    }
    return url;
  };

  return (
    <>
      {/* Book Image */}
      <div className=" relative group overflow-hidden rounded-3xl bg-gray-200">
        <img
          src={getHighResUrl(book.image)}
          alt={book.title}
        
        />

        {/* Price Badge */}
        <div className="absolute top-6 left-6 bg-emerald-600 text-white px-5 py-2 rounded-xl shadow-lg font-bold">
          {book.price}
        </div>
      </div>

      {/* Book Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">
          {book.subheading}
        </span>

        <h2 className="text-4xl font-serif font-bold text-slate-900 leading-tight">
          {book.title}
        </h2>

        <p className="text-slate-600 text-lg leading-relaxed">
          {book.description}
        </p>

        {/* Book Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F3EFE0]/60 p-6 rounded-2xl border border-emerald-50">
          <div className="flex items-center gap-3 text-slate-700">
            <FaBook className="text-emerald-600" />
            <span className="font-medium">{book.format.replace(/_/g, " ").toUpperCase()}</span>
          </div>

          <div className="flex items-center gap-3 text-slate-700">
            <FaUser className="text-emerald-600" />
            <span className="font-medium">{book.author}</span>
          </div>
        </div>

        <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-emerald-200 group">
          <a href={book.link} target="_blank" rel="noopener noreferrer">
            {book.buttonText}
          </a>
          <FaArrowRight className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </>
  );
}