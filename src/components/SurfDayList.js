import React from 'react'
import PropTypes from 'prop-types'
import SurfDayRow from './SurfDayRow'


const SurfDayList = ({days}) => {
    return (
        <table>
            <tr>
                <th>Date</th>
                <th>Beach</th>
                <th>Hazards</th>
                <th>Crowded</th>
            </tr>
            <tbody>
            {days.map((day, i) =>
                <SurfDayRow key={i}
                            {...day}/>
            )}
            </tbody>
        </table>
    )
};

SurfDayList.propTypes = {
    days: PropTypes.array
};

export default SurfDayList;