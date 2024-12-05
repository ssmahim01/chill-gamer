import { Link, useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react";

const HighestRatedGames = () => {
  const [highestRated, setHighestRated] = useState([]);

  useEffect(() => {
    fetch("https://chill-gamer-server-two.vercel.app/reviews/highest-rated")
      .then((res) => res.json())
      .then((data) => setHighestRated(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {highestRated.map((game) => (
        <div
          key={game?._id}
          className="border border-gray-200 bg-base-200 rounded-lg shadow-md"
        >
          <div className="flex flex-col gap-4">
            <figure>
              <img
                className="w-full h-60 rounded-lg"
                src={game?.gameCover}
                alt={game?.gameTitle}
              />
            </figure>

            <div className="px-4 py-2">
              <h2 className="text-3xl font-bold">{game?.gameTitle}</h2>

              <div className="flex justify-between items-center">
                <p className="text-gray-800 text-lg font-bold">
                  Rating:{" "}
                  <span className="text-gray-600">{game?.rating}/5</span>
                </p>

                <ReactStars
                  count={5}
                  size={30}
                  isHalf={true}
                  edit={false}
                  value={game?.rating}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              </div>

              <p className="text-gray-800 text-lg font-bold">
                Publish Year:
                <span className="text-gray-600">{game?.publishingYear}</span>
              </p>
              <p className="text-gray-700 font-medium text-center mt-3">
                {game?.reviewDescription.slice(0, 75)}...
              </p>

              <Link to={`/review/${game?._id}`}>
                <button className="btn bg-cyan-600 border-none text-white/90 text-base font-bold rounded-full block w-4/5 mx-auto mt-4 mb-3">
                  Explore Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HighestRatedGames;
