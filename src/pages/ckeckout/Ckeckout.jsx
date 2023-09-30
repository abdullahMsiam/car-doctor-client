import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Ckeckout = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;

    const { user } = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const booking = {
            customerName: name,
            email: email,
            date: date,
            img: img,
            service: title,
            service_id: _id,
            price: price,
        };
        console.log({ booking });

        const newOne = { name, email, date, price };

        // fetch('http://localhost:5000/bookings', {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newOne)
        // })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            body: JSON.stringify(booking),
            headers: {
                'Content-Type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <p className='font-bold text-5xl text-center text-orange-700'>Book here: {title}</p>
            <div>
                <form onSubmit={handleBookService}>
                    <div className=" w-full">
                        <div className="card w-full shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className='grid grid-cols-2 gap-5'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Date: </span>
                                        </label>
                                        <input type="date" name='date' placeholder="password" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name='price' defaultValue={price} placeholder="password" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className=" mt-6">
                                    <input className="btn btn-primary btn-block" type="submit" value="Book Now" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Ckeckout;