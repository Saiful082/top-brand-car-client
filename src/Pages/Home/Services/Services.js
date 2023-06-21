import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])


    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-blod text-orange-600'>Service</p>           
                <h2 className='text-5xl font-semibold'>Our Service Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className=''>
                {
                    services.map(service => <ServiceCart 
                        key={service._id}

                        ></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Services;