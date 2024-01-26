import React from "react";
import {Container} from 'retro-react'

const AppContainer = ({children}) => {
    const sxObject = {
        // background: '#000',
        // py: '1.5vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: ['column','row','row']
    };
    return (
        <Container fluid sx={sxObject}>{children}</Container>
    )
}

export default AppContainer;