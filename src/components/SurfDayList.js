import React from 'react'
import PropTypes from 'prop-types'
import SurfDayRow from './SurfDayRow'


const SurfDayList = ({days}) => {
    return (
        <table>
            <tbody>
            <tr>
                <th>Date</th>
                <th>Beach</th>
                <th>Hazards</th>
                <th>Crowded</th>
            </tr>
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