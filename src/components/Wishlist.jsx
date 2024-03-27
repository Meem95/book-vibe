import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlist } from "../utility/localStorage";
import WishlistContent from "../pages/WishlistContent";


const Wishlist = () => {
  const wishlists = useLoaderData();
  const [wishlistBooks, setWishlistBooks] = useState([]);
  useEffect(() => {
    const storedWishlistIds = getStoredWishlist();
    if (wishlists.length > 0) {
      const wishlistBooks = wishlists.filter(wishlist => storedWishlistIds.includes(wishlist.bookId));
      setWishlistBooks(wishlistBooks);
    }
  }, [wishlists]);


  return (
    <>
      {wishlistBooks.map(wishlistBook => (
        <WishlistContent key={wishlistBook.bookId} wishlistBook={wishlistBook} />
      ))}

      
    </>
  );
};

export default Wishlist;
