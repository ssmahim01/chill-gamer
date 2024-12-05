import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const { email } = user;
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4500/reviews?email=${email}`)
      .then((response) => response.json())
      .then((data) => {
        setMyReviews(data);
      });
  }, [email]);
  // console.log(email);
  return (
    <div className="lg:w-3/4 w-11/12 mx-auto my-12">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
