import React from "react";
import { Book } from "../types";
import { BookIcon, User, Calendar } from "lucide-react";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{book.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <User size={16} className="mr-2" />
          <p>
            {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
          </p>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar size={16} className="mr-2" />
          <p>{book.first_publish_year || "Unknown"}</p>
        </div>
        <div className="flex items-center text-gray-600">
          <BookIcon size={16} className="mr-2" />
          <p>{book.edition_count} edition(s)</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
