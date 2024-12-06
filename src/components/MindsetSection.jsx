const MindsetSection = () => {
    return (
        <div className="flex md:flex-row flex-col justify-between items-center lg:gap-20 gap-5 border border-gray-300 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg" style={{
            backgroundImage: "url('color-bg.png')"
        }}>
            <figure className="md:w-1/2">
                <img 
                className="rounded w-full h-full"
                src="pro-video-game-r-losing-space-shooter-competition-while-wearing-virtual-reality-headset.jpg" alt="An Image of Pro Video Gamer" />
            </figure>

            <div className="md:w-1/2 lg:space-y-3 space-y-1 lg:px-10 px-5 *:md:text-left *:text-center lg:mb-10 mb-6">
            <h2 className="lg:text-4xl md:text-3xl text-2xl text-purple-700 font-extrabold">Pro Video Gamer</h2>
            <p className="text-gray-600 lg:text-base md:text-sm font-medium">A serious pro gamer was joined in competition. Unfortunately, she cannot won the game. She has game mindset. Like her, any of pro players are play video games as their profession.</p>
            </div>
        </div>
    );
};

export default MindsetSection;