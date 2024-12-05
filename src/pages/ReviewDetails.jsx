import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import ReactStars from "react-rating-stars-component";
import Swal from "sweetalert2";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const ReviewDetails = () => {
  const { user, loading } = useContext(AuthContext);
  const reviewData = useLoaderData();
  // console.log(reviewData);

  const {
    gameCover,
    gameTitle,
    reviewDescription,
    rating,
    genres: genre,
    name: reviewerName,
    email: reviewerEmail,
  } = reviewData;

  if (loading) {
    <div className="flex justify-center items-center pt-36">
      <p className="text-3xl text-center font-bold">loading...</p>
    </div>;
    return;
  }

  const handleAddWatchList = (event) => {
    event.preventDefault();

    const userName = user?.displayName;
    const userEmail = user?.email;

    const watchListInfo = {
      gameCover,
      gameTitle,
      reviewDescription,
      rating,
      genre,
      reviewerName,
      reviewerEmail,
      userName,
      userEmail,
    };

    fetch("https://chill-gamer-server-two.vercel.app/watchLists", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(watchListInfo),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire({
            title: "Success",
            position: "center",
            text: "Successfully Added In The WatchList",
            icon: "success",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };

  return (
    <div className="my-16 lg:w-3/4 md:w-11/12 w-full mx-auto">
      <h1 className="text-center md:text-5xl text-3xl text-gray-900 font-bold pb-5">
        Review Details
      </h1>

      <div className="flex flex-col-reverse gap-3 border-2 border-white/50 p-4 shadow-md rounded-lg">
        <div className="space-y-2">
          <h2 className="md:text-4xl text-2xl text-gray-800 font-extrabold">
            Game Title: {gameTitle}
          </h2>

          <p className="text-gray-600 font-semibold">{reviewDescription}</p>

          <div className="flex justify-between items-center">
          <p className="text-xl text-gray-800 font-bold">
            Rating: <span className="text-gray-600">{rating}/5</span>
          </p>

          <ReactStars
              count={5}
              size={32}
              isHalf={true}
              edit={false}
              value={rating}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>

          <p className="text-xl text-gray-800 font-bold">
            Genre: <span className="text-gray-600">{genre}</span>
          </p>
          <p className="text-xl text-gray-800 font-bold">
            Reviewer's Name:{" "}
            <span className="text-gray-600">{reviewerName}</span>
          </p>
          <p className="text-xl text-gray-800 font-bold">
            Email: <span className="text-gray-600">{reviewerEmail}</span>
          </p>

          <div className="pt-3 pb-2">
            {!user ? (
              <p className="md:text-2xl text-lg text-rose-500 font-bold md:text-left text-center">
                Login to Add to WatchList
              </p>
            ) : (
              <button
                onClick={handleAddWatchList}
                className="bg-emerald-500 px-6 py-3 rounded-full text-white font-bold"
              >
                Add To WatchList
              </button>
            )}
          </div>

        </div>

        <div className="w-full lg:h-96 md:h-80 h-72">
          <img
            className="w-full h-full rounded-lg"
            src={gameCover}
            alt={gameTitle}
          />
        </div>
      </div>

         <Link to="/" className="flex md:justify-start justify-center items-center">
         <button className="mt-10 btn rounded-none bg-violet-600 text-white font-bold"><IoArrowBackCircleSharp className="text-2xl"/> Back To Home</button>
         </Link>
    </div>
  );
};

export default ReviewDetails;
