import { Link } from "react-router-dom";

const AllReviewsCard = ({ review }) => {
  const {
    _id,
    gameCover,
    gameTitle,
    publishingYear,
    rating,
    name,
    photo,
  } = review;

  return (
    <div className="border border-gray-200 bg-base-100 rounded-xl shadow-md p-4">
    <div className="flex flex-col gap-4">
      <figure>
        <img
          className="w-full h-48 rounded-lg"
          src={gameCover}
          alt={gameTitle}
        />
      </figure>

      <div className="space-y-2">
        <h2 className="text-3xl text-center font-bold">{gameTitle}</h2>

        <p className="text-gray-800 text-lg font-bold text-center">
          Rating: <span className="text-gray-600">{rating}/5</span>
        </p>

        <p className="text-gray-800 text-lg font-bold text-center">
          Publish Year: <span className="text-gray-600">{publishingYear}</span>
        </p>

        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg text-gray-900 font-bold">Reviewer: <span className="text-gray-700">{name}</span></h3>
            <img className="w-12 h-12 border-4 border-amber-400 rounded-full" src={photo} alt={name} />
          </div>
        </div>

        <Link to={`/review/${_id}`}>
          <button className="btn bg-fuchsia-600 border-none text-white text-base font-bold rounded-full block lg:w-4/5 w-full mx-auto mt-4 mb-3">
            Explore Details
          </button>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default AllReviewsCard;