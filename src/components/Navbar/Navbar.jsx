import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { BiLogOut } from "react-icons/bi";
import "./Navbar.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(user);

  const handleLogOut = () => {
    logOutUser();
    Swal.fire({
      title: "Success",
      position: "center",
      text: "Log Out Successful",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    });
    navigate("/");
  };

  const allLink = (
    <>
      <NavLink to="/">
        <span className="font-bold">Home</span>
      </NavLink>
      <NavLink to="/allReviews">
        <span className="font-bold">All Reviews</span>
      </NavLink>

      {user && (
        <>
          <NavLink to="/addReview">
            <span className="font-bold">Add Review</span>
          </NavLink>

          <NavLink to="/myReviews">
            <span className="font-bold">My Reviews</span>
          </NavLink>

          <NavLink to="/gameWatchList">
            <span className="font-bold">Game WatchList</span>
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div
      className="navbar shadow-lg *:text-white lg:px-20 px-8 py-3"
      style={{
        backgroundImage: "url('gamer-navbar.jpg')",
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-purple-600 border-none text-white lg:hidden mr-3 shadow-md"
          >
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[5] mt-3 w-56 p-4 shadow-sm text-black text-opacity-70 space-y-2"
          >
            <div className="md:hidden flex flex-col gap-2 items-center">
              <img
                className="w-12 h-12 rounded-xl"
                src="game-logo.webp"
                alt="Logo of Game"
              />
              <h2 className="text-xl font-bold">
                Chill Gamer
              </h2>
            </div>
            {allLink}
          </ul>
        </div>
        <div className="md:flex gap-2 items-center hidden">
          <img
            className="w-10 h-10 rounded-xl"
            src="game-logo.webp"
            alt="Logo of Game"
          />
          <h2 className="text-3xl font-bold">Chill Gamer</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex *:gap-4">
        <ul className="menu menu-horizontal px-1">{allLink}</ul>
      </div>
      <div className="navbar-end">
        {user && user?.email ? (
          <div className="flex gap-3 items-center">
            <Tooltip anchorSelect=".display-name" place="left">
              {user?.displayName}
            </Tooltip>
            <img
              className="display-name w-14 h-14 rounded-full border-4 border-amber-300"
              src={user?.photoURL}
              alt={user?.displayName}
            />
            <button
              onClick={handleLogOut}
              className="btn btn-error text-white font-bold px-4"
            >
              <BiLogOut className="text-xl" /> Log Out
            </button>
          </div>
        ) : (
          <div className="flex gap-3 items-center">
            <Link to="/login">
              <button className="btn bg-emerald-500 border-none text-white font-bold px-5">
                Login
              </button>
            </Link>

            <Link to="/register">
              <button className="btn btn-outline hover:btn-primary border-2 border-white text-white font-bold px-5">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
