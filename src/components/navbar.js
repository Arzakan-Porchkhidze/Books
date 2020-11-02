import React from 'react';
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <div id = "navWrapper">
            <nav className = 'navbar'>
                <ul className = 'nav-ul'>
                    <li>
                        HOME
                    </li>
                    <li>
                        FAVORITES
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;