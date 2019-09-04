import React from 'react';
import NavBar from '../../features/NavBar/NavBar.js';
import Footer from '../../features/Footer/Footer.js';

//style
import './Layout.css';

const Layout = () => (
    <div className="layout-container">
           <NavBar />
          
                <Footer />
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
