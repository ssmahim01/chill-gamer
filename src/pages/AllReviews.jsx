import { useEffect, useState } from "react";
import AllReviewsCard from "../components/AllReviewsCard";
import { Typewriter } from "react-simple-typewriter";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [sortItems, setSortItems] = useState("");

  const handleSorted = (type) => {
    setSortItems(type);

    let sortBy = "";

    if(type == "Rating"){
      sortBy = "rating";
    };

    if(type == "Publish Year"){
      sortBy = "publishingYear";
    };

    fetch(`http://localhost:4500/reviews?sortBy=${sortBy}`)
        .then((response) => response.json())
        .then((data) => {
          setReviews(data);
        });
  };

  useEffect(() => {
    fetch("http://localhost:4500/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="lg:w-4/5 md:w-11/12 w-full mx-auto my-14">
      <div className="flex md:flex-row flex-col md:justify-between justify-center items-center md:gap-0 gap-2 md:mb-10 mb-7">
        <h2 className="md:text-4xl text-2xl font-extrabold">
          All Reviews{" "}
          <span className="text-primary font-bold">
            <Typewriter
              words={[
                "Action",
                "RPG",
                "Sports",
                "Adventure",
                "Battle",
                "Puzzle",
              ]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </span>
        </h2>

        <div>
          <select>
            <option value="Filter By"></option>
          </select>
        </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-cyan-600 m-1 text-white font-bold px-6"
          >
            {sortItems ? `${sortItems}`:"Sort By"}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-200 rounded-box z-[1] w-56 p-4 shadow-md space-y-2 *:font-bold"
          >
            <li
              className="cursor-pointer hover:btn-active p-2"
              onClick={() => handleSorted('Rating')}
            >
              Rating
            </li>
            <li
              className="cursor-pointer hover:btn-active p-2"
              onClick={() => handleSorted('Publish Year')}
            >
              Publish Year
            </li>
          </ul>
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <AllReviewsCard key={review._id} review={review}></AllReviewsCard>
        ))}
      </section>
    </div>
  );
};

export default AllReviews;
