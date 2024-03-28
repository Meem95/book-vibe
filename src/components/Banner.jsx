import { Link } from 'react-router-dom';
import banner from '../assets/images/banner.png';
const Banner = () => {
  return (
    <div className="">
      <div className="hero min-h-screen max-w-7xl mx-auto bg-slate-100 rounded-3xl mt-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner}
            className="lg:max-w-sm rounded-lg shadow-2xl"
          />
          <div className="lg:ml-16">
            <h1 className="text-6xl font-bold ">Books to freshen up your bookshelf</h1>
            <Link to="/listed-book">
            <button className="btn bg-green-500 btn-success text-white mt-4">View The List</button>
            </Link>
           
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-4xl text-center">Books</h1>
      </div>
    </div>
  );
};

export default Banner;
