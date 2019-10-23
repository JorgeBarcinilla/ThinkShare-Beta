import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
//import App from './App';
import AppNav from './components/appNav';
import AppBar from './components/appBar';
import Profile from './components/profile';
import Thinks from './components/thinks';

const Root = (
    <BrowserRouter>
        <Switch>
            <Route path="/profile" component = {Profile} />
            <Route path="/thinks" component = {Thinks} />
        </Switch>
    </BrowserRouter>
);
    
render(<AppBar/>, document.getElementById('app'));
//render(Root, document.getElementById('app'));