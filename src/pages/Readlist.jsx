import { useLoaderData, useOutletContext } from "react-router-dom";
import { getStoredReadList } from "../utility/localStorage";
import { useEffect, useState } from "react";
import Read from "../components/Read";

const Readlist = () => {
  const { sortingCriteria } = useOutletContext();
  const readlists = useLoaderData();
  const [sortedReadBooks, setSortedReadBooks] = useState([]);

  useEffect(() => {
    const storedReadlistIds = getStoredReadList();
    const storedReadlistBooks = readlists.filter((readlist) =>
      storedReadlistIds.includes(readlist.bookId)
    );
    const sortedBooks = storedReadlistBooks.sort((a, b) => {
      if (sortingCriteria === "rating") {
        return a.rating - b.rating;
      }
      if (sortingCriteria === "totalPages") {
        return a.totalPages - b.totalPages;
      }
      if (sortingCriteria === "yearOfPublishing") {
        return a.yearOfPublishing - b.yearOfPublishing;
      }
      return 0;
    });

    setSortedReadBooks(sortedBooks);
  }, [sortingCriteria, readlists]);

  return (
    <div>
      {sortedReadBooks.map((readBook) => (
        <Read key={readBook.bookId} readBook={readBook} />
      ))}
    </div>
  );
};

export default Readlist;
