import React from 'react';
import '../styles/navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div id = "navWrapper">
            <nav className = 'navbar'>
                <ul className = 'nav-ul'>
                    <li>
                    <Link to="/" >
                        HOME
                    </Link>
                    </li>
                    <li>
                    <Link to="/favorites" >
                        FAVORITES
                    </Link> 
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;