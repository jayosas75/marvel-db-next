import React from "react";
import {Tabs, Tab, TabContent, Scrollbar, Select, Pager, Box} from 'retro-react'

import styles from '../page.module.css'

const OptionsTabs = ({history}) => {
    const BoxSxObject = {
      width: '100%',
      backgroundColor: '#000'
    };
    return (
      <Tabs
        color="primary"
        defaultActiveTabLabel="tab1"
        pattern="stripes"
        sx={BoxSxObject}
      >
        <Tab label="tab1">
          Intro <small>x</small>
        </Tab>
        <TabContent label="tab1" sx={{padding: '0'}}>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Pager
              sx={{alignSelf: 'center', justifySelf: 'center'}}
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
          </Box>
        </TabContent>
        <Tab sx={{fontSize: '1.1rem'}} label="tab2">
          History
        </Tab>
        <TabContent sx={{bg: 'success', border: '2px solid #504a4a', maxHeight: '250px', overflowY: 'scroll'}} label="tab2">
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
            {history}
          </option>
          {/* <option className={styles.option} value="">
            Spiderman 3099
          </option> */}
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
        <Tab sx={{fontSize: '1.1rem'}} label="tab3">
          Faves
        </Tab>
        
        <TabContent sx={{bg: 'success', border: '2px solid #504a4a'}} label="tab3">
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
    )
}

export default OptionsTabs;