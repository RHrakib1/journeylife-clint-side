import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../Provider/AuthProvider';
import Listed from './Listed';

const MyList = () => {
    const { users } = useContext(authContext)
    const [item, setitem] = useState([])
    useEffect(() => {
        fetch(`https://journelife-server-side-38ju0pt3s.vercel.app/mylist/${users?.email}`)
            .then(res => res.json())
            .then(data => setitem(data))
    }, [users])
    return (
        <div>
            <h1>My List</h1>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    item.map(p => <Listed key={p._id} list={p}></Listed>)
                }
            </div>
        </div>
    );
};

export default MyList;