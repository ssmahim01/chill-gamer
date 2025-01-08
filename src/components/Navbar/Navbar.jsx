import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { BiLogOut } from "react-icons/bi";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import "../../pages/Home/Home.css";
import "./Navbar.css";
import { FaRegLightbulb } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  // console.log(user);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "theme-1"
  );

  const handleThemeToggle = () => {
    if (theme === "theme-2") {
      setTheme("theme-1");
      localStorage.setItem("theme", "theme-1");
    }
    if (theme === "theme-1") {
      setTheme("theme-2");
      localStorage.setItem("theme", "theme-2");
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const themeSaved = localStorage.getItem("theme");
    if (themeSaved) {
      setTheme(themeSaved);
    }
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

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
      <NavLink to="/">Home</NavLink>
      <NavLink to="/reviews">All Reviews</NavLink>
      <NavLink to="/about-us">About Us</NavLink>
      <NavLink to="/connect-us">Connect</NavLink>

      {user && (
        <>
          <NavLink to="/addReview">Add Review</NavLink>

          <NavLink to="/myReviews">My Reviews</NavLink>

          <NavLink to="/myWatchlist">Game WatchList</NavLink>
        </>
      )}
    </>
  );

  return (
    <div
      className={`navbar shadow-md lg:px-20 px-8 py-3 fixed z-10 border-b border-gray-200 ${
        theme === "theme-2" ? "bg-neutral" : "bg-base-200"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown" ref={dropdownRef}>
          <button
            onClick={handleMenuToggle}
            tabIndex={0}
            role="button"
            className={`btn btn-outline border border-gray-300 lg:hidden mr-3 shadow-md ${theme === "theme-2" ? "text-white" : "text-gray-800"}`}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            )}
          </button>
          {menuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white/90 rounded-lg z-10 mt-3 border border-lime-200 md:w-96 w-80 p-4 shadow-md text-gray-900 space-y-2"
            >
              <div className="lg:hidden flex flex-col gap-2 items-center">
                {user && (
                  <img
                    className="w-16 h-16 rounded-full border-4 border-amber-400"
                    src={user?.photoURL}
                    alt={user?.displayName}
                    referrerPolicy="no-referrer"
                  />
                )}
                <p className="text-xl text-gray-800 font-extrabold">
                  {user?.displayName}
                </p>

                <p className="text-gray-700 font-semibold mb-4">
                  {user?.email}
                </p>
              </div>

              <div className="flex flex-col gap-3 font-bold">{allLink}</div>
            </ul>
          )}
        </div>
        <div className="flex gap-2 items-center">
          <img
            className="md:w-10 w-11 md:h-10 h-11 rounded-xl"
            src="game-logo.webp"
            alt="Logo of Game"
          />
          <h2 className="md:block hidden text-3xl font-bold">Chill Gamer</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex *:gap-4">
        <ul
          className={`menu menu-horizontal px-1 font-extrabold ${
            theme === "theme-2" ? "text-white/90" : "text-gray-900"
          }`}
        >
          {allLink}
        </ul>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-ghost border-none shadow-sm toggle-btn mr-3"
          onClick={() => handleThemeToggle()}
        >
          {theme === "theme-2" ? (
            <span
              className="text-3xl text-white"
              role="img"
              aria-label="Light Icon"
            >
              <FaRegLightbulb />
            </span>
          ) : (
            <span
              className="text-3xl text-gray-700"
              role="img"
              aria-label="Moon Icon"
            >
              <MdDarkMode />
            </span>
          )}
        </button>
        {user && user?.email ? (
          <div className="flex gap-3 items-center">
            <Tooltip anchorSelect=".display-name" place="left">
              {user?.displayName}
            </Tooltip>
            <img
              className="lg:block hidden display-name cursor-pointer w-14 h-14 rounded-full border-4 border-amber-300"
              src={user?.photoURL}
              alt={user?.displayName}
              referrerPolicy="no-referrer"
            />
            <button
              onClick={handleLogOut}
              className="flex gap-3 items-center btn btn-error text-white font-bold px-4"
            >
              <BiLogOut className="text-xl" /> Log Out
            </button>
          </div>
        ) : (
          <div className="flex gap-3 items-center">
            <Link to="/login">
              <button
                className={`btn ${
                  theme === "theme-1"
                    ? "bg-emerald-500 border-none"
                    : "btn-outline border-2 border-white hover:bg-emerald-500"
                } text-white font-bold text-base px-6`}
              >
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
