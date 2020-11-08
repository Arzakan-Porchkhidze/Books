import React from 'react';
import '../styles/Navbar.css'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div id = "navWrapper">
            <nav className = 'navbar'>
                <ul className = 'nav-ul'>
                    <li>
                    <NavLink to="/"  exact={true}>
                        Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/favorites"  exact={true}>
                        Favorites
                    </NavLink> 
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
