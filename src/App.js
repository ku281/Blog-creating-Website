//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Header from './Component/Header';
import Home from './Component/home/Home';
import {Box} from '@material-ui/core';
import Detailview from './Component/Post/Detailview';
//import {BrowserRouter,Switch} from 'react-dom';
import {BrowserRouter,Switch,Route,Router} from 'react-router-dom';
//import SwitchBase from '@material-ui/core/internal/SwitchBase';
function App ()
{
  return (
    <BrowserRouter>
    <Header/>
     <Box style={{marginTop:64}}>
     <Switch>
  
    
  <Route exact path="/" component={Home}/>
  <Route  exact path ="/details" component={Detailview}/>
   </Switch>
    </Box>
    </BrowserRouter>
    
  )
  }

export default App;
