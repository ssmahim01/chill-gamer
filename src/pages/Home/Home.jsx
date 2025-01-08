import Banner from "../../components/Banner";
import HighestRatedGames from "../../components/HighestRatedGames";
import MindsetSection from "../../components/mindsetSection";
import { Typewriter } from "react-simple-typewriter";
import UsersReview from "../../components/UsersReview";
import "./Home.css";
import ReviewsLogo from "../../components/ReviewsLogo";
import ConnectUs from "../ConnectUs";
import AboutUs from "../AboutUs";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>

      <section className="my-14 w-11/12 mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="md:text-4xl text-xl font-extrabold">
            Game Mindset{" "}
            <span className="text-secondary font-bold">
              <Typewriter
                words={["Crazy", "Cool", "Good", "Confident"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1000}
              />
            </span>
          </h2>
        </div>

        <MindsetSection></MindsetSection>
      </section>

      <section className="my-14 w-11/12 mx-auto">
        <h2 className="md:text-left text-center lg:text-4xl md:text-3xl text-2xl font-extrabold mb-8">
          <span className="text-primary font-bold">
            <Typewriter
              words={["Best", "Logical", "Wonderful", "Thoughtful"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </span>{" "}
          Review of Users
        </h2>

        {/* Some description of Users Review */}
        <UsersReview></UsersReview>
      </section>

      <section>
        <ReviewsLogo />
      </section>

      <section className="mt-14 mb-16 w-11/12 mx-auto">
        <h2 className="text-center lg:text-5xl md:text-4xl text-3xl font-extrabold mb-10">
          Highest Rated Games
        </h2>

        <HighestRatedGames></HighestRatedGames>
      </section>

      <section className="-mt-2">
        <AboutUs />
      </section>

      <section className="-mt-2">
        <ConnectUs />
      </section>
    </div>
  );
};

export default Home;
