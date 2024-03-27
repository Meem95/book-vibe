import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import { getStoredReadList, getStoredWishlist } from "../utility/localStorage";

import WishlistContent from "../pages/WishlistContent";
import Read from "../pages/WishlistContent";

const Wishlist = () => {
  const wishlists = useLoaderData();
  const [wishlistBooks, setWishlistBooks] = useState([]);
  useEffect(() => {
    const storedWishlistIds = getStoredWishlist();
    if (wishlists.length > 0) {
      //const wishlistBooks = wishlists.filter(wishlist => storedWishlistIds.includes(wishlist.bookId))
      const wishlistBooks = [];
      for (const id of storedWishlistIds) {
        const wishlist = wishlists.find((wishlist) => wishlist.bookId === id);
        if (wishlist) {
          wishlistBooks.push(wishlist);
        }
      }
      setWishlistBooks(wishlistBooks);
      //console.log(wishlistBooks, storedWishlistIds,wishlists);
    }
  }, []);


  const readlists = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  useEffect(() => {
    const storedReadlistIds = getStoredReadList();
    if (readlists.length > 0) {
      const readBooks = [];
      for (const id of storedReadlistIds) {
        const readlist = readlists.find((readlist) => readlist.bookId === id);
        if (readlist) {
            readBooks.push(readlist);
        }
      }
      setWishlistBooks(setReadBooks);
      console.log(readBooks, storedReadlistIds,readlists);
    }
  }, []);
  return (

    <>
         {wishlistBooks.map(wishlistBook => (
        <WishlistContent wishlistBook={wishlistBook} key={wishlistBook.bookId} />
      ))}
         
         {readBooks.map(readBook => (
        <Read readBook={readBook} key={readBook.bookId} />
      ))}


    </>
  );
};

export default Wishlist;
