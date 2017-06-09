import React from 'react'
import createReactClass from 'create-react-class'


export const SurfDayCount = createReactClass({
    displayName: 'SurfDayCount',
    render() {
            return (
                <div className="surf-day-count">
                    <div className="total-days">
                        <span>5 days</span>
                    </div>
                    <div className="powder-days">
                        <span>2 days</span>
                    </div>
                    <div className="backcountry-days">
                        <span>1 hiking day</span>
                    </div>
                </div>
            )
    }
});