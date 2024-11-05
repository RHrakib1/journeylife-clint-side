import bangladesh from "../../../public/img/Flag_of_Bangladesh.svg.png"
// import china from "../../../public/img/"
import india from "../../../public/img/images.png"
import japan from "../../../public/img/istockphoto-1332466002-612x612.jpg"
import south from "../../../public/img/flag-400.png"
import russia from "../../../public/img/Flag_of_Russia.svg.webp"
import saudi from "../../../public/img/flag-of-saudi-arabia-BB4TD6.jpg"
import thiland from "../../../public/img/flag-400.png"

const CountrysSection = () => {
    return (
        <div className='grid md:grid-cols-4 gap-5'>
            <div className="card bg-cyan-700 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={bangladesh}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="  ">
                    <h2 className="card-title text-2xl font-bold text-black">Bangladesh</h2>
                    <p className='text-black'>
                        Bangladesh, located in South Asia, is known for its lush greenery, vibrant culture, and the world's largest river delta, the Sundarbans. With a rich history spanning ancient civilizations to modern struggles for independence.</p>
                </div>
            </div>
            <div className="card bg-cyan-700 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={bangladesh}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="  ">
                    <h2 className="card-title text-2xl font-bold text-black">China</h2>
                    <p className='text-black'>

                        China, the world's most populous country, is known for its rich history, diverse culture, and iconic landmarks such as the Great Wall and the Forbidden City.</p>
                </div>
            </div>
            <div className="card bg-cyan-700 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={india}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="  ">
                    <h2 className="card-title text-2xl font-bold text-black">India</h2>
                    <p className='text-black'>

                        India, with its colorful festivals, diverse landscapes, and ancient heritage, offers visitors a kaleidoscope of experiences from bustling cities to tranquil countryside.</p>
                </div>
            </div>
            <div className="card bg-cyan-700 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={japan}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="  ">
                    <h2 className="card-title text-2xl font-bold text-black">Japan</h2>
                    <p className='text-black'>

                        Japan, a nation of contrasts, blends traditional culture with modern technology, offering visitors a unique blend of ancient temples, high-speed trains, and stunning natural beauty.</p>
                </div>
            </div>
            <div className="card bg-cyan-700 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={south}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="  ">
                    <h2 className="card-title text-2xl font-bold text-black">South Korea</h2>
                    <p className='text-black'>

                        South Korea, known for its dynamic cities, delicious cuisine, and rich cultural heritage, offers visitors a vibrant mix of tradition and modernity.</p>
                </div>
            </div>
            <div className="card bg-cyan-700 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={russia}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="  ">
                    <h2 className="card-title text-2xl font-bold text-black">Russia</h2>
                    <p className='text-black'>

                        Russia, the largest country in the world, spans eleven time zones and offers visitors diverse landscapes, historic cities, and rich cultural heritage.</p>
                </div>
            </div>
            <div className="card bg-cyan-700 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={saudi}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="  ">
                    <h2 className="card-title text-2xl font-bold text-black">Saudi Arabia</h2>
                    <p className='text-black'>

                        Saudi Arabia, home to the two holiest cities in Islam, offers visitors a glimpse into its rich history, traditional culture, and vast desert landscapes.</p>
                </div>
            </div>
            <div className="card bg-cyan-700 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={thiland}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="  ">
                    <h2 className="card-title text-2xl font-bold text-black">Thailand,</h2>
                    <p className='text-black'>
                        Thailand is famous for its rich culture, influenced by Buddhism, which is reflected in its many temples (wats), festivals, and traditional dance performances. The Grand Palace and Wat Phra Kaew in Bangkok are must-see attractions.</p>
                </div>
            </div>
        </div>
    );
};

export default CountrysSection;