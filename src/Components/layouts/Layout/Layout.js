import React from 'react';
import { NavBar } from '../NavBar/NavBar.js';
// import { Footer } from '../Footer/Footer.js';

//style import
import './Layout.css';

export class Layout extends React.Component {
    render() {
        return (
            <div className="layout-container">
                <NavBar/>
                {this.props.children}
                {/* <Footer /> */}
            </div>
        );
    };
};