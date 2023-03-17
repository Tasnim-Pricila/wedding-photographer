import React from 'react';
import { Outlet } from 'react-router-dom/dist';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;