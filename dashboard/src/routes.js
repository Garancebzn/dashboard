import React from 'react';
import {Route, Switch} from 'react-router-dom';
import home from './Pages/Home';
import contact from './Pages/Contact';


export default ()=> (

    <Switch>
        <Route path="/" exact component={home}/>
        <Route path="/contact" exact component={contact}/>

    </Switch>

);
