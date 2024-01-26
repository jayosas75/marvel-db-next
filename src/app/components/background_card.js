import React from "react";
import {Container, Card, Scrollbar, Text} from 'retro-react'

const BackgroundCard = ({name, image}) => {
    const sxObject = {
          // width: '48vw', //463px
          zIndex: '999',
          // width: '463px', //463px
          width: '356px',
          maxHeight: '486px',
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
          <Text variant="small">
          Get ready to rock and roll, fellow cybernauts! As we embark on this wicked journey through the World Wide Web, we'll uncover hidden digital treasures and ride the gnarliest of cyber waves. So dust off your dial-up modems, grab your neon-colored fanny packs, and join us on this tubular trip down memory lane. Remember to always save your progress on a floppy disk, and be excellent to each other. Cowabunga, dude!
        </Text>
      </Card>
    )
}

export default BackgroundCard;