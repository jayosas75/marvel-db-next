import React from "react";
import {Container, Card, Scrollbar, Text} from 'retro-react'

const BackgroundCard = ({name, image}) => {
    const sxObject = {
        // height: '75vh', //632px
          // width: '48vw', //463px
          zIndex: '999',
          // height: '632px', //632px
          // width: '463px', //463px
          width: '356px',
          height: '486px',
          ml: ['-10vw','-20vw','-20vw']
    };
    return (
      <Card
        alt="Wolverine"
        color="warn"
        footer="All Information from Marvel DB"
        header={<Text sx={{paddingLeft: '1.5vw', paddingBottom: '1vh'}} align="left">Next</Text>}
        image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
        pattern="noise"
        rounded
        sx={sxObject}>
          { name !== '' ? <Text variant='body1'>{name}</Text> : <Text variant='body1'>Wolverine</Text>} 
        <Text variant="small">{name}{name}{name}{name}{name}{name}{name}{name}{name}{name}{name}{name}{name}{name}{name}</Text>
      </Card>
    )
}

export default BackgroundCard;