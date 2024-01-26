import React from "react";
import {Tabs, Tab, TabContent, Scrollbar, Select, Pager, Box} from 'retro-react'

import styles from '../page.module.css'

const OptionsTabs = ({history}) => {
    const messages = [ 'Hello Earthling', 'Name: Wolverine ', 'Weight: 200lbs', 'Universe: Marvel'];
    return (
      <Tabs
        color="primary"
        defaultActiveTabLabel="tab1"
        pattern="stripes"
      >
        <Tab label="tab1">
          Pager
        </Tab>
        <TabContent label="tab1" sx={{padding: '0'}}>
          <Box>
            <Pager
              sx={{alignSelf: 'center', justifySelf: 'center'}}
              color="greyscale-dark"
              messages={messages}
              onButtonPress={function noRefCheck(){}}
          />
          </Box>
        </TabContent>
        <Tab label="tab2">
          History
        </Tab>
        <TabContent sx={{bg: 'success', border: '2px solid #504a4a', overflowY: 'auto'}} label="tab2">
        <Scrollbar theme="grayscale">
        <Select
          color="secondary"
          defaultValue=""
          label="1-27-24" //timestamp
          onChange={function noRefCheck(){}}
          size="small"
          title="1-27-24"
          sx={{
            bg: 'success'
          }}
        >
          <option className={styles.option} value="">
            {/* {history} */} Wolverine
          </option>
          {/* <option className={styles.option} value="">
            Spiderman 3099
          </option> */}
        </Select>
        <Select
          color="warn"
          defaultValue=""
          label="1-26-24" //timestamp
          onChange={function noRefCheck(){}}
          size="small"
          title="1-26-24"
          sx={{
            maxWidth: '100%'
          }}
        >
          <option className={styles.option} value="">
            Captain America
          </option>
        </Select>
        <Select
          title="1-26-24"
          color="primary"
          defaultValue=""
          label="1-26-24" //timestamp
          onChange={function noRefCheck(){}}
          size="small"
          sx={{
            maxWidth: '100%'
          }}
        >
          <option className={styles.option} value="">
            Loki
          </option>
        </Select>
        <Select
          color="error"
          defaultValue=""
          label="1-26-24" //timestamp
          onChange={function noRefCheck(){}}
          size="small"
          sx={{
            maxWidth: '100%'
          }}
        >
          <option className={styles.option} value="">
            Galatus
          </option>
        </Select>
        </Scrollbar>
        </TabContent>
        <Tab label="tab3">
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