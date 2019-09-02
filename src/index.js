import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const Root = () => (
    <Router>
      <App />
    </Router>
  );

ReactDOM.render(<Root />, document.getElementById('root'));



// import React from "react";
// import { render } from "react-dom";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Navigation from './Components/presentational/Nav/navigation.components';
// import Sorting from './Components/presentational/SortingItems/sortingItems';

// class App extends React.Component {
//   render() {
//     return (
//       <BrowserRouter>
        
//           <Switch>
//           <Route exact path={"/"} component={Navigation} />
//           <Route exact path={"/"} component={Sorting} />
//           </Switch>
       
//       </BrowserRouter>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// render(<App />, rootElement);
