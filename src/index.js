import React from 'react'
import {render} from 'react-dom'
import SurfDayCount from './components/SurfDayCount'

window.React = React;

render(
    <SurfDayCount total={50} powder={20} backcountry={10} goal={100}/>,
    document.getElementById('react-container')
);