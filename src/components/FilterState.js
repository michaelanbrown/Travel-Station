import React from 'react';
import './App.css';

function FilterState({ handleStateFilter }) {

    const states = ['AL','AK','AZ','AR','CA','CO','CT','DC','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']
    

    const optionList = states.map(state => {
        return (<option value={state} key={state}>{state}</option>)
    })

    return (
        <div id="filterstate">Filter by State:{' '}
            <select name="type" onChange={handleStateFilter}>
                <option value="" defaultValue={''}></option>
                {optionList}
            </select>
        </div>
    )
}

export default FilterState;