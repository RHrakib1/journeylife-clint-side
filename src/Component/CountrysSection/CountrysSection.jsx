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
        <div>
            <div className='grid md:grid-cols-4 gap-5'>
                <div className="card bg-cyan-700 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={bangladesh}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="">
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
            <div>
                <section className="my-8">
                    <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                        <h1 className="text-4xl font-semibold leading-none text-center">What our customers are saying about us</h1>
                    </div>
                    <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                        <div className="flex flex-col items-center mx-12 lg:mx-0">
                            <div className="relative text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>
                                <p className="px-6 py-1 text-lg italic">Embark on an unforgettable journey as you explore breathtaking destinations around the globe. From the bustling streets of Tokyo to the serene beaches of Bali, journylife is your ultimate travel companion. We bring you firsthand travel experiences,.</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </div>
                            <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
                            <p>Leroy Jenkins</p>
                        </div>
                        <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                            <div className="relative text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300">
                                    <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>
                                <p className="px-6 py-1 text-lg italic">Accusantium illum cupiditate harum asperiores iusto quos quasi quis quae! Fugit doloribus, voluptatum quidem magnam velit excepturi nobis, reprehenderit ducimus incidunt quisquam quae veritatis, quos iure harum.</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300">
                                    <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </div>
                            <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
                            <p>Mr.X</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CountrysSection;