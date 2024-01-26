import React from "react";
import {Container} from 'retro-react'

const AppContainer = ({children}) => {
    const sxObject = {
        background: '#000',
        py: '1.5vh',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        flexDirection: ['column','row','row']
    };
    return (
        <Container fluid sx={sxObject}>{children}</Container>
    )
}

export default AppContainer;