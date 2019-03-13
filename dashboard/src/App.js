import React, { Component } from 'react';
//import ResponsiveContainer from "react-responsive-widget";

import './App.css';

//import SimpleTimeseries from './components/SimpleTimeseries';
import contact from './Pages/Contact.js';
import home from './Pages/Home.js';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
   } from 'reactstrap';

   var Router = require('react-router');
   var Route = Router.Route;
   //var home = require('./components/Home').default
   //var contact = require('./components/Contact').default


   export default class App extends Component {
 
  render() {
    return (
    



      <div>

      <head>
              <Navbar color="light" light expand="md">
          <NavbarBrand href="/">MyMusic Dashboard</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
        
            <Nav className="ml-auto" navbar>
              <NavItem rignt>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>

              </Nav>
          
              
            
         
        </Navbar>
        

        </head>

<main>
<Router>
     
        <Route exact path="/" component={home} />
        <Route path="/contact" component={contact} />

        </Router>
      </main>

      </div>

      
      
     
    )
    ;
  }
}



