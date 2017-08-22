import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import NotFound from './components/NotFound'
import {HashRouter, Route, Switch} from 'react-router-dom'


window.React = React;

render(
    <HashRouter>
        <div>
            <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/list-days' component={App}>
                <Route path=':filter' component={App}/>
            </Route>
            <Route path='/add-day' component={App}/>
            <Route component={NotFound}/>
            </Switch>
        </div>
    </HashRouter>,
    document.getElementById('react-container')
);