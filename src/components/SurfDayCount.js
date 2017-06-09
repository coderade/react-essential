import React from 'react';
import '../stylesheets/ui.scss'
import PropTypes from 'prop-types';

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
                <span>days</span>
            </div>
            <div className="powder-days">
                <span>{powder}</span>
                <span>days</span>
            </div>
            <div className="backcountry-days">
                <span>{backcountry}</span>
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

export default SurfDayCount;