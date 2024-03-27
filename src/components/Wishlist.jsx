import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import { getStoredWishlist } from "../utility/localStorage";
import publish from "../assets/images/publish.svg";
import prof from "../assets/images/prof.svg";
import page from "../assets/images/page.svg";

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
      console.log(wishlistBooks, storedWishlistIds,wishlists);
    }
  }, []);
  return (

    <div className="mx-auto group  border-2 p-2 border-opacity-30 hover:no-underline focus:no-underline rounded-md mt-10">
    {wishlistBooks.map(wishlistBook => <h3 key={wishlistBook.id}>
        {wishlistBook.bookName}
              </h3>)
              }
      <section className="p-3  text-black">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md  lg:flex-row">
            <img
              src="https://source.unsplash.com/640x480/?1"
              alt=""
              className="h-52 rounded-lg"
            />
            <div className="flex flex-col flex-1 px-5 ">
              <h3 className="text-2xl font-bold ">
                
                title
              </h3>
              <p className="my-2 ">By: {}</p>
              <div className="flex flex-col lg:flex-row space-x-32 mb-5">
                <div>
                  tags
                  {/* <p className="font-bold">Tag  {
                            wishlistBooks.tags.map((tag,idx )=> <span key={idx} className="badge badge-[#23BE0A12] text-[#23BE0A] p-2 ">  #{tag} </span>)
                        }</p> */}
                </div>
                <div className="flex flex-col lg:flex-row">
               
                  <img src={publish} /> <span>Year of Publishing: </span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row space-x-20 mb-5">
                <div className="flex flex-col lg:flex-row">
                 
                  <img src={prof} /> <span> Publisher: </span>
                </div>
                <div className="flex flex-col lg:flex-row">
                  
                  <img src={page} /> <span> Page: </span>
                </div>
              </div>
                <hr className="border-dashed border-1"/>
                <div className="flex flex-col lg:flex-row space-x-2 my-5">
                 
                <div className="badge p-4 text-lg text-white bg-[#328EFF]">Category:</div>
                <div className="badge p-4  text-lg text-white bg-[#FFAC33]">Rating:</div>
                <div className="badge p-4  text-lg badge-success text-white">View Details</div>

                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
