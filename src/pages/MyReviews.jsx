import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const MyReviews = () => {
  const { user, loading } = useContext(AuthContext);
  const { email } = user;
  const [myReviews, setMyReviews] = useState([]);

  if(loading){
    return <Loading></Loading>
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://chill-gamer-server-two.vercel.app/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((reviewData) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your review has been deleted.",
              icon: "success",
            });

            if (reviewData.deletedCount > 0) {
              const availableReviews = myReviews.filter(
                (singleReview) => singleReview._id !== id
              );
              setMyReviews(availableReviews);
            }
          });
      }
    });
  };

  useEffect(() => {
    fetch(`https://chill-gamer-server-two.vercel.app/reviews?email=${email}`)
      .then((response) => response.json())
      .then((data) => {
        setMyReviews(data);
      });
  }, [email]);
  // console.log(email);
  return (
    <div className="lg:w-3/4 w-11/12 mx-auto my-12">
       <h2 className="text-center lg:text-5xl md:text-4xl text-3xl font-bold mb-8">My Reviews</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-teal-600 *:text-white">
              <th>Serial.</th>
              <th>Game Cover</th>
              <th>Game Title</th>
              <th>Publishing Year</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          {myReviews.length > 0 ? (
            <tbody>
              {myReviews.map((review, index) => (
                <tr key={review?._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className="w-12 h-12 rounded-xl"
                      src={review?.gameCover}
                      alt={review?.gameTitle}
                    />
                  </td>
                  <td className="font-semibold">
                    {review?.gameTitle}
                  </td>
                  <td className="font-semibold">
                    {review?.publishingYear}
                  </td>
                  <td className="font-semibold">
                    {review?.genres}
                  </td>

                  <td className="flex gap-3 items-center">
                   <Link to={`/updateReview/${review._id}`}>
                   <button className="btn btn-primary text-white/90 font-bold px-5 rounded-none">
                      Update
                    </button>
                   </Link>

                    <button
                      onClick={() => handleDelete(review?._id)}
                      className="btn btn-error text-white/90 font-bold px-5 rounded-none"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <>
            <th></th>
            <p className="lg:text-2xl md:text-lg text-rose-600 font-bold text-end mt-3">Reviews Not Found</p>
            </>
          )}
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
