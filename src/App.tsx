import React from "react";
import BookSearch from "./components/BookSearch";
import { BookProvider } from "./context/BookContext";

const App: React.FC = () => {
  return (
    <BookProvider>
      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Book Finder
          </h1>
          <BookSearch />
        </div>
      </div>
    </BookProvider>
  );
};

export default App;
