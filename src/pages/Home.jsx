import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import HighestRatedGames from "../components/HighestRatedGames";
import MindsetSection from "../components/mindsetSection";
import { Typewriter } from "react-simple-typewriter";
import UsersReview from "../components/UsersReview";

const Home = () => {
  let [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleThemeToggle = (e) => {
    e.preventDefault();
    const newTheme =
      theme === "light"
        ? (document.body.style.backgroundColor = "#424242")
        : (document.body.style.backgroundColor = "#f2f2f2");
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div>
      <section>
        <Banner></Banner>
      </section>

      <section className="my-14 w-11/12 mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-gray-900 md:text-4xl text-xl font-extrabold">
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

          <label
            className="swap swap-rotate"
            onClick={() => {
              setTheme(handleThemeToggle(!theme));
            }}
          >
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />
            <svg
              className="swap-on md:h-10 h-8 md:w-10 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>

            <svg
              className="swap-off md:h-10 h-8 md:w-10 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
          </label>
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

      <section className="my-16 md:w-11/12 w-full mx-auto">
        <h2 className="text-center text-gray-900 lg:text-5xl md:text-4xl text-3xl font-extrabold mb-10">
          Highest Rated Games
        </h2>

        <HighestRatedGames></HighestRatedGames>
      </section>
    </div>
  );
};

export default Home;
