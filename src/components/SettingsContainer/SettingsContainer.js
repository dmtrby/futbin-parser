import React from 'react';
import TextField from '@material-ui/core/TextField';
import { reactLocalStorage } from 'reactjs-localstorage';

const SettingsContainer = ({ startValue, endValue, setStartValue, setEndValue }) => {
    const handleStartRangeChange = (e) => {
        const value = +(e.target.value);
        setStartValue(value);
        reactLocalStorage.set('startValue', value);
    }

    const handleEndRangeChange = (e) => {
        const value = +(e.target.value);
        setEndValue(value);
        reactLocalStorage.set('endValue', value);
    }

    return (
        <form noValidate autoComplete="off">
            <div className="display-flex flex-justify-around">
                <TextField
                    error={false}
                    id="start"
                    label="Players start range"
                    helperText="1 to 3800"
                    value={startValue}
                    onChange={handleStartRangeChange}
                />

                <TextField
                    error={false}
                    id="page-end"
                    label="Players end range"
                    helperText="1 to 3800"
                    value={endValue}
                    onChange={handleEndRangeChange}
                />
            </div>
        </form>
    )
}

export default SettingsContainer;