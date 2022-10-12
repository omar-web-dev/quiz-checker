import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Componets/Footer';
import Navber from '../Componets/Navber';

const Main = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;