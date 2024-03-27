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
    if(!exists) {
        storedWishlists.push(bookId);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlists))
    }

}
export{getStoredWishlist, saveWishlist}