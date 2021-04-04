import React, { useContext } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import { CountContext } from '../../contexts/CounterContext/CounterContext';

function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

export default function ProgressBar({ overallNumber }) {
    const context = useContext(CountContext);

    const { value } = context;

    const progress = (100 * value) / overallNumber;
    return (
        <div>
            <div className="text-center">
                {value} from {overallNumber} players have been loaded
            </div>
            <LinearProgressWithLabel value={progress} />
        </div>
    );
}