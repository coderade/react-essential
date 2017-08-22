import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AddDayForm extends Component {
    render() {

        const {beach, date, hazards, crowded} = this.props;

        return (
            <form className="add-day-form">

                <label htmlFor="beach">Beach</label>
                <input id="beach" type="text" defaultValue={beach} required/>

                <label htmlFor="date">Date</label>
                <input id="date" type="date" defaultValue={date} required/>

                <div>
                    <input id="hazards" type="checkbox" defaultChecked={hazards} required/>
                    <label htmlFor="hazards">Dangerous?</label>
                </div>

                <div>
                    <input id="crowded" type="checkbox" defaultChecked={crowded} required/>
                    <label htmlFor="crowded">Is Crowded?</label>
                </div>
            </form>
        )
    }
}

AddDayForm.defaultProps = {
    beach: 'Hawaii',
    date: '2017-08-29',
    hazards: true,
    crowded: true

};

AddDayForm.propTypes = {
    beach: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    hazards: PropTypes.bool.isRequired,
    crowded: PropTypes.bool.isRequired
};

export default AddDayForm;