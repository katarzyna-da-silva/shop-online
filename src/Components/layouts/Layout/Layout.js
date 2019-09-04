import React from 'react';
import NavBar from '../../features/NavBar/NavBar.js';

//style
import './Layout.css';

// import { Footer } from '../Footer/Footer.js';

const Layout = () => (
    <div className="layout-container">
           <NavBar />
  
            </div>
  );
  
  export default Layout;

  

// export class Layout extends React.Component {
//     render() {
//         return (
//             <div className="layout-container">
//                 <NavBar />
//                 {this.props.children}
//             </div>
//         );
//     };
// };
