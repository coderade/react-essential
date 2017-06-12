import React from 'react'
import {render} from 'react-dom'
import SurfDayList from './components/SurfDayList'

window.React = React;

render(
    <SurfDayList days={
        [
            {
                beach: 'Hawaii',
                date: new Date('01/16/2017'),
                hazards: true,
                crowded: false
            },
            {
                beach: 'Maresias',
                date: new Date('06/19/2017'),
                hazards: true,
                crowded: false
            },
            {
                beach: 'Fiji',
                date: new Date('12/25/2017'),
                hazards: true,
                crowded: true
            },
            {
                beach: 'Rio',
                date: new Date('08/29/2017'),
                hazards: true,
                crowded: true
            }

        ]
    }/>,
    document.getElementById('react-container')
);