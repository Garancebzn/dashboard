import React, { Component } from 'react';
//import ResponsiveContainer from "react-responsive-widget";

import './App.css';
import Routes from './routes';
//import SimpleTimeseries from './components/SimpleTimeseries';
//import contact from './Pages/Contact';
//import home from './Pages/Home';


import {
 // Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
   } from 'reactstrap';

   //var Router = require('react-router-dom');
   //var Route = Router.Route;
   //var home = require('./components/Home').default
   //var contact = require('./components/Contact').default


   export default class App extends Component {
 
  render() {
    return (
    



      <div>

      <header>
              <Navbar color="light" light expand="md">
          <NavbarBrand href="/">MyMusic Dashboard</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
        
            <Nav className="ml-auto" navbar>
              <NavItem rignt>
                <NavLink href="/Contact">Contact</NavLink>
              </NavItem>

              </Nav>
          
              
            
         
        </Navbar>
        
        <Routes/>

        </header>


      </div>

      
      
     
    )
    ;
  }
}



