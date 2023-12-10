'use client'
import { createContext } from 'react'
import Image from 'next/image'
import { Container,
  ThemeProvider,
  defaultTheme,
  Navbar,
  NavLogo,
  NavItem,
  Text,
  Box,
  Card
} from 'retro-react'

// custom components
import FlexibleLayoutCustom from './components/flexibleLayout'
import Test from './components/test'
// styles
import styles from './page.module.css'
  
const myTheme = { 
  ...defaultTheme, 
  colors: { 
    ...defaultTheme.colors, 
    primary: '#e23636', 
    secondary: '#518cca', 
    success: '#504a4a', 
    error: '#000000', 
    warn: '#f78f3f', 
    }, 
  };

const Context = createContext()

export default function Home() {
  return (
    <ThemeProvider theme={myTheme}>
      <Navbar
        color="warn"
        pattern="dots"
        sx={{
        width: '100vw',
      }}
      >
        <NavLogo>
          <Text variant='h2' color="secondary" className={styles.templogo}>
            Quick Marvel Cards
          </Text>
        </NavLogo>
        <NavItem color="primary">
          <a
            href="#"
            onClick={function noRefCheck(){}}
          >
            Home
          </a>
            </NavItem>
            <NavItem color="primary">
              <a
                href="#"
                onClick={function noRefCheck(){}}
              >
                About
              </a>
            </NavItem>
            <NavItem color="primary">
              <a
                href="#"
                onClick={function noRefCheck(){}}
              >
                Contact
              </a>
          </NavItem>
        </Navbar>
          <Container
            sx={{
              background: 'black',
              py: '10px',
              display: 'flex',
              justifyContent: 'start',
            }}
          >
          {/* <FlexibleLayoutCustom /> */}
          {/* <Test /> */}
          <Box
            color='warn'
            sx={{
              alignItems: 'start',
              display: 'flex',
              justifyContent: 'center',
              color: "black",
              width: "24vw",
              height: '400px',
              mr: '1vw'
            }}
          >FILTER</Box>
          <Box
            color='success'
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              color: "black",
              width: "75vw",
            }}
          >
            <Card
              alt="Wolverine"
              color="secondary"
              footer="All Information from Marvel DB"
              header={<Text sx={{paddingLeft: '1.5vw', paddingBottom: '1vh'}} align="left" variant="h4">Wolverine</Text>}
              image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
              pattern="noise"
              rounded
              sx={{
                // height: '42vh', //632px
                // width: '23vw', //463px
                zIndex: '1000',
                height: '632px', //632px
                width: '463px', //463px
              }}
            >
              <Text variant="small">
                Get ready to rock and roll, fellow cybernauts! As we embark on this wicked journey through the World Wide Web, we'll uncover hidden digital treasures and ride the gnarliest of cyber waves. So dust off your dial-up modems, grab your neon-colored fanny packs, and join us on this tubular trip down memory lane. Remember to always save your progress on a floppy disk, and be excellent to each other. Cowabunga, dude!
              </Text>
            </Card>
            <Card
              alt="Wolverine"
              color="warn"
              footer="All Information from Marvel DB"
              header={<Text sx={{paddingLeft: '1.5vw', paddingBottom: '1vh'}} align="left" variant="h4">Wolverine</Text>}
              image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
              pattern="noise"
              rounded
              sx={{
                height: '632px', //632px
                width: '463px', //463px
                zIndex: '999',
                ml: '-10vw'
              }}
            >
              <Text variant="small">
                Get ready to rock and roll, fellow cybernauts! As we embark on this wicked journey through the World Wide Web, we'll uncover hidden digital treasures and ride the gnarliest of cyber waves. So dust off your dial-up modems, grab your neon-colored fanny packs, and join us on this tubular trip down memory lane. Remember to always save your progress on a floppy disk, and be excellent to each other. Cowabunga, dude!
              </Text>
            </Card>
          </Box>
          <Box
            color='primary'
            sx={{
              alignItems: 'start',
              display: 'flex',
              justifyContent: 'center',
              width: "24vw",
              ml: '1vw',
              height: '25vh'
            }}
          ><Text variant='h6' pattern="dots">HISTORY</Text></Box>
          
        </Container>
    </ThemeProvider>
  )
}
