import Navbar from '@/Shared/Navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='font-lexend'>
            <div className='h-[65px]'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;