import React from 'react';
import { BrowserRouter, Switch, Route, } from "react-router-dom";

import Layout from './components/layouts/Layout/Layout';
import Home from './components/pages/Home/HomePage';
import Faq from './components/pages/Faq/Faq';
import Rules from './components/pages/Rules/Rules';
import Contact from './components/pages/Contact/Contact';
import Shopping from './components/pages/Shopping/Shopping';

//import style
import './App.css';
//<IndexRoute component={Home}/>
  const App = () => (
      <BrowserRouter>
        <Switch>
        <Layout>
        <Route exact path="/" component={Home} />
          <Route exact path='/faq' component={Faq} />
          <Route exact path='/rules' component={Rules} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/shopping' component={Shopping} />
          </Layout>
        </Switch>
        </BrowserRouter> 
    );


export default App;


// class App extends React.Component {

//   render() {
//     return (