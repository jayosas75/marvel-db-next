import React from "react";
import {Box} from 'retro-react'

const OptionsBox = ({children}) => {
    const BoxSxObject = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        padding: '0',
        // width: ['100%', '100%', '25vw'],
        mr: '1vw',
    };
    return (
        <Box 
          name='FILTER'
          color='secondary'
          sx={BoxSxObject}
        >{children}</Box>
    )
}

export default OptionsBox;