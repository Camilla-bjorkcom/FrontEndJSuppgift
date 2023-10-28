import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to='/' className="active">Home</Link>
            <Link to='/newsdetails'>Service</Link>
            <Link to='/news'>News</Link>
            <Link to='/Contact'>Contact</Link>
        </nav>
    )
}

export default Navbar