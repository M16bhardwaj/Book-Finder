import React from "react";
import { useBookContext } from "../context/BookContext";
import BookCard from "./BookCard";
import { Loader } from "lucide-react";

const BookList: React.FC = () => {
  const { books, isLoading } = useBookContext();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Loader className="animate-spin" size={48} />
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <p className="text-center text-gray-600">
        No books found. Try searching for a book!
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
};

export default BookList;
