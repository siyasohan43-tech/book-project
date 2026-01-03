import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  // 20 frontend sample books
 const fallbackBooks = [
    { id: 1, title: "Atomic Habits", author: "James Clear", rented: false },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho", rented: true },
    { id: 3, title: "Ikigai", author: "Héctor García", rented: false },
    { id: 4, title: "The Psychology of Money", author: "Morgan Housel", rented: false },
    { id: 5, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", rented: true },
    { id: 6, title: "Deep Work", author: "Cal Newport", rented: false },
    { id: 7, title: "Do Epic Shit", author: "Ankur Warikoo", rented: false },
    { id: 8, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", rented: false },
    { id: 9, title: "Wings of Fire", author: "A.P.J. Abdul Kalam", rented: false },
    { id: 10, title: "The Power of Now", author: "Eckhart Tolle", rented: true },
    { id: 11, title: "Start With Why", author: "Simon Sinek", rented: false },
    { id: 12, title: "Think and Grow Rich", author: "Napoleon Hill", rented: false },
    { id: 13, title: "Harry Potter and the Sorcerer’s Stone", author: "J.K. Rowling", rented: true },
    { id: 14, title: "The Hobbit", author: "J.R.R. Tolkien", rented: false },
    { id: 15, title: "1984", author: "George Orwell", rented: false },
    { id: 16, title: "To Kill a Mockingbird", author: "Harper Lee", rented: false },
    { id: 17, title: "The Fault in Our Stars", author: "John Green", rented: false },
    { id: 18, title: "Becoming", author: "Michelle Obama", rented: true },
    { id: 19, title: "The Lean Startup", author: "Eric Ries", rented: false },
    { id: 20, title: "The Monk Who Sold His Ferrari", author: "Robin Sharma", rented: false },
  ];

  // Set books state on mount
  useEffect(() => {
    setBooks(fallbackBooks);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5EFE6] p-10">

      {/* NAVBAR */}
      <nav className="bg-[#E8DFCA] shadow-md px-8 py-4 flex justify-between items-center rounded-2xl mb-12 border border-[#D8CDBA]">

        {/* LOGO */}
        <h1 className="text-3xl font-bold text-[#6F4E37] tracking-wide">
          📚 BeigeReads
        </h1>

        {/* SEARCH */}
        <div className="flex items-center bg-white px-4 py-2 rounded-xl shadow-sm w-full max-w-md mx-6 border border-[#D8CDBA]">
          <input
            type="text"
            placeholder="Search books..."
            className="w-full bg-transparent outline-none text-[#6F4E37]"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* LINKS */}
        <div className="space-x-6 text-lg">
          <Link to="/" className="text-[#6F4E37] hover:text-black">Home</Link>
          <Link to="/signup" className="text-[#6F4E37] hover:text-black">Signup</Link>
          <Link to="/login" className="text-[#6F4E37] hover:text-black">Login</Link>
          <Link to="/profile" className="text-[#6F4E37] hover:text-black">Profile</Link>
        </div>
      </nav>

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-[#6F4E37] mb-8">
        Explore Our Cozy Book Collection ☕📖
      </h2>

      {/* BOOK GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {books
          .filter((b) =>
            b.title?.toLowerCase().includes(search.toLowerCase()) ||
            b.author?.toLowerCase().includes(search.toLowerCase())
          )
          .map((book) => (
            <div
              key={book.id || book._id}
              className="bg-[#FAF6F0] border border-[#E3DCCE] rounded-3xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-[#6F4E37] mb-2">
                {book.title}
              </h3>
              <p className="text-[#8C6E54]">✍ {book.author}</p>
              <p className="text-[#A18D7A] text-sm mt-1">
                {book.genre || "Fiction"}
              </p>
               {/* Rented / Available Badge */}
        <span
          className={`inline-block mt-4 px-3 py-1 text-sm font-semibold rounded-full ${
            book.rented ? "bg-red-300 text-red-800" : "bg-green-300 text-green-800"
          }`}
        >
          {book.rented ? "Rented" : "Available"}
        </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
