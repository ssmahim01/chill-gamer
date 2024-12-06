import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "../components/Loading";
import Swal from "sweetalert2";

const GameWatchList = () => {
  const { user, loading } = useContext(AuthContext);
  const { email:userEmail } = user;
  const [myWatchLists, setMyWatchLists] = useState([]);
  // console.log(myWatchLists);

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
        fetch(`https://chill-gamer-server-two.vercel.app/watchLists/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((watchListData) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your WatchList has been deleted.",
              icon: "success",
            });

            if (watchListData.deletedCount > 0) {
              const availableWatchLists = myWatchLists.filter(
                (singleWatchList) => singleWatchList._id !== id
              );
              setMyWatchLists(availableWatchLists);
            }
          });
      }
    });
  };

  useEffect(() => {
    fetch(`https://chill-gamer-server-two.vercel.app/watchLists?email=${userEmail}`)
      .then((response) => response.json())
      .then((data) => {
        setMyWatchLists(data);
      });
  }, [userEmail]);

  return (
    <div className="lg:w-3/4 w-11/12 mx-auto my-12">
      <h2 className="text-center lg:text-5xl md:text-4xl text-3xl font-bold mb-8">Game Watch List</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-violet-600 *:text-white">
              <th>Serial.</th>
              <th>Game Cover</th>
              <th>Game Title</th>
              <th>Rating</th>
              <th>Review Description</th>
              <th>Reviewer Name</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          {myWatchLists.length > 0 ? (
            <tbody>
              {myWatchLists.map((watchList, index) => (
                <tr key={watchList?._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className="w-12 h-12 rounded-xl"
                      src={watchList?.gameCover}
                      alt={watchList?.gameTitle}
                    />
                  </td>
                  <td className="text-gray-800 font-semibold">
                    {watchList?.gameTitle}
                  </td>
                  <td className="text-gray-800 font-semibold">
                    {watchList?.rating}/5
                  </td>
                  <td className="text-gray-800 font-semibold">
                    {watchList?.reviewDescription.slice(0, 30)}...
                  </td>
                  <td className="text-gray-800 font-semibold">
                    {watchList?.reviewerName}
                  </td>
                  <td className="text-gray-800 font-semibold">
                    {watchList?.genre}
                  </td>

                  <td className="flex gap-3 items-center">
                    <button
                      onClick={() => handleDelete(watchList?._id)}
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
            <p className="lg:text-2xl md:text-lg text-rose-600 font-bold text-end mt-3">Not Found WatchLists</p>
            </>
          )}
        </table>
      </div>
    </div>
  );
};

export default GameWatchList;
