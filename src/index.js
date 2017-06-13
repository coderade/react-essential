import React from 'react'
import {render} from 'react-dom'
import SurfDayCount from './components/SurfDayCount'

window.React = React;

render(
    <SurfDayCount/>,
    document.getElementById('react-container')
);