import PropTypes from 'prop-types';
import publish from "../assets/images/publish.svg";
import prof from "../assets/images/prof.svg";
import page from "../assets/images/page.svg";
import { Link } from 'react-router-dom';

const Read = ({ readBook }) => {
 // console.log("readBook", readBook);
  
  const {
    bookName,
    author,
    image,
    rating,
    yearOfPublishing,
    totalPages,
    category,
    publisher,
    bookId
  } = readBook;
  //console.log("Sorting Criteria:", rating);
  return (
    <div>
      <div className="mx-auto group  border-2 p-2 border-opacity-30 hover:no-underline focus:no-underline rounded-md mt-10">
        <section className="p-3  text-black">
          <div className="container mx-auto space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md  lg:flex-row">
          
              <img
                src={image}
                alt=""
                className="lg:h-52 rounded-lg"
              />
              <div className="flex flex-col flex-1 px-5 ">
                <h3 className="text-2xl font-bold ">{bookName}</h3>
                <p className="my-2 ">By: {author}</p>
                <div className="flex flex-col lg:flex-row space-x-15 mb-5 ">
                  <div>
                    <p className="font-bold">Tag  {
                      readBook.tags.map((tag,idx )=> <span key={idx} className="badge badge-[#23BE0A12] text-[#23BE0A] p-2 ">  #{tag} </span>)
                      }</p>
                  </div>
                  <div className="flex flex-col lg:flex-row ">
                  <div><img  className="lg:w-full" src={publish} /></div>
                  <div className="w-full"> Year of Publishing: {yearOfPublishing}</div>
                     
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row flex-1 mb-5  ">
                  <div className="flex flex-col lg:flex-row w-full ">
                    <img className="w-[25px] " src={prof} /> <span className="lg:w-full "> Publisher: {publisher}</span>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:w-full ">
                    <img  className="w-[25px] "  src={page} /> <span className="lg:w-full "> Page: {totalPages} </span>
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
                  <Link to={`/book/${bookId}`}><div className="badge p-4  text-lg badge-success text-white">
                    View Details
                  </div></Link>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

Read.propTypes = {
  readBook: PropTypes.object.isRequired,
};

export default Read;
