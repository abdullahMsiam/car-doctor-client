import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center text-3xl mt-6'>
                <h2 className="text-bold">Our Services</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique veniam tempora molestias dignissimos harum commodi reiciendis. Repellendus, officia ducimus. Porro.</p>
            </div>
            <div className='grid grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;