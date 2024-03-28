// import { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import Readlist from "../pages/Readlist";

// const ListedBooksTab = () => {
//     const [sortingCriteria, setSortingCriteria] = useState("");
//     const handleSortBy = (criteria) => {
//       setSortingCriteria(criteria);
    
//     };
 
//     const value =sortingCriteria;
    
//     console.log("value",value)
//     return (
//         <div>
//             <div className="py-2 font-bold text-center text-3xl">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn m-1 btn-success text-white w-full">
//             Sort By <IoIosArrowDown size={20} />
//           </div>
//           <ul
//             tabIndex={0}
//             className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
//           >
//             <li>
//             <button onClick={() => handleSortBy("rating")}>Rating</button>
//             </li>
//             <li>
//           <button onClick={() => handleSortBy("totalPages")}>Number of Pages</button>
//         </li>
//         <li>
//           <button onClick={() => handleSortBy("yearOfPublishing")}>Publisher Year</button>
//         </li>
//           </ul>
//         </div>
//       </div>
//       {/* <Readlist sortingCriteria={sortingCriteria} /> */}
//         </div>
//     );
// };

// export default ListedBooksTab;