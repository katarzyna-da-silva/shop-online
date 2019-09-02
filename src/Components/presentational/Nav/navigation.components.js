import React from 'react';
import { Link } from 'react-router';

import './navigation.components.css';

const Navigation = props => (
    <div>
        <nav className="navMenu">
            <div className="container-fluid">
                <div className="myLogo">
                <Link className="logo" to="/Logo"><p>they</p><p className="secondLogo">new york</p></Link>
                </div>
                <div className="menuNavigation">
                    <ul className="menu">
                        <li><Link to="/Home">home</Link></li>
                        <li><Link to="/Faq">faq</Link></li>
                        <li><Link to="/Regulamin">regulamin</Link></li>
                        <li><Link to="/Kontakt">kontakt</Link></li>
                        <li><Link to="/Koszyk"><i class="icon-shopping-cart"></i></Link></li>
                    </ul>
                    </div>
            </div>
        </nav>
        <div className="container-fluid">
            {props.children}
        </div>
    </div>
);

export default Navigation;