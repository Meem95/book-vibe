
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getStoredWishlist } from "../utility/localStorage";
import Wishlist from "../components/Wishlist";




const ListedBook = () => {
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
        console.log(wishlistBooks, storedWishlistIds,wishlists);
      }
    }, []);
  
    const [tabIndex,setTabIndex] = useState(0)

  return (
    <div className="min-h-screen max-w-7xl mx-auto mt-14">
      <div className="px-8 py-2 bg-[#1313130D] text-black ">
        <div className="py-2 font-bold text-center text-3xl">
          <span> Books </span>
        </div>
      </div>
      <div className="py-2 font-bold text-center text-3xl">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 btn-success text-white w-full">
            Sort By <IoIosArrowDown size={20} />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-start  overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  text-black mt-14">
        <Link
               onClick={() => setTabIndex(0)}
               to='/listed-book/read'
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${tabIndex === 0 ? ' border border-b-0' : '  border-b' }  border-gray-400 text-black`}
        >
          <span className="text-black font-bold">Read Books</span>
        
        </Link>
        <Link
        onClick={() => setTabIndex(1)}
        to='wishlist'
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? ' border border-b-0' : '  border-b' } rounded-t-lg border-gray-400 text-black`}
        >
         
          <span className="text-black font-bold">Wishlist Books</span>
        </Link>
      </div>
      <Outlet/>
    </div>
  );
};

export default ListedBook;
