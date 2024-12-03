import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const allLink = <>
    <NavLink to="/"><span className="font-bold">Home</span></NavLink>
    <NavLink to="/allReviews"><span className="font-bold">All Reviews</span></NavLink>
    <NavLink to="/addReview"><span className="font-bold">Add Review</span></NavLink>
    <NavLink to="/myReviews"><span className="font-bold">My Reviews</span></NavLink>
    <NavLink to="/gameWatchList"><span className="font-bold">Game WatchList</span></NavLink>
    </>

  return (
    <div className="navbar bg-base-200 shadow-md">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[5] mt-3 w-56 p-3 shadow-sm"
          >
           {allLink}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">Chill Gamer</a>
      </div>
      <div className="navbar-center hidden lg:flex *:gap-4">
        <ul className="menu menu-horizontal px-1">
         {allLink}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-3 items-center">
          <button className="btn bg-fuchsia-500 text-white font-bold px-4">
            Login
          </button>

          <button className="btn btn-accent text-white font-bold px-4">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
