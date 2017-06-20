import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SurfDayList from './SurfDayList'
import SurfDayCount from './SurfDayCount'
import AddDayForm from './AddDayForm'
import Menu from './Menu'


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
                <Menu/>
                {(this.props.location.pathname === '/') ?
                    <SurfDayCount total={this.countDays()}
                                  hazards={this.countDays(('havards'))}
                                  crowded={this.countDays(('crowded'))}
                    /> :
                    (this.props.location.pathname === '/add-day') ?
                        <AddDayForm/> :
                        <SurfDayList days={this.state.allSurfDays}
                            filter={this.props.params.filter}/>
                }
            </div>
        )
    }
}

App.propTypes = {
    location: PropTypes.object,
    params: PropTypes.object
};