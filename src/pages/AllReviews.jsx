import { useEffect, useState } from "react";
import AllReviewsCard from "../components/AllReviewsCard";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://chill-gamer-server-two.vercel.app/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="lg:w-4/5 md:w-11/12 w-full mx-auto my-14">
      <h2 className="md:text-5xl text-4xl font-bold text-center mb-8">All Reviews</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <AllReviewsCard key={review._id} review={review}></AllReviewsCard>
        ))}
      </section>
    </div>
  );
};

export default AllReviews;
