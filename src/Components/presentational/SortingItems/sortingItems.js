import React from 'react';
import { Link } from 'react-router';

import './sortingItems.css';

const Sorting = props => (
    <div className="sorting-container">
            <div className="Sorting">
            <Link className="Sorting" to="/Sorting"><p>sortuj : </p></Link>
            </div>
                <div className="MenuSorting">
                    <ul className="menu">
                        <li><Link to="/Nazwa">nazwa a-z</Link></li>
                        <li><Link to="/Nazwa">nazwa z-a</Link></li>
                        <li><Link to="/Cena">cena rosnąco</Link></li>
                        <li><Link to="/Cena">cena malejąco</Link></li>
                    </ul>
                    </div>
        <div className="container-fluid">
            {props.children}
        </div>
    </div>
);

export default Sorting;