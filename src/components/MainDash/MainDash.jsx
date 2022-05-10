import React from 'react';
import Cards from '../Cards/Cards';
import Table from '../Table/Table';
import './maindash.css';

const MainDash = () => {
    return (
        <div className="main-dash">
            <h1>Dashboard</h1>
            <Cards />
            <Table />
        </div>
    )
}

export default MainDash;