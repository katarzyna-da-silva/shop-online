import React from 'react';
import { NavLink } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';

//style
import './NavBar.css';

const NavBar = props => (
    <div>
        <nav className="navMenu">
            <div className="myLogo">
                <NavLink className="logo" to="/Logo"></NavLink><p>they</p>
                <p className="secondLogo">new york</p>
            </div>
            <div className="menuNavigation">
                <ul className="menu">
                    <li><NavLink to='/home' activeStyle={{
                        fontWeight: 'bold',
                        color: 'red',
                        textDecoration: 'none'
                    }} >Home</NavLink> </li>
                    <li><NavLink to='/faq' activeStyle={{
                        fontWeight: 'bold',
                        color: 'red',
                        textDecoration: 'none'
                    }}>Faq</NavLink></li>
                    <li><NavLink to='/rules' activeStyle={{
                        fontWeight: 'bold',
                        color: 'red'
                    }}>Regulamin</NavLink></li>
                    <li><NavLink to='/contact' activeStyle={{
                        fontWeight: 'bold',
                        color: 'red',
                        textDecoration: 'none'
                    }}>Kontakt</NavLink></li>
                    <li><NavLink to='/shopping' activeStyle={{
                        fontWeight: 'bold',
                        color: 'red',
                        textDecoration: 'none'
                    }}><i class="icon-shopping-cart"></i></NavLink></li>
                </ul>
            </div>
        </nav>
        <div>
            <props />
        </div>
        </div>

);

export default NavBar;