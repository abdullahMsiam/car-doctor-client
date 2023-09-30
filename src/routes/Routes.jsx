import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/home/Home';
import Loggedin from '../pages/login/Loggedin';
import SignUp from '../pages/signUp/SignUp';
import Ckeckout from '../pages/ckeckout/Ckeckout';
import Bookings from '../pages/bookings/Bookings';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Loggedin></Loggedin>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id',
                element: <Ckeckout></Ckeckout>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
        ]
    },
]);

export default router;