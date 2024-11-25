/* eslint-disable @typescript-eslint/no-explicit-any */
import { Book } from "../types";

export const searchBooks = async (query: string): Promise<Book[]> => {
  const encodedQuery = encodeURIComponent(query.trim());
  const response = await fetch(
    `https://openlibrary.org/search.json?title=${encodedQuery}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  return data.docs.map((doc: any) => ({
    key: doc.key,
    title: doc.title,
    author_name: doc.author_name,
    first_publish_year: doc.first_publish_year,
    edition_count: doc.edition_count,
  }));
};
