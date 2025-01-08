import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const AllReviewsCard = ({ review }) => {
  const { _id, gameCover, gameTitle, publishingYear, rating, name, photo } =
    review;

  return (
    <div className="border border-gray-200 rounded-xl shadow-md hover:scale-105 transition-all hover:shadow-xl p-4">
      <div className="flex flex-col gap-4">
        <figure>
          <img
            className="w-full h-48 rounded-lg"
            src={gameCover}
            alt={gameTitle}
          />
        </figure>

        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl  font-bold">
              {gameTitle}
            </h2>

            <span className=" text-lg font-bold">
              {publishingYear}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <ReactStars
              count={5}
              size={30}
              isHalf={true}
              edit={false}
              value={rating}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />

            <span className=" text-lg font-bold">
              {rating}.5
            </span>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">
               By: <span className="">{name}</span>
              </h3>
              <img
                className="w-12 h-12 border-4 border-amber-400 rounded-full"
                src={photo}
                alt={name}
              />
            </div>
          </div>

          <Link to={`/review/${_id}`}>
            <button className="btn bg-fuchsia-600 border-none text-white text-base font-bold rounded-full block lg:w-4/5 w-full mx-auto mt-4">
              Explore Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllReviewsCard;
