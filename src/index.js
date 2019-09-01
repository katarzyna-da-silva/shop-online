import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from './Components/presentational/Nav/navigation.components';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        
          <Switch>
          <Route exact path={"/"} component={Navigation} />
          </Switch>
       
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
