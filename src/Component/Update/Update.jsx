import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const up = useLoaderData()
    const { _id, spotName, location, averageCost, travleTime, countryName, shortDes, seasonality, totalvisit, url, rating } = up


    const hendleUpdate = e => {
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
        const usersData = { spotName, location, averageCost, travleTime, countryName, shortDes, seasonality, totalvisit, url, rating }
        console.log(usersData);

        fetch(`https://journelife-server-side-38ju0pt3s.vercel.app/update/${_id}`, {
            method: "PUT",
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
                    text: 'Your Spot has been updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })

    }
    return (
        <div className='bg-pink-800 p-10'>
            <h1 className='text-4xl font-extrabold'>Add Tourists Spot</h1>
            <form onSubmit={hendleUpdate}>
                <div className='flex gap-10 justify-center'>
                    <div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl">Tourists_spot_name</span>
                            </label>
                            <input type="text" placeholder="spot_name" defaultValue={spotName} name='spotName' className="input input-bordered w-full " />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl">location</span>
                            </label>
                            <input type="text" placeholder="location" defaultValue={location} name='location' className="input input-bordered w-full " />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl">average_cost
                                </span>
                            </label>
                            <input type="text" placeholder="average_cost" defaultValue={averageCost} name='averageCost' className="input input-bordered w-full " />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl">travel_time</span>
                            </label>
                            <input type="text" placeholder="travel_time" defaultValue={travleTime} name='travleTime' className="input input-bordered w-full " />
                        </div>

                    </div>
                    <div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl">country_Name</span>
                            </label>
                            <input type="text" placeholder="country_Name" defaultValue={countryName} name='countryName' className="input input-bordered w-full " />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl">Rating</span>
                            </label>
                            <input type="text" placeholder="rating" defaultValue={rating} name='rating' className="input input-bordered w-full " />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl">seasonality</span>
                            </label>
                            <input type="text" placeholder="seasonality" defaultValue={seasonality} name='seasonality' className="input input-bordered w-full " />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl">totaVisitorsPerYear</span>
                            </label>
                            <input type="text" placeholder="totaVisitorsPerYear" name='totalvisit' defaultValue={totalvisit} className="input input-bordered w-full " />
                        </div>
                    </div>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text text-xl">image</span>
                    </label>
                    <input type="text" placeholder="URL" defaultValue={url} name='url' className="input input-bordered w-full " />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text text-xl">Description</span>
                    </label>
                    <textarea
                        placeholder="Enter description"
                        name='description' defaultValue={shortDes}
                        className="textarea textarea-bordered w-full"
                    />
                </div>
                <input type="submit" value='Add spot' className='btn btn-block mt-4' style={{ backgroundColor: 'black', color: 'white' }} />
            </form>
        </div>
    );
};

export default Update;