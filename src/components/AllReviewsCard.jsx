import { Link } from "react-router-dom";

const AllReviewsCard = ({ review }) => {
  const {
    _id,
    gameCover,
    gameTitle,
    reviewDescription,
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

          <p className="text-gray-700 font-medium">
            {reviewDescription.slice(0, 70)}...
          </p>

          <p className="text-gray-800 text-lg font-bold">
            Rating: <span className="text-gray-600">{rating}/5</span>
          </p>

          {/* <p className="text-gray-800 text-lg font-bold">
            Publish Year:{" "}
            <span className="text-gray-600">{publishingYear}</span>
          </p> */}

          <div>
            <h3 className="text-xl font-bold pb-3">Posted By</h3>

            <div className="flex justify-between items-center">
              <img className="w-12 h-12 rounded-full" src={photo} alt={name} />

              <h3 className="text-lg text-gray-900 font-bold">{name}</h3>
            </div>
          </div>

          <Link to={`/review/${_id}`}>
            <button className="btn bg-fuchsia-600 border-none text-white text-base font-bold rounded-full block w-4/5 mx-auto mt-5 mb-3">
              Explore Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllReviewsCard;