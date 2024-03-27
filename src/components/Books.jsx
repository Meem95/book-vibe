import { useEffect, useState } from "react";
import BooksCard from "./BooksCard";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    
    <div className="min-h-screen max-w-7xl mx-auto">
     <section className="py-6 sm:py-12 text-gray-100">
	<div className="container p-6 mx-auto space-y-8">
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
			
        {books.map((book) => (
        <BooksCard key={book.bookId} books={book} />
        ))}

		</div>
	</div>
</section>
    </div>
  );
};

export default Books;
