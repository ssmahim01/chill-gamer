import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, photoURL } = user;

  const handleAddReview = (e) => {
    e.preventDefault();

    const gameCover = e.target.cover.value;
    const gameTitle = e.target.title.value;
    const reviewDescription = e.target.description.value;
    const rating = e.target.rating.value;
    const publishingYear = e.target.publishingYear.value;
    const genres = e.target.genres.value;

    const addInfo = {
      gameCover,
      gameTitle,
      reviewDescription,
      rating,
      publishingYear,
      genres,
      email,
      name:displayName,
      photo:photoURL
    };

    fetch("https://chill-gamer-server-two.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(addInfo)
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: "Success",
          position: "center",
          text: "Successfully Added A Review",
          icon: "success",
          showConfirmButton: false,
          timer: 2500,
        });
      }

      // e.target.reset();
    })
  };

  return (
    <div className="hero bg-base-200 py-20">
      <div className="lg:w-3/5 w-11/12 mx-auto flex-col">
        <div className="text-center pb-8">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">Add New Review</h1>
        </div>

        <div className="bg-base-100 shrink-0 shadow-lg rounded-lg">
          <form onSubmit={handleAddReview} className="card-body">
            <div className="flex gap-4 md:flex-row flex-col *:w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Game Cover Image</span>
                </label>
                <input
                  type="url"
                  name="cover"
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
                  defaultValue={email}
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
                  defaultValue={displayName}
                  readOnly
                  className="input input-bordered text-gray-800 font-medium"
                />
              </div>
            </div>

            <div className="form-control mt-6 w-3/5 mx-auto">
              <button className="btn btn-success text-white/90 text-lg hover:btn-primary font-bold rounded-full shadow-md">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
