import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {Switch} from 'react-router';
import './index.css'

import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

import Routescatalogue from './routes/routes_catalogue'


function App(){
    return (
         <Router history={history} id='app-body'>
           <Switch>
               <Routescatalogue/>
           </Switch>
         </Router>
    )
 
  }
  
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)




