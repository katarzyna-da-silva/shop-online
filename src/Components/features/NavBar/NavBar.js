import React from 'react';
import { Link } from 'react-router';
import './NavBar.css';

const NavBar = props => (
    <div>
        <nav className="navMenu">
            <div className="myLogo">
                <Link className="logo" to="/Logo"></Link><p>they</p>
                <p className="secondLogo">new york</p>
                </div>
                <div className="menuNavigation">
                    <ul className="menu">
                       <li><Link to='/'>Home</Link> </li>
                           <li><Link to='/faq'>Faq</Link></li>
                           <li><Link to='/rules'>Regulamin</Link></li>
                           <li><Link to='/contact'>Kontakt</Link></li>
                           <li><Link to='/shopping'><i class="icon-shopping-cart"></i></Link></li>
                    </ul>
                    </div>
            </nav>
            <div className="NavMenu">
            {props.children}
        </div>  
    </div>
  
);

export default NavBar;