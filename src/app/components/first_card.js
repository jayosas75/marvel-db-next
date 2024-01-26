import React from "react";
import {Container, Card, Scrollbar, Text} from 'retro-react'

const FirstCard = ({name, image}) => {
    const sxObject = {
          zIndex: '1000',
          maxWidth: '356px',
          maxHeight: '486px',
    };
    return (
      <Card
        alt={name}
        color="secondary"
        footer="All Information from Marvel DB"
        image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
        pattern="dots"
        rounded
        sx={sxObject}
      >
        { name !== '' ? <Text variant='body1'>{name}</Text> : <Text variant='body1'>Wolverine</Text>}
        {/* <TypewriterText
          color="#000000"
          text={activeCardName == '' ? activeCardName : 'Wolverine'}
          typingSpeed={70}
          sx={{fontWeight: '700'}}
        /> */}
        <Scrollbar theme="grayscale">
        <Text variant="small">
          Get ready to rock and roll, fellow cybernauts! As we embark on this wicked journey through the World Wide Web, we'll uncover hidden digital treasures and ride the gnarliest of cyber waves. So dust off your dial-up modems, grab your neon-colored fanny packs, and join us on this tubular trip down memory lane. Remember to always save your progress on a floppy disk, and be excellent to each other. Cowabunga, dude!
          Get ready to rock and roll, fellow cybernauts! As we embark on this wicked journey through the World Wide Web, we'll uncover hidden digital treasures and ride the gnarliest of cyber waves. So dust off your dial-up modems, grab your neon-colored fanny packs, and join us on this tubular trip down memory lane. Remember to always save your progress on a floppy disk, and be excellent to each other. Cowabunga, dude!
          Get ready to rock and roll, fellow cybernauts! As we embark on this wicked journey through the World Wide Web, we'll uncover hidden digital treasures and ride the gnarliest of cyber waves. So dust off your dial-up modems, grab your neon-colored fanny packs, and join us on this tubular trip down memory lane. Remember to always save your progress on a floppy disk, and be excellent to each other. Cowabunga, dude!
        </Text>
        </Scrollbar>
      </Card>
    )
}

export default FirstCard;