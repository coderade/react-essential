import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import Page404 from './components/Page404'
import {HashRouter, Route} from 'react-router-dom'


window.React = React;

render(
    <HashRouter>
        <div>
            <Route exact path='/' component={App}/>
            <Route exact path="*" component={Page404}/>
        </div>
    </HashRouter>,
    document.getElementById('react-container')
);