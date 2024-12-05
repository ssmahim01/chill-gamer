import Banner from "../components/Banner";
import HighestRatedGames from "../components/HighestRatedGames";

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>

            <section className="my-16 md:w-11/12 w-full mx-auto">
            <h2 className="text-center text-gray-900 lg:text-5xl md:text-4xl text-3xl font-extrabold mb-10">Highest Rated Games</h2>
                <HighestRatedGames></HighestRatedGames>
            </section>
        </div>
    );
};

export default Home;