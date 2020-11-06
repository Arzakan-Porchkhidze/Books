import React from 'react';
import '../styles/Navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div id = "navWrapper">
            <nav className = 'navbar'>
                <ul className = 'nav-ul'>
                    <li>
                    <Link to="/" >
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link to="/favorites" >
                        Favorites
                    </Link> 
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;