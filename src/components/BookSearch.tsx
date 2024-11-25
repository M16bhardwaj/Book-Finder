import React, { useState } from "react";
import { Search } from "lucide-react";
import { searchBooks } from "../utils/api";
import { useBookContext } from "../context/BookContext";
import BookList from "./BookList";

const BookSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const { setBooks, setIsLoading } = useBookContext();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsLoading(true);
      const results = await searchBooks(query);
      setBooks(results);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex items-center border-b-2 border-gray-300 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search for books..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            <Search size={24} />
          </button>
        </div>
      </form>
      <BookList />
    </div>
  );
};

export default BookSearch;
