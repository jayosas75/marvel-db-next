'use client'
import { createContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Header from './components/navbar'
import AppContainer from './components/app_container'
import OptionsBox from './components/options_box'
import OptionsTabs from './components/options_tabs'
import { HeroArr } from './lib/hero_arr'
import FirstCard from './components/first_card'
import BackgroundCard from './components/background_card'
import {allHeroInfo} from './lib/temp_hero_data'
import { Container,
  ThemeProvider,
  defaultTheme,
  Text,
  Box,
  Card,
  Carousel,
  StarField,
  Input,
  Spinner,
  Checkbox,
  Divider,
  MouseTrail,
  Scrollbar,
} from 'retro-react'

import styles from './page.module.css'
import { traceGlobals } from 'next/dist/trace/shared'

const StyledInput = styled(Input)`
  width: 100%;
  backgroundColor: orange;
`;

const StyledInputs = styled.input`
  background-color: orange;
  font-size: 36px;
`;

// custom components
// import FlexibleLayoutCustom from './components/flexibleLayout'
// import Test from './components/test'
// styles
const Context = createContext()

const Home = () => {
  const [activeCardName, setActiveCardName]= useState('');
  const [nextCardName, setNextCardName]= useState('');
  const [activeCardUrl, setActiveCardUrl] = useState('');
  // useEffect(() => {
  //   setActiveCardName('');
  //   setActiveCardUrl('');
  // }, []);
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
              <strong style={{alignSelf: 'end'}}> Options </strong>
            </Text>
            <StyledInput
              color="warn"
              onChange={(e) => setActiveCardName(e.target.value)}
              placeholder="Enter Marvel Query"
              size="small"
              variant="filled"
              maxlength="5"
            />
            {/* <StyledInputs /> */}
              {/* <Autocomplete
                variant="filled"
                sx={{mx: '.35rem', fontSize: '.75rem', maxHeight: 'none'}}
                clearable
                color="warn"
                placeholder="Enter Marvel Query"
                onSuggestionSelect={(name) => setActiveCardName(name)}
                // onClick={(e) => setActiveCardUrl(allHeroInfo[e.target.name].imageUrl)}
                onClick={(e) => {
                  if(e.key === "Enter"){
                    console.log(e);
                  }
                }}
                size="small"
                suggestions={HeroArr}
              /> */}
              {activeCardUrl}
              {checkboxes.map((title) => {
                  return (
                    <Checkbox
                      key={title}
                      color="error"
                      label={title}
                      name="retro-checkbox"
                      onChange={function noRefCheck(){}}
                      onClick={function noRefCheck(){}}
                      sx={{
                        m: '.25rem',
                        fontSize: ['4vw', '2vw', '1vw'],
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
            }}
          >
            <Carousel
              color="success"
              interval={200000}
              pattern="noise"
            >
              <Box color='success' sx={{padding: '0', display: 'flex'}}>
                <FirstCard name={activeCardName}/>
                <BackgroundCard name={nextCardName} />
              </Box>
              <Box color='success' sx={{padding: '0', display: 'flex'}}>
                <FirstCard name={activeCardName}/>
                <BackgroundCard name={nextCardName} />
              </Box>
            </Carousel>
          </Box>

          <Box
              name="blankbox"
              pattern='solid'
              color='black'
              sx={{ml: '.5vw', padding: '0'}}
            >
              
            <Container> 
              <MouseTrail
                offset={{
                  x: 0,
                  y: 0
                }}
                particleColor="rainbow"
                particleSize={3}
              />
              <StarField
                numStars={300}
                size={1}
                speed={0.5}
                starColor="white"
              />
            </Container>
            <Container> 
              <MouseTrail
                offset={{
                  x: 0,
                  y: 0
                }}
                particleColor="rainbow"
                particleSize={3}
              />
              <StarField
                numStars={300}
                size={1}
                speed={0.5}
                starColor="white"
              />
            </Container>
            <Container> 
              <MouseTrail
                offset={{
                  x: 0,
                  y: 0
                }}
                particleColor="rainbow"
                particleSize={3}
              />
              <StarField
                numStars={300}
                size={1}
                speed={0.5}
                starColor="white"
              />
            </Container>
            </Box>
        </AppContainer>
    </ThemeProvider>
  )
}

export default Home;