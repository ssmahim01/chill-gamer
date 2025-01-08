import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";

const ReviewsLogo = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://chill-gamer-server-two.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
    }, []);

  return (
    <div className="w-11/12 mx-auto mt-20">
      <div className="space-y-3">
        {/* <h2 className="lg:text-4xl md:text-3xl text-2xl font-extrabold mb-10">
          View Reviews by One Click
        </h2> */}

        <div className="bg-base-300 rounded-md flex gap-x-8 items-center">
          <Marquee speed={70} pauseOnHover={true} className="py-2">
            {reviews.map((review) => (
              <figure key={review._id}>
                <NavLink to={`/review/${review._id}`} className="*:ml-8">
                  <div className="pl-10 flex gap-3 items-center">
                    <h3 className="text-gray-800 font-bold">{review?.gameTitle} |</h3>
                  <img
                    className="w-14 h-14 rounded-lg"
                    src={review?.gameCover}
                    alt={review?.gameTitle}
                  />
                  </div>
                </NavLink>
              </figure>
            ))}
          </Marquee>
          <span className="px-7 py-6 text-white bg-teal-500 text-lg font-bold">
            Reviews
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewsLogo;
