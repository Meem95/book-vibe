
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";

const ListedBook = () => {
   
    const [tabIndex,setTabIndex] = useState(0)
    const [sortingCriteria, setSortingCriteria] = useState("");
    const handleSortBy = (criteria) => {
      setSortingCriteria(criteria);
    
    };
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
            <button onClick={() => handleSortBy("rating")}>Rating</button>
            </li>
            <li>
          <button onClick={() => handleSortBy("totalPages")}>Number of Pages</button>
        </li>
        <li>
          <button onClick={() => handleSortBy("yearOfPublishing")}>Published Year</button>
        </li>
          </ul>
        </div>
      </div>
      <div className="flex items-start  overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  text-black mt-14">
        <Link
               onClick={() => setTabIndex(0)}
               to=''
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
      <Outlet context={{ sortingCriteria }} />

    </div>
  );
};

export default ListedBook;
