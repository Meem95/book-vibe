import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveReadList, saveWishlist } from "../utility/localStorage";

const SingleBook = () => {
  const book = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const bk = book.find((bk) => bk.bookId === idInt);
  console.log("home book", bk);

  const addToWishList = () => {
    saveWishlist(idInt);
  };
  const addToRead = () => {
    saveReadList(idInt);
  };

  return (
    <div className=" text-gray-50 min-h-screen max-w-7xl mx-auto mt-10">
      <div className="container grid grid-cols-12 mx-auto mt-7">
        <div
          className="flex flex-col justify-center col-span-12 align-middle  lg:col-span-6 lg:h-full rounded-3xl"
         
         
        ><img
            src={bk.image}
            className="lg:max-w-sm rounded-lg "
          /></div>
        <div className="flex flex-col text-black col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-3xl font-bold">{bk.bookName}.</h1>
            <p>By:{bk.author}</p>
          </div>
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-xl ">{bk.category}</h1>
          </div>
          <div className="pt-6 pb-4 space-y-2">
            <p>
              <span className="font-bold">Review:</span> {bk.review}{" "}
            </p>
          </div>
          <div className="pt-6 pb-4 space-y-2">
            <p className="font-bold">
              Tag{" "}
              {bk.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="badge badge-[#23BE0A12] text-[#23BE0A] p-2 "
                >
                  {" "}
                  #{tag}{" "}
                </span>
              ))}
            </p>
          </div>
          <div className="pt-6 pb-4 space-y-2">
            <div className="overflow-x-auto">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Number of Pages:</td>
                    <td>{bk.totalPages}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Publisher:</td>
                    <td>{bk.publisher}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Year of Publishing:</td>
                    <td>{bk.yearOfPublishing}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Rating:</td>
                    <td>{bk.rating}</td>
                  </tr>
                </tbody>
              </table>
              <div className="navbar-end space-x-2 space-y-5 mt-5 flex flex-col lg:flex-row lg:space-y-0 justify-start">
                <a
                  onClick={addToRead}
                  className="btn  btn-neutral bg-white text-black "
                >
                  Read
                </a>
                <a onClick={addToWishList} className="btn btn-info text-white">
                  Wishlist
                </a>
              </div>
            </div>
          </div>

          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
