'use client'
import { createContext, useEffect, useState } from 'react'
import Image from 'next/image'
import Header from './components/navbar'
import AppContainer from './components/app_container'
import OptionsBox from './components/options_box'
import OptionsTabs from './components/options_tabs'
import { HeroArr } from './lib/hero_arr'
import FirstCard from './components/first_card'
import {allHeroInfo} from './lib/temp_hero_data'
import { Container,
  ThemeProvider,
  defaultTheme,
  Text,
  Box,
  Card,
  Carousel,
  StarField,
  Autocomplete,
  Checkbox,
  Divider,
  MouseTrail,
  Scrollbar,
} from 'retro-react'

import styles from './page.module.css'

// custom components
// import FlexibleLayoutCustom from './components/flexibleLayout'
// import Test from './components/test'
// styles
const Context = createContext()

const Home = () => {
  const [activeCardName, setActiveCardName]= useState('');
  const [activeCardUrl, setActiveCardUrl] = useState('');
  const themeColors = {
    primary: '#e23636',
    secondary: '#518cca',
    success: '#504a4a',
    error: '#000000',
    warn: '#f78f3f'
  }
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
  }
  const checkboxes = ['Include Bio', 'Include Web Links']
  return (
    <ThemeProvider theme={myTheme}>
      <Header />
        <AppContainer>
          <OptionsBox>
            <Text variant="h6" sx={{m: '.35rem'}}>
              <strong>Options</strong>
            </Text>
              <Autocomplete
                variant="filled"
                sx={{mx: '.35rem', fontSize: '.75rem', maxHeight: 'none'}}
                clearable
                color="warn"
                placeholder="Enter Marvel Query"
                onSuggestionSelect={(name) => setActiveCardName(name)}
                // onClick={(e) => setActiveCardUrl(allHeroInfo[e.target.name].imageUrl)}
                onClick={(e) => console.log(e)}
                size="small"
                suggestions={HeroArr}
              />
              {activeCardUrl}
              {checkboxes.map((title) => {
                  return (
                    <Checkbox
                      color="error"
                      label={title}
                      name="retro-checkbox"
                      onChange={function noRefCheck(){}}
                      onClick={function noRefCheck(){}}
                      sx={{
                        m: '.25rem',
                        fontSize: '1vw',
                        display: 'flex'
                      }}
                    />
                  )
                })}
                {/* Alternative checkboxes aligned in a row */}
              {/* <Box color="secondary" sx={{display: 'flex', flexDirection: 'row-wrap', padding: '0', border: 'none'}}>
                {checkboxes.map((title) => {
                  return (
                    <Checkbox
                      color="error"
                      label={title}
                      name="retro-checkbox"
                      onChange={function noRefCheck(){}}
                      onClick={function noRefCheck(){}}
                      sx={{
                        m: '.25rem',
                        fontSize: '1vw'
                      }}
                    />
                  )
                })}
              </Box> */}
            <Divider
              sx={{width: '95%', mx: '.25rem', my: '.5rem'}}
              flexItem
              color="grayscale"
              orientation="horizontal"
            />
            <OptionsTabs history={activeCardName} />
          </OptionsBox>      
          <Box
            color='success'
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'start',
              alignSelf: 'start',
              width: ["100vw","44vw","44vw"],
              height: '100%',
            }}
          >
            <Carousel
              color="success"
              interval={200000}
              pattern="noise"
            >
              <Box color='success' sx={{padding: '0', display: 'flex'}}>
                <FirstCard name={activeCardName}/>
                <Card
                  alt="Wolverine"
                  color="warn"
                  footer="All Information from Marvel DB"
                  header={<Text sx={{paddingLeft: '1.5vw', paddingBottom: '1vh'}} align="left">Wolverine</Text>}
                  image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
                  pattern="noise"
                  rounded
                  sx={{
                    // height: '75vh', //632px
                    // width: '48vw', //463px
                    // height: '632px', //632px
                    // width: '463px', //463px
                    width: '356px',
                    height: '486px',
                    zIndex: '999',
                    ml: ['-10vw','-20vw','-20vw']
                  }}
                >
                  <Text variant="small">
                    Get ready to rock and roll, fellow cybernauts! As we embark on this wicked journey through the World Wide Web, we'll uncover hidden digital treasures and ride the gnarliest of cyber waves. So dust off your dial-up modems, grab your neon-colored fanny packs, and join us on this tubular trip down memory lane. Remember to always save your progress on a floppy disk, and be excellent to each other. Cowabunga, dude!
                  </Text>
                </Card>
              </Box>

              <Box color='success' sx={{padding: '0', display: 'flex'}}>
                <Card
                  alt="Wolverine"
                  color="secondary"
                  footer="All Information from Marvel DB"
                  image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
                  pattern="dots"
                  rounded
                  sx={{
                    // height: '75vh', //632px
                    // width: '48vw', //463px
                    zIndex: '1000',
                    // height: '632px', //632px
                    // width: '463px', //463px
                    width: '356px',
                    height: '486px',
                  }}
                >
                  { activeCardName !== '' ? <Text variant='body1'>{activeCardName}</Text> : <Text variant='body1'>Wolverine</Text>}
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
                <Card
                  alt="Wolverine"
                  color="warn"
                  footer="All Information from Marvel DB"
                  header={<Text sx={{paddingLeft: '1.5vw', paddingBottom: '1vh'}} align="left">Wolverine</Text>}
                  image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
                  pattern="noise"
                  rounded
                  sx={{
                    // height: '75vh', //632px
                    // width: '48vw', //463px
                    // height: '632px', //632px
                    // width: '463px', //463px
                    width: '356px',
                    height: '486px',
                    zIndex: '999',
                    ml: ['-10vw','-20vw','-20vw']
                  }}
                >
                  <Text variant="small">
                    Get ready to rock and roll, fellow cybernauts! As we embark on this wicked journey through the World Wide Web, we'll uncover hidden digital treasures and ride the gnarliest of cyber waves. So dust off your dial-up modems, grab your neon-colored fanny packs, and join us on this tubular trip down memory lane. Remember to always save your progress on a floppy disk, and be excellent to each other. Cowabunga, dude!
                  </Text>
                </Card>
              </Box>

              <Box color='success' sx={{padding: '0', display: 'flex'}}>
                <Card
                  alt="Wolverine"
                  color="secondary"
                  footer="All Information from Marvel DB"
                  image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
                  pattern="dots"
                  rounded
                  sx={{
                    // height: '75vh', //632px
                    // width: '48vw', //463px
                    zIndex: '1000',
                    // height: '632px', //632px
                    // width: '463px', //463px
                    width: '356px',
                    height: '486px',
                  }}
                >
                  { activeCardName !== '' ? <Text variant='body1'>{activeCardName}</Text> : <Text variant='body1'>Wolverine</Text>}
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
                <Card
                  alt="Wolverine"
                  color="warn"
                  footer="All Information from Marvel DB"
                  header={<Text sx={{paddingLeft: '1.5vw', paddingBottom: '1vh'}} align="left">Wolverine</Text>}
                  image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
                  pattern="noise"
                  rounded
                  sx={{
                    // height: '75vh', //632px
                    // width: '48vw', //463px
                    // height: '632px', //632px
                    // width: '463px', //463px
                    width: '356px',
                    height: '486px',
                    zIndex: '999',
                    ml: ['-10vw','-20vw','-20vw']
                  }}
                >
                  <Text variant="small">
                    Get ready to rock and roll, fellow cybernauts! As we embark on this wicked journey through the World Wide Web, we'll uncover hidden digital treasures and ride the gnarliest of cyber waves. So dust off your dial-up modems, grab your neon-colored fanny packs, and join us on this tubular trip down memory lane. Remember to always save your progress on a floppy disk, and be excellent to each other. Cowabunga, dude!
                  </Text>
                </Card>
              </Box>
              <Box sx={{padding: '0', display: 'flex'}}>
                <Card
                  alt="Wolverine"
                  color="secondary"
                  footer="All Information from Marvel DB"
                  image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
                  pattern="dots"
                  rounded
                  sx={{
                    // height: '75vh', //632px
                    // width: '48vw', //463px
                    zIndex: '1000',
                    // height: '632px', //632px
                    // width: '463px', //463px
                    width: '356px',
                    height: '486px',
                  }}
                >
                  { activeCardName !== '' ? <Text variant='body1'>{activeCardName}</Text> : <Text variant='body1'>Wolverine</Text>}
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
                <Card
                  alt="Wolverine"
                  color="warn"
                  footer="All Information from Marvel DB"
                  header={<Text sx={{paddingLeft: '1.5vw', paddingBottom: '1vh'}} align="left">Wolverine</Text>}
                  image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
                  pattern="noise"
                  rounded
                  sx={{
                    // height: '75vh', //632px
                    // width: '48vw', //463px
                    // height: '632px', //632px
                    // width: '463px', //463px
                    width: '356px',
                    height: '486px',
                    zIndex: '999',
                    ml: ['-10vw','-20vw','-20vw']
                  }}
                >
                  <Text variant="small">
                    Get ready to rock and roll, fellow cybernauts! As we embark on this wicked journey through the World Wide Web, we'll uncover hidden digital treasures and ride the gnarliest of cyber waves. So dust off your dial-up modems, grab your neon-colored fanny packs, and join us on this tubular trip down memory lane. Remember to always save your progress on a floppy disk, and be excellent to each other. Cowabunga, dude!
                  </Text>
                </Card>
              </Box>
              <Box sx={{padding: '0', display: 'flex'}}>
                <Card
                  alt="Wolverine"
                  color="secondary"
                  footer="All Information from Marvel DB"
                  image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
                  pattern="dots"
                  rounded
                  sx={{
                    // height: '75vh', //632px
                    // width: '48vw', //463px
                    zIndex: '1000',
                    // height: '632px', //632px
                    // width: '463px', //463px
                    width: '356px',
                    height: '486px',
                  }}
                >
                  { activeCardName !== '' ? <Text variant='body1'>{activeCardName}</Text> : <Text variant='body1'>Wolverine</Text>}
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
                <Card
                  alt="Wolverine"
                  color="warn"
                  footer="All Information from Marvel DB"
                  header={<Text sx={{paddingLeft: '1.5vw', paddingBottom: '1vh'}} align="left">Wolverine</Text>}
                  image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
                  pattern="noise"
                  rounded
                  sx={{
                    // height: '75vh', //632px
                    // width: '48vw', //463px
                    // height: '632px', //632px
                    // width: '463px', //463px
                    width: '356px',
                    height: '486px',
                    zIndex: '999',
                    ml: ['-10vw','-20vw','-20vw']
                  }}
                >
                  <Text variant="small">
                    Get ready to rock and roll, fellow cybernauts! As we embark on this wicked journey through the World Wide Web, we'll uncover hidden digital treasures and ride the gnarliest of cyber waves. So dust off your dial-up modems, grab your neon-colored fanny packs, and join us on this tubular trip down memory lane. Remember to always save your progress on a floppy disk, and be excellent to each other. Cowabunga, dude!
                  </Text>
                </Card>
              </Box>
              <Box sx={{padding: '0', display: 'flex'}}>
                <Card
                  alt="Wolverine"
                  color="secondary"
                  footer="All Information from Marvel DB"
                  image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
                  pattern="dots"
                  rounded
                  sx={{
                    // height: '75vh', //632px
                    // width: '48vw', //463px
                    zIndex: '1000',
                    // height: '632px', //632px
                    // width: '463px', //463px
                    width: '356px',
                    height: '486px',
                  }}
                >
                  { activeCardName !== '' ? <Text variant='body1'>{activeCardName}</Text> : <Text variant='body1'>Wolverine</Text>}
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
                <Card
                  alt="Wolverine"
                  color="warn"
                  footer="All Information from Marvel DB"
                  header={<Text sx={{paddingLeft: '1.5vw', paddingBottom: '1vh'}} align="left">Wolverine</Text>}
                  image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
                  pattern="noise"
                  rounded
                  sx={{
                    // height: '75vh', //632px
                    // width: '48vw', //463px
                    // height: '632px', //632px
                    // width: '463px', //463px
                    width: '356px',
                    height: '486px',
                    zIndex: '999',
                    ml: ['-10vw','-20vw','-20vw']
                  }}
                >
                  <Text variant="small">
                    Get ready to rock and roll, fellow cybernauts! As we embark on this wicked journey through the World Wide Web, we'll uncover hidden digital treasures and ride the gnarliest of cyber waves. So dust off your dial-up modems, grab your neon-colored fanny packs, and join us on this tubular trip down memory lane. Remember to always save your progress on a floppy disk, and be excellent to each other. Cowabunga, dude!
                  </Text>
                </Card>
              </Box>
              <Box sx={{padding: '0', display: 'flex'}}>
                <Card
                  alt="Wolverine"
                  color="secondary"
                  footer="All Information from Marvel DB"
                  image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
                  pattern="dots"
                  rounded
                  sx={{
                    // height: '75vh', //632px
                    // width: '48vw', //463px
                    zIndex: '1000',
                    // height: '632px', //632px
                    // width: '463px', //463px
                    width: '356px',
                    height: '486px',
                  }}
                >
                  { activeCardName !== '' ? <Text variant='body1'>{activeCardName}</Text> : <Text variant='body1'>Wolverine</Text>}
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
                <Card
                  alt="Wolverine"
                  color="warn"
                  footer="All Information from Marvel DB"
                  header={<Text sx={{paddingLeft: '1.5vw', paddingBottom: '1vh'}} align="left">Wolverine</Text>}
                  image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
                  pattern="noise"
                  rounded
                  sx={{
                    // height: '75vh', //632px
                    // width: '48vw', //463px
                    // height: '632px', //632px
                    // width: '463px', //463px
                    width: '356px',
                    height: '486px',
                    zIndex: '999',
                    ml: ['-10vw','-20vw','-20vw']
                  }}
                >
                  <Text variant="small">
                    Get ready to rock and roll, fellow cybernauts! As we embark on this wicked journey through the World Wide Web, we'll uncover hidden digital treasures and ride the gnarliest of cyber waves. So dust off your dial-up modems, grab your neon-colored fanny packs, and join us on this tubular trip down memory lane. Remember to always save your progress on a floppy disk, and be excellent to each other. Cowabunga, dude!
                  </Text>
                </Card>
              </Box>
              <Box sx={{padding: '0', display: 'flex'}}>
                <Card
                  alt="Wolverine"
                  color="secondary"
                  footer="All Information from Marvel DB"
                  image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
                  pattern="dots"
                  rounded
                  sx={{
                    // height: '75vh', //632px
                    // width: '48vw', //463px
                    zIndex: '1000',
                    // height: '632px', //632px
                    // width: '463px', //463px
                    width: '356px',
                    height: '486px',
                  }}
                >
                  { activeCardName !== '' ? <Text variant='body1'>{activeCardName}</Text> : <Text variant='body1'>Wolverine</Text>}
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
                <Card
                  alt="Wolverine"
                  color="warn"
                  footer="All Information from Marvel DB"
                  header={<Text sx={{paddingLeft: '1.5vw', paddingBottom: '1vh'}} align="left">Wolverine</Text>}
                  image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
                  pattern="noise"
                  rounded
                  sx={{
                    // height: '75vh', //632px
                    // width: '48vw', //463px
                    // height: '632px', //632px
                    // width: '463px', //463px
                    width: '356px',
                    height: '486px',
                    zIndex: '999',
                    ml: ['-10vw','-20vw','-20vw']
                  }}
                >
                  <Text variant="small">
                    Get ready to rock and roll, fellow cybernauts! As we embark on this wicked journey through the World Wide Web, we'll uncover hidden digital treasures and ride the gnarliest of cyber waves. So dust off your dial-up modems, grab your neon-colored fanny packs, and join us on this tubular trip down memory lane. Remember to always save your progress on a floppy disk, and be excellent to each other. Cowabunga, dude!
                  </Text>
                </Card>
              </Box>
              <Box sx={{padding: '0', display: 'flex'}}>
                <Card
                  alt="Wolverine"
                  color="secondary"
                  footer="All Information from Marvel DB"
                  image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
                  pattern="dots"
                  rounded
                  sx={{
                    // height: '75vh', //632px
                    // width: '48vw', //463px
                    zIndex: '1000',
                    // height: '632px', //632px
                    // width: '463px', //463px
                    width: '356px',
                    height: '486px',
                  }}
                >
                  { activeCardName !== '' ? <Text variant='body1'>{activeCardName}</Text> : <Text variant='body1'>Wolverine</Text>}
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
                <Card
                  alt="Wolverine"
                  color="warn"
                  footer="All Information from Marvel DB"
                  header={<Text sx={{paddingLeft: '1.5vw', paddingBottom: '1vh'}} align="left">Wolverine</Text>}
                  image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
                  pattern="noise"
                  rounded
                  sx={{
                    // height: '75vh', //632px
                    // width: '48vw', //463px
                    // height: '632px', //632px
                    // width: '463px', //463px
                    width: '356px',
                    height: '486px',
                    zIndex: '999',
                    ml: ['-10vw','-20vw','-20vw']
                  }}
                >
                  <Text variant="small">
                    Get ready to rock and roll, fellow cybernauts! As we embark on this wicked journey through the World Wide Web, we'll uncover hidden digital treasures and ride the gnarliest of cyber waves. So dust off your dial-up modems, grab your neon-colored fanny packs, and join us on this tubular trip down memory lane. Remember to always save your progress on a floppy disk, and be excellent to each other. Cowabunga, dude!
                  </Text>
                </Card>
              </Box>
              <Box sx={{padding: '0', display: 'flex'}}>
                <Card
                  alt="Wolverine"
                  color="secondary"
                  footer="All Information from Marvel DB"
                  image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
                  pattern="dots"
                  rounded
                  sx={{
                    // height: '75vh', //632px
                    // width: '48vw', //463px
                    zIndex: '1000',
                    // height: '632px', //632px
                    // width: '463px', //463px
                    width: '356px',
                    height: '486px',
                  }}
                >
                  { activeCardName !== '' ? <Text variant='body1'>{activeCardName}</Text> : <Text variant='body1'>Wolverine</Text>}
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
                <Card
                  alt="Wolverine"
                  color="warn"
                  footer="All Information from Marvel DB"
                  header={<Text sx={{paddingLeft: '1.5vw', paddingBottom: '1vh'}} align="left">Wolverine</Text>}
                  image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
                  pattern="noise"
                  rounded
                  sx={{
                    // height: '75vh', //632px
                    // width: '48vw', //463px
                    // height: '632px', //632px
                    // width: '463px', //463px
                    width: '356px',
                    height: '486px',
                    zIndex: '999',
                    ml: ['-10vw','-20vw','-20vw']
                  }}
                >
                  <Text variant="small">
                    Get ready to rock and roll, fellow cybernauts! As we embark on this wicked journey through the World Wide Web, we'll uncover hidden digital treasures and ride the gnarliest of cyber waves. So dust off your dial-up modems, grab your neon-colored fanny packs, and join us on this tubular trip down memory lane. Remember to always save your progress on a floppy disk, and be excellent to each other. Cowabunga, dude!
                  </Text>
                </Card>
              </Box>
              <Box sx={{padding: '0', display: 'flex'}}>
                <Card
                  alt="Wolverine"
                  color="secondary"
                  footer="All Information from Marvel DB"
                  image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
                  pattern="dots"
                  rounded
                  sx={{
                    // height: '75vh', //632px
                    // width: '48vw', //463px
                    zIndex: '1000',
                    // height: '632px', //632px
                    // width: '463px', //463px
                    width: '356px',
                    height: '486px',
                  }}
                >
                  { activeCardName !== '' ? <Text variant='body1'>{activeCardName}</Text> : <Text variant='body1'>Wolverine</Text>}
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
                <Card
                  alt="Wolverine"
                  color="warn"
                  footer="All Information from Marvel DB"
                  header={<Text sx={{paddingLeft: '1.5vw', paddingBottom: '1vh'}} align="left">Wolverine</Text>}
                  image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
                  pattern="noise"
                  rounded
                  sx={{
                    // height: '75vh', //632px
                    // width: '48vw', //463px
                    // height: '632px', //632px
                    // width: '463px', //463px
                    width: '356px',
                    height: '486px',
                    zIndex: '999',
                    ml: ['-10vw','-20vw','-20vw']
                  }}
                >
                  <Text variant="small">
                    Get ready to rock and roll, fellow cybernauts! As we embark on this wicked journey through the World Wide Web, we'll uncover hidden digital treasures and ride the gnarliest of cyber waves. So dust off your dial-up modems, grab your neon-colored fanny packs, and join us on this tubular trip down memory lane. Remember to always save your progress on a floppy disk, and be excellent to each other. Cowabunga, dude!
                  </Text>
                </Card>
              </Box>
            </Carousel>
            {/* <Card
              alt="Wolverine"
              color="secondary"
              footer="All Information from Marvel DB"
              image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
              pattern="dots"
              rounded
              sx={{
                // height: '75vh', //632px
                // width: '48vw', //463px
                zIndex: '1000',
                // height: '632px', //632px
                // width: '463px', //463px
                width: '356px',
                height: '486px',
              }}
            >
              { activeCardName !== '' ? <Text variant='body1'>{activeCardName}</Text> : <Text variant='body1'>Wolverine</Text>}
              <Scrollbar theme="grayscale">
              <Text variant="small">
                Get ready to rock and roll, fellow cybernauts! As we embark on this wicked journey through the World Wide Web, we'll uncover hidden digital treasures and ride the gnarliest of cyber waves. So dust off your dial-up modems, grab your neon-colored fanny packs, and join us on this tubular trip down memory lane. Remember to always save your progress on a floppy disk, and be excellent to each other. Cowabunga, dude!
                Get ready to rock and roll, fellow cybernauts! As we embark on this wicked journey through the World Wide Web, we'll uncover hidden digital treasures and ride the gnarliest of cyber waves. So dust off your dial-up modems, grab your neon-colored fanny packs, and join us on this tubular trip down memory lane. Remember to always save your progress on a floppy disk, and be excellent to each other. Cowabunga, dude!
                Get ready to rock and roll, fellow cybernauts! As we embark on this wicked journey through the World Wide Web, we'll uncover hidden digital treasures and ride the gnarliest of cyber waves. So dust off your dial-up modems, grab your neon-colored fanny packs, and join us on this tubular trip down memory lane. Remember to always save your progress on a floppy disk, and be excellent to each other. Cowabunga, dude!
              </Text>
              </Scrollbar>
            </Card>
            <Card
              alt="Wolverine"
              color="warn"
              footer="All Information from Marvel DB"
              header={<Text sx={{paddingLeft: '1.5vw', paddingBottom: '1vh'}} align="left">Wolverine</Text>}
              image="https://i.etsystatic.com/8883904/r/il/731a74/4274330518/il_570xN.4274330518_822l.jpg"
              pattern="noise"
              rounded
              sx={{
                // height: '75vh', //632px
                // width: '48vw', //463px
                // height: '632px', //632px
                // width: '463px', //463px
                width: '356px',
                height: '486px',
                zIndex: '999',
                ml: ['-10vw','-20vw','-20vw']
              }}
            >
              <Text variant="small">
                Get ready to rock and roll, fellow cybernauts! As we embark on this wicked journey through the World Wide Web, we'll uncover hidden digital treasures and ride the gnarliest of cyber waves. So dust off your dial-up modems, grab your neon-colored fanny packs, and join us on this tubular trip down memory lane. Remember to always save your progress on a floppy disk, and be excellent to each other. Cowabunga, dude!
              </Text>
            </Card> */}
          </Box>

          <Box
              name="blankbox"
              pattern='solid'
              color='black'
              sx={{ml: '.5vw', padding: '0'}}
            >
              
            <Container
              sx={{
                height: '78vh',
                position: 'relative',
                width: '100%',
              }}
            > 
              <MouseTrail
                offset={{
                  x: 0,
                  y: 0
                }}
                particleColor="rainbow"
                particleSize={3}
              />
              <StarField
                numStars={400}
                size={2}
                speed={1}
                starColor="white"
              />
            </Container>
            </Box>
        </AppContainer>
    </ThemeProvider>
  )
}

export default Home;