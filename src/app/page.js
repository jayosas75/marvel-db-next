'use client'
import { createContext, useEffect } from 'react'
import Image from 'next/image'
import Header from './components/navbar'
import { Container,
  ThemeProvider,
  defaultTheme,
  Text,
  Box,
  Card,
  StarField,
  Select,
  Autocomplete,
  Tabs,
  Tab,
  TabContent,
  RadioGroup,
  Radio,
  Pager,
  TypewriterText,
  SevenSegmentDisplay,
  Divider,
  MouseTrail,
  Scrollbar,
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

const Home = () => {
  const themeColors = {
    primary: '#e23636',
    secondary: '#518cca',
    success: '#504a4a',
    error: '#000000',
    warn: '#f78f3f'
  }
  return (
    <ThemeProvider theme={myTheme}>
        <Header />
          <Container
            sx={{
              background: '#000',
              py: '1.5vh',
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'start',
              flexDirection: 'row'
            }}
          >
          <div>
          <Box
            name='FILTER'
            color='secondary'
            // sx={[
            //   { height: '400px', color: 'red' },
            //   (theme) => ({
            //     '&:hover': {
            //       color: "purple",
            //     },
            //   }),
            // ]}
            sx={{
              alignItems: 'start',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              color: "black",
              width: "20vw",
              height: '100%',
              mr: '1vw',
              padding: '0',
              border: 'none'
            }}
          >
            <Text variant="h6" sx={{m: '.35rem'}}>
              <strong>Options</strong>
            </Text>
            <div
              style={{
                margin: '.25rem',
                width: '95%',
              }}
            >
              <Autocomplete
                clearable
                color="warn"
                placeholder="Enter Character Name"
                onSuggestionSelect={function noRefCheck(){}}
                size="small"
                suggestions={[
                  'Abomination',
                  'Black Cat',
                  'Captain America',
                  'Deadpool',
                  'Enchantress',
                  'Fantastic Four',
                  'Galactus',
                  'The Hulk',
                  'Ironman',
                  'Juggernaut',
                  'Knull',
                  'Loki',
                  'Magneto',
                  'Nightcrawler',
                  'Onslaught',
                  'Professor X',
                  'Quicksilver',
                  'Red Skull',
                  'Spiderman',
                  'Thor',
                  'Ultron',
                  'Venom',
                  'Wolverine',
                  'X-23',
                  'Yondu',
                  'Zabu',
                ]}
                variant="filled"
              />
            </div>
            <RadioGroup>
              <Radio
                color="error"
                label="All Universe Search"
                name="retro-checkbox"
                onChange={function noRefCheck(){}}
                onClick={function noRefCheck(){}}
                sx={{
                  mx: '.75rem',
                  my: '.1rem',
                  fontSize: '1vw'
                }}
              />
              {/* <Checkbox
                color="success"
                label="Avengers"
                name="retro-checkbox"
                onChange={function noRefCheck(){}}
                onClick={function noRefCheck(){}}
                sx={{
                  m: '.25rem',
                  fontSize: '1vw'
                }}
              /> */}
              <Radio
                color="error"
                label="Simple Search"
                name="retro-checkbox"
                onChange={function noRefCheck(){}}
                onClick={function noRefCheck(){}}
                sx={{
                  mx: '.75rem',
                  my: '.1rem',
                  fontSize: '1vw'
                }}
              />
            </RadioGroup>
            {/* <Input
              color="success"
              disabled
              onChange={function noRefCheck(){}}
              placeholder="Enter Character Name"
              size="medium"
              sx={{
                width: '250px',
                m: '.25rem'
              }}
              variant="filled"
            /> */}
            {/* <Box
              name="HISTORY"
              pattern='solid'
              color='error'
              sx={{
                alignItems: 'start',
                display: 'flex',
                justifyContent: 'center',
                ml: '.5vw',
              }}
            ><Text variant='h6' color="#fff">HISTORY</Text>
            </Box> */}
            <Divider
              sx={{width: '95%', mx: '.25rem', mt: '.5rem'}}
              flexItem
              color="grayscale"
              orientation="horizontal"
            />
            <Tabs
              color="success"
              defaultActiveTabLabel="tab2"
              pattern="dots"
              sx={{width: '92%', bg:'none', ml: '.60rem', my: '1rem'}}
            >
              <Tab sx={{fontSize: '1.1rem'}} label="tab1">
                History
              </Tab>
              <TabContent sx={{bg: 'success', border: '2px solid #504a4a', maxHeight: '250px', overflowY: 'scroll'}} label="tab1">
              <Scrollbar theme="grayscale">
              <Select
                color="secondary"
                defaultValue=""
                label="12-11-23 | 10:07PM" //timestamp
                onChange={function noRefCheck(){}}
                size="small"
                sx={{
                  width: '100%',
                  bg: 'success'
                }}
              >
                <option className={styles.option} value="">
                  Spiderman
                </option>
                <option className={styles.option} value="">
                  Spiderman 3099
                </option>
              </Select>
              <Select
                color="warn"
                defaultValue=""
                label="2023-12-11 | 10:42PM" //timestamp
                onChange={function noRefCheck(){}}
                size="small"
                sx={{
                  width: '100%'
                }}
              >
                <option className={styles.option} value="">
                  Captain America
                </option>
              </Select>
              <Select
                color="primary"
                defaultValue=""
                label="2023-12-11 | 10:42PM" //timestamp
                onChange={function noRefCheck(){}}
                size="small"
                sx={{
                  width: '100%'
                }}
              >
                <option className={styles.option} value="">
                  Loki
                </option>
              </Select>
              <Select
                color="error"
                defaultValue=""
                label="2023-12-11 | 10:42PM" //timestamp
                onChange={function noRefCheck(){}}
                size="small"
                sx={{
                  width: '100%'
                }}
              >
                <option className={styles.option} value="">
                  Galatus
                </option>
              </Select>
              </Scrollbar>
              </TabContent>
              <Tab sx={{fontSize: '1.1rem'}} label="tab2">
                Faves
              </Tab>
              
              <TabContent sx={{bg: 'success', border: '2px solid #504a4a'}} label="tab2">
              <Select
                color="secondary"
                defaultValue=""
                label="*****" //timestamp
                onChange={function noRefCheck(){}}
                size="small"
                sx={{
                  width: '100%',
                  bg: 'success'
                }}
              >
                <option className={styles.option} value="">
                  Spiderman
                </option>
              </Select>
              <Select
                color="warn"
                defaultValue=""
                label="****" //timestamp
                onChange={function noRefCheck(){}}
                size="small"
                sx={{
                  width: '100%'
                }}
              >
                <option className={styles.option} value="">
                  Captain America
                </option>
              </Select>
              <Select
                color="primary"
                defaultValue=""
                label="***" //timestamp
                onChange={function noRefCheck(){}}
                size="small"
                sx={{
                  width: '100%'
                }}
              >
                <option className={styles.option} value="">
                  Loki
                </option>
              </Select>
              </TabContent>
              <Tab label="tab3">
                Blocks
              </Tab>
              <TabContent label="tab3">
                Caring for a virtual pet was never more fun than with a Tamagotchi in the 90s.
              </TabContent>
              {/* <Tab label="tab4">
                The Matrix
              </Tab>
              <TabContent label="tab4">
                Welcome to the real world. Remember, there is no spoon.
              </TabContent>
              <Tab label="tab5">
                Y2K
              </Tab>
              <TabContent label="tab5">
                The turn of the millennium brought the Y2K bug, making everyone question if computers would survive the year 2000.
              </TabContent> */}
            </Tabs>
          </Box>
          </div>
          
          <Box
            color='success'
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              color: "black",
              width: "44vw",
            }}
          >
            <Card
              alt="Wolverine"
              color="secondary"
              footer="All Information from Marvel DB"
              header={<Text sx={{ paddingBottom: '1vh'}} align="left" variant="h4"><TypewriterText
              color="#000000"
              text="Wolverine"
              typingSpeed={70}
              variant="h4"
            /></Text>}
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
            ><Scrollbar theme="grayscale">
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
              header={<Text sx={{paddingLeft: '1.5vw', paddingBottom: '1vh'}} align="left" variant="h4">Wolverine</Text>}
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
                ml: ['-10vw','-20vw','-30vw']
              }}
            >
              <Text variant="small">
                Get ready to rock and roll, fellow cybernauts! As we embark on this wicked journey through the World Wide Web, we'll uncover hidden digital treasures and ride the gnarliest of cyber waves. So dust off your dial-up modems, grab your neon-colored fanny packs, and join us on this tubular trip down memory lane. Remember to always save your progress on a floppy disk, and be excellent to each other. Cowabunga, dude!
              </Text>
            </Card>
          </Box>

          <Box
              name="Pager"
              pattern='noise'
              color='primary'
              sx={{
                alignItems: 'start',
                display: 'flex',
                justifyContent: 'center',
                ml: '.5vw',
              }}
            >
              
              <Container
              sx={{
                height: '70vh',
                position: 'relative',
                width: '100%'
              }}
            > <MouseTrail
            offset={{
              x: 0,
              y: 0
            }}
            particleColor="rainbow"
            particleSize={5}
          />
              <StarField
                numStars={100}
                size={2}
                speed={1}
                starColor="white"
              /><Pager
              sx={{position: 'absolute', top: '-10px', maxWidth: '100%'}}
              color="greyscale-dark"
              messages={[
                'Wolverine Stats',
                'Weight: 200lbs',
                'Height: 5\'10"',
                'Weakness: Jean',
                'Skill: Retractable Claws',
                'Skill: Healing',
                'Skill: Endurance'
              ]}
              onButtonPress={function noRefCheck(){}}
            />
            {/* <Pager
              sx={{position: 'absolute', top: '160px', maxWidth: '100%'}}
              color="greyscale-dark"
              messages={[
                'Weight: 200lbs',
                'Weight: 200lbs',
                'Height: 5\'10"',
                'Weakness: Jean',
                'Skill: Retractable Claws',
                'Skill: Healing',
                'Skill: Endurance'
              ]}
              onButtonPress={function noRefCheck(){}}
            />
            <Pager
              sx={{position: 'absolute', top: '330px', maxWidth: '100%'}}
              color="greyscale-dark"
              messages={[
                'Height: 5\'10"',
                'Weight: 200lbs',
                'Height: 5\'10"',
                'Weakness: Jean',
                'Skill: Retractable Claws',
                'Skill: Healing',
                'Skill: Endurance'
              ]}
              onButtonPress={function noRefCheck(){}}
            /> */}
            </Container>
            </Box>
        </Container>
    </ThemeProvider>
  )
}

export default Home;