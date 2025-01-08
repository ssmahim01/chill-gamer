import { FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="my-14">
      <div className="shadow-md w-11/12 mx-auto pt-3 px-7 pb-6 rounded-xl">
        <div className="lg:w-4/5 md:w-11/12 w-full mx-auto text-center pb-4">
          <h2 className="text-4xl font-extrabold mb-6">About Us</h2>
          <p className="text-lg leading-relaxed font-medium mb-8">
            Welcome to{" "}
            <span className="text-amber-400 font-bold">Chill Gamer</span>, your
            ultimate destination for all things gaming! We are passionate gamers
            on a mission to provide honest, in-depth, and insightful reviews for
            the latest and greatest video games. Whether you're into
            action-packed adventures, strategic RPGs, or casual indie games,
            we've got you covered!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-5">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">What We Do</h3>
            <p className="leading-relaxed font-medium">
              At <span className="text-amber-400 font-bold">Chill Gamer</span>,
              we believe that every gamer deserves the best experience. Our team
              of dedicated reviewers spends countless hours exploring games,
              analyzing gameplay, graphics, soundtracks, and stories, and
              sharing unbiased opinions to help you make informed decisions.
            </p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="leading-relaxed font-medium">
              Gaming isn't just entertainment – it's a way of life. Our mission
              is to foster a vibrant community of gamers where everyone feels
              connected. We aim to guide both casual players and hardcore
              enthusiasts by delivering high-quality reviews, expert tips, and
              news updates about the gaming industry.
            </p>
          </div>
        </div>

        <div className="lg:w-3/5 md:w-11/12 w-full mx-auto mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
          <p className="leading-relaxed font-medium mb-6">
            Become part of our growing community of gamers who share the same
            passion for exploring virtual worlds and uncovering hidden
            treasures. Together, let's level up and make gaming more exciting!
          </p>

          <Link to="/connect-us">
            <button className="flex gap-2 mx-auto items-center btn bg-emerald-500 border-none px-6 text-white text-lg font-bold rounded-full">
              <FaHandshake className="text-xl" /> Connect With Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
