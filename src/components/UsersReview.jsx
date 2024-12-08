import { Link } from "react-router-dom";

const UsersReview = () => {
    return (
        <div className="card border border-gray-200 flex md:flex-row flex-col-reverse justify-between items-center md:gap-0 gap-6 shadow-lg bg-lime-100">
            <div className="md:w-1/2 lg:space-y-5 space-y-3 md:*:text-left *:text-center lg:pr-14 px-4 md:pb-0 pb-6">
            <h2 className="lg:text-5xl text-2xl text-neutral font-extrabold">Reviews for Inspiration</h2>
            <p className="text-gray-600 lg:text-base text-sm font-medium">Suppose, Review is the one source of inspiration. Users can share about of games in this web. A review includes Title, Description, photo URL and anything else.</p>
            
            <Link to="/reviews"><button className="mt-6 btn block md:mx-0 mx-auto btn-warning text-white font-bold rounded-full px-6">View All Reviews</button></Link>
            </div>

            <figure className="md:w-1/2 lg:h-96 md:h-60">
                <img className="w-full h-full" src="users-review.jpg" alt="Image of Users Review" />
            </figure>
        </div>
    );
};

export default UsersReview;