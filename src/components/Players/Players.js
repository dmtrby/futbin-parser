import React from 'react';
import List from '@material-ui/core/List';

import Player from '../Player/Player';

const Players = ({ players }) => {
    return (
        <List>
            {players.map(player =>
                <Player key={player.id} id={player.id} name={player.name} link={player.link} />
            )}
        </List>
    )
}

export default Players;