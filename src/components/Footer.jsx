import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 border-t border-t-gray-200 shadow-md">
      <aside>
        <div className="flex gap-2 items-center">
          <img
            className="w-10 h-10 rounded-xl"
            src="game-logo.webp"
            alt="Logo of Game"
          />
          <h2 className="text-3xl font-bold">Chill Gamer</h2>
        </div>
        <p className="mt-3 font-serif font-semibold">
          <span>Chill Gamer of MZ Dev. Ltd.</span>
          <br />
          <span>Providing services since 2023</span>
        </p>
        <p className="md:text-base font-medium">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4 -mt-4">
          <Link
            to="https://www.linkedin.com/in/sayman-shakil-mahim-38b6a9318"
            className="text-cyan-500"
            target="_blank"
          >
           <FaLinkedin className="text-2xl" />
          </Link>

          <Link
            to="https://www.youtube.com/@MahimZayN"
            className="text-rose-500"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </Link>

          <Link to="https://www.facebook.com/ssmahim/" className="text-sky-500 text-2xl"
          target="_blank"
          >
            <FaFacebook />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;