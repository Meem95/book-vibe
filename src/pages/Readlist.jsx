import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../utility/localStorage";
import { useEffect, useState } from "react";
import Read from "../components/Read";


const Readlist = () => {
    
  const readlists = useLoaderData();
  console.log("readlists", readlists);
  const [readBooks, setReadBooks] = useState([]);
  useEffect(() => {
    const storedReadlistIds = getStoredReadList();
    if (readlists.length > 0) {
      const readBooks = readlists.filter(readlist => storedReadlistIds.includes(readlist.bookId));
      setReadBooks(readBooks);
    }
  }, [readlists]);
    return (
        <div>
            {readBooks.map(readBook => (
        <Read key={readBook.bookId} readBook={readBook} />
      ))}
        </div>
    );
};

export default Readlist;