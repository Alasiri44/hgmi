import BookCard from "../components/book";
import { FaBookOpen } from "react-icons/fa";
import { client } from "../lib/sanity";
import { useState, useEffect } from "react";

type Book = {
  _id: string;
  title: string;
  subheading: string;
  image: string;
  price: string;
  format: string;
  link: string;
  author: string;
  description: string;
  buttonText: string;
};

export default function BookCardList() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const booksQuery = `*[_type == "book"]{
        _id,
        title,
        subheading,
        price,
        format,
        description,
        author,
        link,
        buttonText,
        "image": image.asset->url
      }`;

      const booksData = await client.fetch(booksQuery);

      setBooks(booksData);
    };

    fetchData();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {books.length > 0 ? (
        <div className="space-y-32">
          {books.map((book, index: number) => (
            <div
              key={book._id}
              className={`flex flex-col ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-12`}
            >
              <BookCard book={book} />
            </div>
          ))}
        </div>
      ) : (
        /* No Books State */
        <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-emerald-50">
          <FaBookOpen className="mx-auto text-emerald-200 text-6xl mb-4" />
          <h3 className="text-2xl font-serif font-bold text-slate-900">
            No Books Available
          </h3>
          <p className="text-gray-500 mt-2">
            Check back soon for new book releases!
          </p>
        </div>
      )}
    </section>
  );
}