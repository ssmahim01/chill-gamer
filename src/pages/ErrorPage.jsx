import { Link } from "react-router-dom";
import errorImg from "/src/assets/error-image.jpg";
import { IoIosReturnLeft } from "react-icons/io";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-6 lg:my-28 my-10">
            <img className="h-80 object-cover" src={errorImg} alt="Image of 404: Not Found Page" />

            <h2 className="md:text-4xl text-3xl text-gray-900 font-extrabold">Not Found Page: 404</h2>

            <Link to="/"><button className="btn btn-outline rounded-full px-10 border border-gray-300 bg-white/60 shadow-lg font-bold"><IoIosReturnLeft className="text-2xl"/> Return Home</button></Link>
        </div>
    );
};

export default ErrorPage;