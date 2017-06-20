import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import SurfDayRow from './SurfDayRow'


const SurfDayList = ({days, filter}) => {
    const filteredDays = (!filter || !filter.match(/crowded|hazards/)) ?
        days: days.filter(day => day[filter]);
    return (
        <div className="surf-day-list">
            <table>
                <tbody>
                <tr>
                    <th>Date</th>
                    <th>Beach</th>
                    <th>Hazards</th>
                    <th>Crowded</th>
                </tr>
                <tr>
                    <td colSpan={4}>
                        <Link to="/list-days">
                            All Days
                        </Link>
                        <Link to="/list-days/crowded">
                            Crowded Days
                        </Link>
                        <Link to="/list-days/hazards">
                            Dangerous days
                        </Link>
                    </td>
                </tr>
                {filteredDays.map((day, i) =>
                    <SurfDayRow key={i}
                                {...day}/>
                )}
                </tbody>
            </table>
        </div>
    )
};

SurfDayList.propTypes = {
    days: PropTypes.array,
    filter: PropTypes.string

    // Function propType validation example.
    // days: function (props) {
    //     if(!Array.isArray(props.days)){
    //         return new Error('SurfDayList shoud be an array')
    //     } else if (!props.days.length){
    //         return new Error('SurfDayList must have at least one record')
    //     }
    // }
};

export default SurfDayList;