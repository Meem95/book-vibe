import publish from "../assets/images/publish.svg";
import prof from "../assets/images/prof.svg";
import page from "../assets/images/page.svg";
import PropTypes from 'prop-types'
const WishlistContent = ({ wishlistBook }) => {
  const {
    bookName,
    author,
    image,
    rating,
    yearOfPublishing,
    totalPages,
    category,
    publisher
  } = wishlistBook;
  console.log('wishlistBook',wishlistBook);
  return (
    <div>
      <div className="mx-auto group  border-2 p-2 border-opacity-30 hover:no-underline focus:no-underline rounded-md mt-10">
        <section className="p-3  text-black">
          <div className="container mx-auto space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md  lg:flex-row">
              <img
                src={image}
                alt=""
                className="h-52 rounded-lg"
              />
              <div className="flex flex-col flex-1 px-5 ">
                <h3 className="text-2xl font-bold ">{bookName}</h3>
                <p className="my-2 ">By: {author}</p>
                <div className="flex flex-col lg:flex-row space-x-15 mb-5 ">
                  <div>
                    tags
                    <p className="font-bold">Tag  {
                          wishlistBook.tags.map((tag,idx )=> <span key={idx} className="badge badge-[#23BE0A12] text-[#23BE0A] p-2 ">  #{tag} </span>)
                      }</p>
                  </div>
                  <div className="flex flex-col lg:flex-row ">
                  <div><img src={publish} /></div>
                  <div className="w-full"> Year of Publishing: {yearOfPublishing}</div>
                     
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row space-x-20 mb-5">
                  <div className="flex flex-col lg:flex-row">
                    <img src={prof} /> <span> Publisher: {publisher}</span>
                  </div>
                  <div className="flex flex-col lg:flex-row">
                    <img src={page} /> <span> Page: {totalPages} </span>
                  </div>
                </div>
                <hr className="border-dashed border-1" />
                <div className="flex flex-col lg:flex-row space-x-2 my-5">
                  <div className="badge p-4 text-lg text-white bg-[#328EFF]">
                    Category: {category}
                  </div>
                  <div className="badge p-4  text-lg text-white bg-[#FFAC33]">
                    Rating: {rating}
                  </div>
                  <div className="badge p-4  text-lg badge-success text-white">
                    View Details
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
WishlistContent.propTypes = {
  wishlistBook:PropTypes.object.isRequired,
}
export default WishlistContent;
