import { useEffect, useState } from "react";
import AllReviewsCard from "../components/AllReviewsCard";
import { Typewriter } from "react-simple-typewriter";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [genresValue, setGenresValue] = useState("");
  const [genres, setGenres] = useState([]);
  const [sortItems, setSortItems] = useState("");

  const handleSorted = (type) => {
    setSortItems(type);

    let sortBy = "";

    if (type == "Rating") {
      sortBy = "rating";
    }

    if (type == "Publish Year") {
      sortBy = "publishingYear";
    }

    fetch(`https://chill-gamer-server-two.vercel.app/reviews?sortBy=${sortBy}`)
      .then((response) => response.json())
      .then((data) => {
        setFilteredReviews(data);
      });
  };

  const handleGenre = (event) => {
    event.preventDefault();
    const genre = event.target.value;
    setGenresValue(genre);

    const filter = genre ? reviews.filter(singleReview => singleReview?.genres === genre) : reviews;

    setFilteredReviews(filter);
  };

  useEffect(() => {
    fetch("https://chill-gamer-server-two.vercel.app/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        setFilteredReviews(data);
      });

      fetch(`https://chill-gamer-server-two.vercel.app/genres`)
      .then((response) => response.json())
      .then((data) => {
        setGenres(data);
      });
    }, []);

  return (
    <div className="lg:w-4/5 md:w-11/12 w-full mx-auto my-14">
      <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:gap-0 gap-2 lg:mb-10 mb-7">
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

        <div className="flex lg:flex-row flex-col gap-5 items-center lg:justify-end justify-center">
         <div className="flex gap-2 items-center">
          <p className="font-bold">Filter By Genres:</p>
          <select className="input input-bordered cursor-pointer bg-base-300 shadow-md text-gray-800 font-bold *:font-bold" value={genresValue} onChange={handleGenre}>
            <option value="">All Genres</option>
            {genres.map(genre => <option key={genre._id} value={genre?.genres}>{genre?.genres}</option>)}
          </select>
         </div>

          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-cyan-600 m-1 text-white font-bold px-6"
            >
              {sortItems ? `${sortItems}` : "Sort By"}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content right-2 menu bg-base-200 rounded-box z-[5] w-56 p-4 shadow-md space-y-2 *:font-bold"
            >
              <li
                className="cursor-pointer hover:btn-active p-2"
                onClick={() => handleSorted("Rating")}
              >
                Rating
              </li>
              <li
                className="cursor-pointer hover:btn-active p-2"
                onClick={() => handleSorted("Publish Year")}
              >
                Publish Year
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="md:w-full w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
        filteredReviews.map((review) => (
          <AllReviewsCard key={review._id} review={review}></AllReviewsCard>
        ))}
      </section>
    </div>
  );
};

export default AllReviews;
