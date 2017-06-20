import React, {Component} from 'react'
import SurfDayList from './SurfDayList'
import SurfDayCount from './SurfDayCount'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allSurfDays: [
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
        }
    }

    countDays(filter) {
        const {allSurfDays} = this.state;
        return allSurfDays.filter(
            (day) => (filter) ? day[filter] : day
        ).length
    }

    render() {
        return (
            <div className="app">
                <SurfDayList days={this.state.allSurfDays}/>
                <SurfDayCount total={this.countDays()}
                              hazards={this.countDays(('havards'))}
                              crowded={this.countDays(('crowded'))}

                />

            </div>
        )
    }
}