import React, { useState, useEffect } from 'react';
import useAxios from 'axios-hooks'
import Button from '@material-ui/core/Button';
import { reactLocalStorage } from 'reactjs-localstorage';

import Players from '../Players/Players';
import SettingsContainer from '../SettingsContainer/SettingsContainer';
import ProgressBar from '../ProgressBar/ProgressBar';
import CounterContext from '../../contexts/CounterContext/CounterContext';

const PlayersContainer = () => {
    const [startValue, setStartValue] = useState(0);
    const [endValue, setEndValue] = useState(0);

    useEffect(() => {
        const storagedStartValue = reactLocalStorage.get('startValue');
        const storagedEndValue = reactLocalStorage.get('endValue');
        setStartValue(storagedStartValue);
        setEndValue(storagedEndValue);
    }, []);

    const [{ data: players, loading, error }, sendRequest] = useAxios(
        `/api/players?start=${startValue}&end=${endValue}`, { manual: true, useCache: false });

    return (
        <>
            <SettingsContainer
                startValue={startValue}
                endValue={endValue}
                setStartValue={setStartValue}
                setEndValue={setEndValue}
            />

            <div className="text-center margin-top-bottom-1">
                <Button variant="contained" color="primary" onClick={sendRequest}>
                    LOAD PRICES
                </Button>
            </div>
            {players && !loading ? <CounterContext>
                <ProgressBar overallNumber={players.length} />
                <Players players={players} />
            </CounterContext> : null}

        </>
    )
}

export default PlayersContainer;