import { toast } from "react-toastify";

const getStoredWishlist = () =>{
    const storedWishlist = localStorage.getItem('wishlist');
    if(storedWishlist){
        return JSON.parse(storedWishlist)
    }
    return [];
}
const saveWishlist = bookId => {
    const storedWishlists = getStoredWishlist();
    const exists = storedWishlists.find(wishlistId => wishlistId === bookId);
    if(exists) {
        return toast('Already BookMarked')
    }
    storedWishlists.push(bookId);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlists))
        toast.success('Blog Bookmarked Successfully')
       
}
const getStoredReadList = () =>{
    const storedReadList = localStorage.getItem('read');
    if(storedReadList){
        return JSON.parse(storedReadList)
    }
    return [];
}
const saveReadList= bookId => {
    const storedReadlists = getStoredWishlist();
    const exists = storedReadlists.find(ReadId => ReadId === bookId);
    console.log(exists)
    if(exists) {
        return toast('Already BookMarked')
    }
    storedReadlists.push(bookId);
        localStorage.setItem('wishlist', JSON.stringify(storedReadlists))
        toast.success('Blog Bookmarked Successfully')
       
}
export{getStoredWishlist, saveWishlist, getStoredReadList, saveReadList}