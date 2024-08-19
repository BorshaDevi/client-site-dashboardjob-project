import React from 'react';
import Dashboard from '../Components/Dashboard/Dashboard';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='flex'>
            <Dashboard></Dashboard>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;