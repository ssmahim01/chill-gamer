import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import HighestRatedGames from "../../components/HighestRatedGames";
import MindsetSection from "../../components/mindsetSection";
import { Typewriter } from "react-simple-typewriter";
import UsersReview from "../../components/UsersReview";
import "./Home.css";
import { FaRegLightbulb } from "react-icons/fa";
import { MdNightlightRound } from "react-icons/md";

const Home = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ||"light-theme");

  const handleThemeToggle = () => {
    const newTheme = theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const themeSaved = localStorage.getItem("theme");
    if(themeSaved){
      setTheme(themeSaved);
    };
  }, []);

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

          
          <button className="btn btn-outline border-none toggle-btn" onClick={() => handleThemeToggle()}>
            {theme === "dark-theme" ? (
              <span className="text-3xl" role="img" aria-label="Light Icon"><FaRegLightbulb /></span>
            ) : (
              <span className="text-3xl" role="img" aria-label="Moon Icon"><MdNightlightRound /></span>
            )}
          </button>
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
        <h2 className="text-center lg:text-5xl md:text-4xl text-3xl font-extrabold mb-10">
          Highest Rated Games
        </h2>

        <HighestRatedGames></HighestRatedGames>
      </section>
    </div>
  );
};

export default Home;
