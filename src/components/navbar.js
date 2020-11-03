import React from 'react';
import '../styles/navbar.css'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div id = "navWrapper">
            <nav className = 'navbar'>
                <ul className = 'nav-ul'>
                    <li>
                    <NavLink to="/" >
                        HOME
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/favorites" exact={true}>
                        FAVORITES
                    </NavLink> 
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;