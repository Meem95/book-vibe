import { toast } from "react-toastify";

const getStoredWishlist = () => {
  const storedWishlist = localStorage.getItem("wishlist");
  console.log("wishlist11111111", storedWishlist);
  if (storedWishlist) {
    return JSON.parse(storedWishlist);
  }
  return [];
};
const saveWishlist = (bookId) => {
  // const storedWishlists = getStoredWishlist();
  // console.log("wishlist11",storedWishlists)
  // const exists = storedWishlists.find(wishlistId => wishlistId === bookId);
  // console.log("wishlist",exists)
  // if(exists) {
  //     return toast('Already Wishlisted')
  // }
  // storedWishlists.push(bookId);
  //     localStorage.setItem('wishlist', JSON.stringify(storedWishlists))
  //     toast.success('Book Wishlist Successfully')

  const storedWishlists = getStoredWishlist();
  const storedReadList = getStoredReadList();
  if (!storedWishlists) {
    return toast.error("Failed to load wishlist data.");
  }

  if (!storedReadList) {
    return toast.error("Failed to load read list data.");
  }
  console.log("wishlist11", storedWishlists);
  const existsInReadList = storedReadList.includes(bookId);
  if (existsInReadList) {
    return toast("This book is already marked as read.");
  }

  const exists = storedWishlists.find((wishlistId) => wishlistId === bookId);
  console.log("wishlist", exists);
  if (exists) {
    return toast("This book is already wishlist.");
  }

  storedWishlists.push(bookId);
  localStorage.setItem("wishlist", JSON.stringify(storedWishlists));
  toast.success("Book added to wishlist successfully");
};
const getStoredReadList = () => {
  const storedReadList = localStorage.getItem("readlist");
  console.log("storedReadList", storedReadList);
  if (storedReadList) {
    return JSON.parse(storedReadList);
  }
  return [];
};
const saveReadList = (bookId) => {

  const storedReadlists = getStoredReadList();
  const storedWishlist = getStoredWishlist(); 
  
  console.log("read1", storedReadlists);

  const existsInWishlist = storedWishlist.includes(bookId);
  if (existsInWishlist) {
    return toast("This book is already wishlist.");
  }
  const exists = storedReadlists.find((ReadId) => ReadId === bookId);
  console.log("read", exists);
  if (exists) {
    return toast("This book is already marked as read.");
  }

  storedReadlists.push(bookId);
  localStorage.setItem("readlist", JSON.stringify(storedReadlists));
  toast.success("Book marked as read successfully");
};
export { getStoredWishlist, saveWishlist, getStoredReadList, saveReadList };
