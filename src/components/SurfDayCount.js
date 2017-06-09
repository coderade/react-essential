import React from 'react'
import '../stylesheets/ui.scss'
import PropTypes from 'prop-types';

export default class SurfDayCount extends React.Component {
    constructor() {
        super();
    }
    
    render() {
            return (
                <div className="surf-day-count">
                    <div className="total-days">
                        <span>{this.props.total}</span>
                        <span>days</span>
                    </div>
                    <div className="powder-days">
                        <span>{this.props.powder}</span>
                        <span>days</span>
                    </div>
                    <div className="backcountry-days">
                        <span>{this.props.backcountry}</span>
                        <span>days</span>
                    </div>
                    <div>
                        <span>{this.props.goal}</span>
                    </div>
                </div>
            )
    }
}

SurfDayCount.propTypes = {
    total: PropTypes.number,
    powder: PropTypes.number,
    backcountry: PropTypes.number,
    goal: PropTypes.number
};

