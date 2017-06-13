import React from 'react'
import '../stylesheets/ui.scss'
import PropTypes from 'prop-types'

import Terrain from 'react-icons/lib/md/terrain'
import Wave from 'react-icons/lib/go/pulse'
import Calendar from 'react-icons/lib/fa/calendar'

const percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%')
};

const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total / goal)
};

const SurfDayCount = ({total, powder, backcountry, goal}) => {

    return (
        <div className="surf-day-count">
            <div className="total-days">
                <span>{total}</span>
                <Calendar/>
                <span>days</span>
            </div>
            <div className="powder-days">
                <span>{powder}</span>
                <Wave/>
                <span>days</span>
            </div>
            <div className="backcountry-days">
                <span>{backcountry}</span>
                <Terrain/>
                <span>days</span>
            </div>
            <div>
                <span> { calcGoalProgress(total, goal) }</span>
            </div>
        </div>
    )
};

SurfDayCount.propTypes = {
    total: PropTypes.number,
    powder: PropTypes.number,
    backcountry: PropTypes.number,
    goal: PropTypes.number
};

SurfDayCount.defaultProps = {
    total: 50,
    powder: 10,
    backcountry: 15,
    goal: 75
};


export default SurfDayCount;