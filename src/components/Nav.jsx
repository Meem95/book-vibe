import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p- shadow bg-base-100 rounded-box w-52 "
          >
            <NavLink to='/'  className={({isActive})=> isActive? 'text-primary font-bold btn-outline btn-success btn ' : 'font-bold text-success mt-4'}> 
            Home
          </NavLink>
          <NavLink to='/about' className={({isActive})=> isActive? 'text-primary font-bold btn-outline btn-success btn ' : 'font-bold text-success mt-4 '}>
            About Us
          </NavLink>
          <NavLink to='/listed-book' className={({isActive})=> isActive? 'text-primary font-bold btn-outline btn-success btn ' : 'font-bold text-success mt-4'}>
            Listed Books
          </NavLink>
          <NavLink to='/page-to-read' className={({isActive})=> isActive? 'text-primary font-bold btn-outline btn-success btn ' : 'font-bold text-success mt-4'}>
            Pages To Read
          </NavLink>
          <NavLink to='/contact' className={({isActive})=> isActive? 'text-primary font-bold btn-outline btn-success btn ' : 'font-bold text-success mt-4'}>
            Contact Us
          </NavLink>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-2xl font-extrabold mt-4">Book Vibe</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">
          <NavLink to='/'  className={({isActive})=> isActive? 'text-primary font-bold btn-outline btn-success btn text-lg' : 'font-bold text-success mt-4 text-lg'}> 
            Home
          </NavLink>
          <NavLink to='/about' className={({isActive})=> isActive? 'text-primary font-bold btn-outline btn-success btn text-lg' : 'font-bold text-success mt-4 text-lg'}>
            About Us
          </NavLink>
          <NavLink to='/listed-book' className={({isActive})=> isActive? 'text-primary font-bold btn-outline btn-success btn text-lg' : 'font-bold text-success mt-4 text-lg'}>
            Listed Books
          </NavLink>
          <NavLink to='/page-to-read' className={({isActive})=> isActive? 'text-primary font-bold btn-outline btn-success btn text-lg' : 'font-bold text-success mt-4 text-lg'}>
            Pages To Read
          </NavLink>
          <NavLink to='/contact' className={({isActive})=> isActive? 'text-primary font-bold btn-outline btn-success btn text-lg' : 'font-bold text-success mt-4 text-lg'}>
            Contact Us
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end justify-start lg:justify-end space-x-2  hidden lg:block ml-56">
        <a className="btn  btn-success text-white">Sign in</a>
        <a className="btn btn-info text-white ">Sign Up</a>
      </div>
    </div>
  );
};

export default Nav;
