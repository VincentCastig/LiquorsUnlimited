import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Components/Categories/home';
import Wine from '../Components/Categories/wine';
import Contact from '../Components/Categories/contact';

const Routes = () => <h1>404</h1>

export default (
    <Switch>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/wine" component={Wine}></Route>
        <Route path="/" component={Home}></Route>
        <Route component={Routes}></Route>
    </Switch>
);