import Swal from "sweetalert2";
import { authContext } from "../Provider/AuthProvider";
import { useContext } from "react";


const AddTourists = () => {
    const { users } = useContext(authContext)
    const hendleFrom = e => {
        e.preventDefault()
        const base = e.target
        const spotName = base.spotName.value
        const location = base.location.value
        const averageCost = base.averageCost.value
        const travleTime = base.travleTime.value
        const countryName = base.countryName.value
        const shortDes = base.description.value
        const rating = base.rating.value
        const seasonality = base.seasonality.value
        const totalvisit = base.totalvisit.value
        const url = base.url.value
        const email = users.email
        const usersData = { spotName, location, averageCost, travleTime, countryName, shortDes, seasonality, totalvisit, url, rating, email }
        console.log(usersData);

        fetch('https://journelife-server-side-38ju0pt3s.vercel.app/journey', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usersData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Spot Add to database',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })

    }
    return (
        <div className='bg-pink-800 p-10'>
            <h1 className='text-4xl font-extrabold'>Add Tourists Spot</h1>
            <form onSubmit={hendleFrom}>
                <div className='flex gap-10 justify-center'>
                    <div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl">Tourists_spot_name</span>
                            </label>
                            <input type="text" placeholder="spot_name" name='spotName' className="input input-bordered w-full " />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl">location</span>
                            </label>
                            <input type="text" placeholder="location" name='location' className="input input-bordered w-full " />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl">average_cost
                                </span>
                            </label>
                            <input type="text" placeholder="average_cost" name='averageCost' className="input input-bordered w-full " />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl">travel_time</span>
                            </label>
                            <input type="text" placeholder="travel_time" name='travleTime' className="input input-bordered w-full " />
                        </div>

                    </div>
                    <div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl">country_Name</span>
                            </label>
                            <input type="text" placeholder="country_Name" name='countryName' className="input input-bordered w-full " />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl">Rating</span>
                            </label>
                            <input type="text" placeholder="rating" name='rating' className="input input-bordered w-full " />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl">seasonality</span>
                            </label>
                            <input type="text" placeholder="seasonality" name='seasonality' className="input input-bordered w-full " />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl">totaVisitorsPerYear</span>
                            </label>
                            <input type="text" placeholder="totaVisitorsPerYear" name='totalvisit' className="input input-bordered w-full " />
                        </div>
                    </div>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text text-xl">image</span>
                    </label>
                    <input type="text" placeholder="URL" name='url' className="input input-bordered w-full " />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text text-xl">Description</span>
                    </label>
                    <textarea
                        placeholder="Enter description"
                        name='description'
                        className="textarea textarea-bordered w-full"
                    />
                </div>
                <input type="submit" value='Add spot' className='btn btn-block mt-4' style={{ backgroundColor: 'black', color: 'white' }} />
            </form>
        </div> 
    );
};

export default AddTourists;