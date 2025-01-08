import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react";

const HighestRatedGames = () => {
  const [highestRated, setHighestRated] = useState([]);

  useEffect(() => {
    fetch("https://chill-gamer-server-two.vercel.app/reviews/highest-rated")
      .then((res) => res.json())
      .then((data) => setHighestRated(data));
  }, []);

  // console.log(highestRated);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {highestRated.map((game) => (
        <div
          key={game?._id}
          className="border border-gray-200 rounded-lg shadow-md hover:scale-105 transition-all hover:shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            <figure className="relative">
              <img
                className="w-full h-52 rounded-t-lg"
                src={game?.gameCover}
                alt={game?.gameTitle}
              />

              <span className="absolute text-white badge badge-neutral border-none top-2 right-3 font-bold">
                {game?.publishingYear}
              </span>

              <span className="absolute text-white badge bg-purple-600 border-none top-2 left-3 font-bold">
                {game?.genres}
              </span>
            </figure>

            <div className="px-4">
              <div>
                <h2 className="text-2xl font-bold">{game?.gameTitle}</h2>
              </div>

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

              <p className="font-medium text-center">
                {game?.reviewDescription.slice(0, 60)}...
              </p>

              <Link to={`/review/${game?._id}`}>
                <button className="btn bg-cyan-600 border-none text-white/90 text-lg font-bold rounded-full block lg:w-4/5 w-full mx-auto my-4">
                  See More
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
