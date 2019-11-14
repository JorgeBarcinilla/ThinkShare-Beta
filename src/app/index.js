import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
//import App from './App';
import AppNav from './components/appNav';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import Thinks from './components/thinks';

const Root = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component = {SignIn} />
            <Route path="/signUp" component = {SignUp} />
        </Switch>
    </BrowserRouter>
);
    
//render(<AppBar/>, document.getElementById('app'));
render(Root, document.getElementById('app'));