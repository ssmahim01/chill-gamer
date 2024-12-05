import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

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

    fetch("http://localhost:4500/watchLists", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(watchListInfo),
    })
      .then((response) => response.json())
      .then((result) => {
        if(result.insertedId){
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
    <div className="my-20 lg:w-3/4 md:w-11/12 w-full mx-auto">
      <h1 className="text-center md:text-5xl text-3xl text-gray-900 font-bold pb-9">
        Review Details
      </h1>

      <div className="flex flex-col-reverse gap-4 border-2 border-white/50 p-4 shadow-md rounded-lg">
        <div className="space-y-3">
          <h2 className="md:text-4xl text-2xl text-gray-800 font-extrabold">
            Game Title: {gameTitle}
          </h2>

          <p className="text-gray-600 font-semibold">{reviewDescription}</p>

          <p className="md:text-2xl text-xl text-gray-800 font-bold">
            Rating: <span className="text-gray-600">{rating}/5</span>
          </p>
          <p className="md:text-2xl text-xl text-gray-800 font-bold">
            Genre: <span className="text-gray-600">{genre}</span>
          </p>
          <p className="md:text-2xl text-xl text-gray-800 font-bold">
            Reviewer's Name:{" "}
            <span className="text-gray-600">{reviewerName}</span>
          </p>
          <p className="md:text-2xl text-xl text-gray-800 font-bold">
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
    </div>
  );
};

export default ReviewDetails;
