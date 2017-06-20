import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import Page404 from './components/Page404'
import {HashRouter, Route, Switch} from 'react-router-dom'


window.React = React;

render(
    <HashRouter>
        <div>
            <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/list-days' component={App}/>
            <Route path='/add-day' component={App}/>
            <Route component={Page404}/>
            </Switch>
        </div>
    </HashRouter>,
    document.getElementById('react-container')
);