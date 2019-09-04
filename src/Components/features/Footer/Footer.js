import React from 'react';
import { Link } from 'react-router-dom';

//style
import './Footer.css';

const Footer = props => (
    <div>
        <ul className="menu">
        <li><Link to='/' activeStyle={{color: '#48abee'}} onlyActiveOnIndex>Home</Link> </li>
        <li><Link to='/faq' activeStyle={{color: '#48abee'}} onlyActiveOnIndex>Faq</Link></li>
        <li><Link to='/rules' activeStyle={{color: '#48abee'}} onlyActiveOnIndex>Regulamin</Link></li>
        <li><Link to='/contact' activeStyle={{color: '#48abee'}} onlyActiveOnIndex>Kontakt</Link></li>
</ul>
<h5 className ="copyright">All rights reserved 2019 by K.DaSilva</h5>
</div>
);

export default Footer;