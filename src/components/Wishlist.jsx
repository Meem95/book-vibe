import { useEffect, useState } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import { getStoredWishlist } from "../utility/localStorage";
import WishlistContent from "../pages/WishlistContent";


const Wishlist = () => {
  const { sortingCriteria } = useOutletContext();
  const wishlists = useLoaderData();
  const [wishlistBooks, setWishlistBooks] = useState([]);

  //const [sortedReadBooks, setSortedReadBooks] = useState([]);


  useEffect(() => {
    const storedWishlistIds = getStoredWishlist();
    const storedReadlistBooks = wishlists.filter((wishlist) =>
    storedWishlistIds.includes(wishlist.bookId)
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

    setWishlistBooks(sortedBooks);
  }, [sortingCriteria, wishlists]);









  // useEffect(() => {
  //   const storedWishlistIds = getStoredWishlist();
  //   if (wishlists.length > 0) {
  //     const wishlistBooks = wishlists.filter(wishlist => storedWishlistIds.includes(wishlist.bookId));
  //     setWishlistBooks(wishlistBooks);
  //   }
  // }, [wishlists]);


  return (
    <>
      {wishlistBooks.map(wishlistBook => (
        <WishlistContent key={wishlistBook.bookId} wishlistBook={wishlistBook} />
      ))}

      
    </>
  );
};

export default Wishlist;
