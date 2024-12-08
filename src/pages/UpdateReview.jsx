import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateReview = () => {
  const review = useLoaderData();

  const handleUpdateReview = (event) => {
    event.preventDefault();

    const gameCover = event.target.cover.value;
    const gameTitle = event.target.title.value;
    const reviewDescription = event.target.description.value;
    const rating = event.target.rating.value;
    const publishingYear = event.target.publishingYear.value;
    const genres = event.target.genres.value;
    const email = review?.email;
    const name = review?.name;
    const photo = review?.photo;

    const updateInfo = {
      gameCover,
      gameTitle,
      reviewDescription,
      rating,
      publishingYear,
      genres,
      email,
      name,
      photo
    };

    fetch(`https://chill-gamer-server-two.vercel.app/reviews/${review?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((updatedData) => {
        // console.log(data);
        if (updatedData.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            position: "center",
            text: "Successfully Updated",
            icon: "success",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };

  return (
    <div className="hero py-20">
      <div className="lg:w-3/5 w-11/12 mx-auto flex-col">
        <div className="text-center pb-8">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">
            Update Review
          </h1>
        </div>

        <div className="bg-base-100 shrink-0 shadow-lg rounded-lg">
          <form onSubmit={handleUpdateReview} className="card-body">
            <div className="flex gap-4 md:flex-row flex-col *:w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Game Cover Image</span>
                </label>
                <input
                  type="url"
                  name="cover"
                  defaultValue={review?.gameCover}
                  placeholder="Provide a Cover Image"
                  className="input input-bordered text-gray-800 font-medium"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Game Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={review?.gameTitle}
                  pattern="^[A-Za-z\s]*$"
                  placeholder="Type Your Title"
                  className="input input-bordered text-gray-800 font-medium"
                  required
                />
              </div>
            </div>

            <div className="flex gap-4 md:flex-row flex-col *:w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">
                    Review Description
                  </span>
                </label>
                <input
                  type="text"
                  name="description"
                  defaultValue={review?.reviewDescription}
                  placeholder="Review Description"
                  className="input input-bordered text-gray-800 font-medium"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Rating</span>
                </label>
                <input
                  type="number"
                  name="rating"
                  defaultValue={review?.rating}
                  placeholder="Type Rating"
                  min="1"
                  max="5"
                  className="input input-bordered text-gray-800 font-medium"
                  required
                />
              </div>
            </div>

            <div className="flex gap-4 md:flex-row flex-col *:w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Publishing Year</span>
                </label>
                <input
                  type="number"
                  name="publishingYear"
                  defaultValue={review?.publishingYear}
                  placeholder="Provide Publishing Year"
                  min="2000"
                  max={new Date().getFullYear()}
                  className="input input-bordered text-gray-800 font-medium"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Genres</span>
                </label>
                <select
                  name="genres"
                  id="genres"
                  defaultValue={review?.genres}
                  className="input input-bordered text-gray-800 font-medium *:font-semibold"
                >
                  <option value="">Select A Genre</option>
                  <option value="Action">Action</option>
                  <option value="RPG">RPG</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Battle">Battle</option>
                  <option value="Sports">Sports</option>
                  <option value="Puzzle">Puzzle</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4 md:flex-row flex-col *:w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">User Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={review?.email}
                  readOnly
                  className="input input-bordered text-gray-800 font-medium"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">User Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={review?.name}
                  readOnly
                  className="input input-bordered text-gray-800 font-medium"
                />
              </div>
            </div>

            <div className="form-control mt-6 w-3/5 mx-auto">
              <button className="btn bg-violet-600 text-white/90 text-lg hover:btn-primary font-bold rounded-full shadow-md">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
