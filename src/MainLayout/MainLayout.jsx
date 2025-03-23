import Footer from '@/Shared/Footer';
import Navbar from '@/Shared/Navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className=''>
            <div className='h-[65px]'>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;