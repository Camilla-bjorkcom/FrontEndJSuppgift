import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/newsdetails'>Service</NavLink>
            <NavLink to='/news'>News</NavLink>
            <NavLink to='/Contact'>Contact</NavLink>
        </nav>
    )
}

export default Navbar