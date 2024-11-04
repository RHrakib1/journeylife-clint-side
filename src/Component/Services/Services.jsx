import { MdHealthAndSafety } from "react-icons/md";
import { FaMapLocation } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { FaBriefcase } from "react-icons/fa";


const Services = () => {
    return (
        <div className='bg-gray-400 grid md:grid-cols-4 gap-4 p-10 rounded-lg mt-10 mb-10'>
            <div className="p-5 rounded-xl bg-gray-300 text-primary-content ">
                <div className="">
                    <BiSolidOffer className="text-5xl bg-gray-100 p-1 mb-5"></BiSolidOffer >
                    <h2 className="text-2xl font-bold mb-2">Tour Package Offers</h2>
                    <p>We offer customized tour packages for different budgets and durations, so that you can visit the destination of your choice.</p>
                </div>
            </div>
            <div className="p-5 rounded-xl bg-gray-300 text-primary-content ">
                <div>
                    <FaMapLocation className="text-5xl bg-gray-100 p-1 mb-5" ></FaMapLocation >
                    <h2 className="text-2xl font-bold mb-2">Travel Consultation</h2>
                    <p>Our experienced travel consultants will help you plan your trip, where you will get the best suggestions according to your choice of destination and budget.</p>
                </div>
            </div>
            <div className="p-5 rounded-xl bg-gray-300 text-primary-content">
                <div className="">
                    <FaBriefcase className="text-5xl bg-gray-100 p-1 mb-5"></FaBriefcase>
                    <h2 className="text-2xl font-bold mb-2">Local Experiences</h2>
                    <p>We offer customized experiences according to local culture and customs, where you can enjoy local food, festivals and traditions.</p>
                </div>
            </div>
            <div className="p-5 rounded-xl bg-gray-300 text-primary-content">
                <div className="">
                    <MdHealthAndSafety className="text-5xl bg-gray-100 p-1 mb-5"></MdHealthAndSafety>
                    <h2 className="text-2xl font-bold mb-2">Travel Safety</h2>
                    <p>
                        Your safety is our priority. We provide health and safety tips and support for every trip, so you can travel with peace of mind.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;