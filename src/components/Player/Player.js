import React, { useEffect, useContext, memo, useRef } from 'react';
import useAxios from 'axios-hooks';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';

import { CountContext } from '../../contexts/CounterContext/CounterContext';

const Player = ({ id, name, link }) => {
    const { updateValue } = useContext(CountContext);
    const wasUpdated = useRef(false);

    const [{ data, loading, error }, refetch] = useAxios(
        `https://morning-reaches-86657.herokuapp.com/https://www.futbin.com/21/playerPrices?player=${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        useCache: false
    }
    )

    if (loading) return null
    if (error) {
        setTimeout(refetch, 2000);
        return null
    }


    if (data && !wasUpdated.current) {
        wasUpdated.current = true;
        console.log('DATA FETCHED FOR ', name);
        updateValue();
    }


    if (data) {
        const { prices: {
            ps: {
                LCPrice: price1, LCPrice5: price5
            }
        } } = data[id];

        // if ((price5 - (price5 * 95 / 100)) > price1) {
        //     return (
        //         <div>
        //             {name} - {price1} - {price5} <a href={link}>LINK</a>
        //         </div>
        //     )
        // }

        return (
            <ListItem button onClick={() => window.open(link, '_blank').focus()}>
                <ListItemIcon><FaceIcon color="primary" /></ListItemIcon>
                <ListItemText primary={name} secondary={`price1 - ${price1} | price5 - ${price5}`} />
            </ListItem>
        )
    }
}

export default memo(Player);