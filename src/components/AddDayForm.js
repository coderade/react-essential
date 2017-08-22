import React from 'react'
import PropTypes from 'prop-types'

export const AddDayForm = ({beach, date, hazards, crowded}) => {

    let _beach, _date, _hazards, _crowded;

    const submit = (e) => {
        e.preventDefault();
        console.log('beach', _beach.value);
        console.log('date', _date.value);
        console.log('hazards', _hazards.checked);
        console.log('crowded', _crowded.checked);
    };

    return (
        <form onSubmit={submit} className="add-day-form">

            <label htmlFor="beach">Beach</label>
            <input id="beach"
                   type="text"
                   defaultValue={beach}
                   ref={input => _beach = input}
                   required/>

            <label htmlFor="date">Date</label>
            <input id="date"
                   type="date"
                   defaultValue={date}
                   ref={input => _date = input}
                   required/>

            <div>
                <input id="hazards"
                       type="checkbox"
                       defaultChecked={hazards}
                       ref={input => _hazards = input}/>
                <label htmlFor="hazards">Dangerous?</label>
            </div>

            <div>
                <input id="crowded"
                       type="checkbox"
                       defaultChecked={crowded}
                       ref={input => _crowded = input}/>
                <label htmlFor="crowded">Is Crowded?</label>
            </div>

            <button>Add Day</button>
        </form>
    )
};

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