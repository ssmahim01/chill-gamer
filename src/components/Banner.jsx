import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import 'swiper/css/pagination';
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        scrollbar={{ draggable: true }}
        loop={true}
        slidesPerView={1}
        // pagination={{clickable:true}}
        autoplay={{ delay: 4000 }}
        className="w-full lg:h-[410px] h-80"
      >
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center p-6"
            style={{
              backgroundImage:
                "url('gamer.jpg')",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="lg:w-2/4 md:w-3/5 w-11/12 mx-auto flex flex-col justify-center items-center gap-3 lg:py-20 py-7">
              <h2 className="md:text-3xl text-amber-500 text-2xl font-extrabold">HardWorker & Pro Gamer</h2>
              <p className="text-white/90 font-bold text-center">
               All gamer are try with their best to win any game. But, the game has win and lost two sides. The HardWorker will achieve a success.
              </p>
              <Link to="/addReview">
                <button className="btn btn-info text-white font-bold text-lg px-5 mt-4">
                  Add Review
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center p-6"
            style={{
              backgroundImage:
                "url('professional-esport-gamer-playing-game-tournament.jpg')",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="lg:w-2/4 md:w-3/5 w-11/12 mx-auto flex flex-col justify-center items-center gap-3 lg:py-20 md:py-7 py-4">
              <h2 className="md:text-3xl text-amber-500 text-2xl font-extrabold">Professional Esport Gamer</h2>
              <p className="text-white/90 font-bold text-center">
                The professional esport gamers will play for their different purpose. They have perseverance and always try to be stay with patience.
              </p>
              <Link to="/addReview">
                <button className="btn btn-info text-white font-bold text-lg px-5 mt-4">
                  Add Review
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center p-6"
            style={{
              backgroundImage:
                "url('game-over.jpg')",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="lg:w-2/4 md:w-3/5 w-11/12 mx-auto flex flex-col justify-center items-center gap-3 lg:py-20 py-7">
              <h2 className="md:text-4xl text-amber-500 text-3xl font-extrabold">Game is Over</h2>
              <p className="text-white/90 font-bold text-center">
                Most of the gamers are frustrated when their game is over and do not win the game. But, a wise gamer will not frustrated.
              </p>
              <Link to="/addReview">
                <button className="btn btn-info text-white font-bold text-lg px-5 mt-4">
                  Add Review
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
