import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8 text-yellow-400">
        Admin Dashboard
      </h1>

      <table className="w-full bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden">
        <thead className="bg-yellow-600 text-black">
          <tr>
            <th className="p-4">Title</th>
            <th>Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {books.map((b) => (
            <tr key={b._id} className="border-b border-white/20">
              <td className="p-4">{b.title}</td>
              <td>{b.author}</td>
              <td className={b.isRented ? "text-red-400" : "text-green-400"}>
                {b.isRented ? "Rented" : "Available"}
              </td>
              <td>
                <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg">
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="mt-10 bg-yellow-500 px-6 py-3 text-black rounded-xl">
        ➕ Add New Book
      </button>
    </div>
  );
};

export default AdminDashboard;
