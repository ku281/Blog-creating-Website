import React from 'react';
import Header from './Component/Header';
import Home from './Component/home/Home';
import { Box } from '@material-ui/core';
//import AppWithRouterAccess from './AppWithRouterAccess';
import DetailView from './Component/Post/DetailView';
import CreateView from './Component/Post/CreateView';
import UpdateView from './Component/Post/UpdateView';
//import {  Switch,useHistory } from 'react-dom';
import { useHistory, Switch, Route } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import Login from './Component/account/Login';
import { oktaAuthConfig, oktaSignInConfig } from './config';
const oktaAuth = new OktaAuth(oktaAuthConfig);
//import SwitchBase from '@material-ui/core/internal/SwitchBase';
const AppWithRouterAccess=()=> {
    const history=useHistory();
    const customAuthHandler = () => {
        history.push('/login');
    };
    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
        history.replace(toRelativeUrl(originalUri, window.location.origin));
    };
    return (
        <Security
            oktaAuth={oktaAuth}
            onAuthRequired={customAuthHandler}
            restoreOriginalUri={restoreOriginalUri}
        >

            <SecureRoute path='/' component={Header} />
            <Box style={{ marginTop: 64 }}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
                    <Route path='/login/callback' component={LoginCallback} />
                 <Route exact path="/details/:id" component={DetailView} />
                    <Route exact path="/create" component={CreateView} />
                    <Route exact path="/update/:id" component={UpdateView} />
                </Switch>
            </Box>

           </Security>
            )
  }
 export default AppWithRouterAccess;