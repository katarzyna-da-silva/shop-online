import React from 'react';
import { Link } from 'react-router-dom';

//style
import './Footer.css';

const Footer = props => (
    <div>
        <ul className="menu">
            <li><Link to='/home' activeStyle={{
                fontWeight: 'bold',
                color: 'red',
                textDecoration: 'none'
            }}>Home</Link> </li>
            <li><Link to='/faq' activeStyle={{
                fontWeight: 'bold',
                color: 'red',
                textDecoration: 'none'
            }} >Faq</Link></li>
            <li><Link to='/rules' activeStyle={{
                fontWeight: 'bold',
                color: 'red',
                textDecoration: 'none'
            }} >Regulamin</Link></li>
            <li><Link to='/contact' activeStyle={{
                fontWeight: 'bold',
                color: 'red',
                textDecoration: 'none'
            }} >Kontakt</Link></li>
        </ul>
        <div className="copyright">All rights reserved 2019 by K.DaSilva</div>
    </div>
);

export default Footer;