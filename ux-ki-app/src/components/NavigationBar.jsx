import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className='Nav fixed bottom-0 top-0 flex flex-col justify-center items-center p-5'>
            <Link className='nav-btn'>Thema 1</Link>
            <Link to="/" className='nav-btn'>Der EU AI Act</Link>
            <Link className='nav-btn'>Thema 3</Link>
            <Link className='nav-btn'>Thema 4</Link>
        </div>
    );
};

export default NavigationBar;