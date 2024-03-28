import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const BooksCard = ({ books }) => {
 
  const { bookName, author, image, category,tags,rating,bookId} = books;

  return (
    <>
        <Link  to={`/book/${bookId}`} className="flex flex-col border rounded-3xl p-4">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full  lg:h-96 rounded-3xl " src={image} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<p className="text-xs uppercase hover:underline font-bold space-x-2">
                    {
                        tags.map((tag,idx )=> <span key={idx} className="badge badge-[#23BE0A12] text-[#23BE0A] p-2 ">  #{tag} </span>)
            }
                    </p>
					<h3 className="flex-1 py-2 text-lg font-semibold  leading-snug text-black">{bookName}</h3>
                    <p className="text-base text-black"> By : {author}</p>
					<div className="flex  flex-wrap justify-between pt-3  text-xs text-black">
						<span className="text-base">{category}</span>
                        <div className="flex space-x-2">
                        <span className="text-base"> {rating} </span> <span><FaStar size={20}/></span>
                        </div>
						
					</div>
				</div>
			</Link>
    </>
  );
};

export default BooksCard;
