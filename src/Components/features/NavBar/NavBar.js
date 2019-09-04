import React from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';

//style
import './NavBar.css';

const NavBar= props => (
    <div>
        <nav className="navMenu">
            <div className="myLogo">
                <Link className="logo" to="/Logo"></Link><p>they</p>
                <p className="secondLogo">new york</p>
                </div>
                <div className="menuNavigation">
                    <ul className="menu">
                       <li><Link to='/' activeStyle={{color: '#48abee'}} onlyActiveOnIndex>Home</Link> </li>
                           <li><Link to='/faq' activeStyle={{color: '#48abee'}} onlyActiveOnIndex>Faq</Link></li>
                           <li><Link to='/rules' activeStyle={{color: '#48abee'}} onlyActiveOnIndex>Regulamin</Link></li>
                           <li><Link to='/contact' activeStyle={{color: '#48abee'}} onlyActiveOnIndex>Kontakt</Link></li>
                           <li><Link to='/shopping' activeStyle={{color: '#48abee'}} onlyActiveOnIndex><i class="icon-shopping-cart"></i></Link></li>
                    </ul>
                    </div>
            </nav>
         
    </div>
  
);

export default NavBar;