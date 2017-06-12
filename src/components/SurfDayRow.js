import React from 'react'
import PropTypes from 'prop-types'
import Dangerous from 'react-icons/lib/go/alert'
import Crowded from 'react-icons/lib/md/people'

const SurfDayRow = ({beach, date, hazards, crowded}) => {
    return (
        <tr>
            <td>{date.getMonth() + 1}/
                {date.getDate()}/
                {date.getFullYear()}
            </td>
            <td>{beach}</td>
            <td> {(hazards) ? <Dangerous/> : null}</td>
            <td>{(crowded) ? <Crowded/> : null}</td>
        </tr>
    )
};

SurfDayRow.propTypes = {
    beach: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    hazards: PropTypes.bool,
    crowded: PropTypes.bool
};

export default SurfDayRow;