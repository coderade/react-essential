import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SurfDayList from './SurfDayList'
import SurfDayCount from './SurfDayCount'
import AddDayForm from './AddDayForm'
import Menu from './Menu'


export default class App extends Component {
    constructor(props, match) {
        super(props, match);
        this.state = {
            allSurfDays: [
                {
                    beach: 'Fiji',
                    date: '2016-01-02',
                    hazards: true,
                    crowded: true
                }

            ]
        };

        this.addDay = this.addDay.bind(this)
    }

    addDay(newDay) {
        this.setState({
            allSurfDays: [
                ...this.state.allSurfDays,
                newDay
            ]
        })
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
                        <AddDayForm onNewDay={this.addDay}/> :
                        <SurfDayList days={this.state.allSurfDays}
                            filter={'crowded'}/>
                }
            </div>
        )
    }
}

App.propTypes = {
    location: PropTypes.object,
    params: PropTypes.object,
    match: PropTypes.object
};