import { useLoaderData } from 'react-router-dom';
import Tourists from './Tourists';

const AllTourists = () => {
    const tourists = useLoaderData()
    return (
        <div>
            <h1>Tourists number {tourists.length}</h1>
            <div className='grid md:grid-cols-3'>
                {
                    tourists.map(copy => <Tourists key={copy._id} tour={copy}></Tourists>)
                }
            </div>
        </div>
    );
};

export default AllTourists;