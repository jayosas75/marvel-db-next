import React from 'react';
import {
    FlexibleLayout,
    LayoutHeader,
    LayoutFooter,
    LayoutMain,
    Text,
    LayoutSidebarLeft,
    LayoutSidebarRight,
} from 'retro-react'

const FlexibleLayoutCustom = () => {
	return (
		<FlexibleLayout
            sx={{
              '& .flexible-layout-child-cell': {
                backgroundColor: 'lightgray',
                border: '1px solid black'
              }
            }}
          >
            <LayoutHeader>
              <Text variant="h4">
                90s Nostalgia Zone
              </Text>
            </LayoutHeader>
            <LayoutFooter>
              <Text variant="paragraph">
                © 1999 - 90s Nostalgia Zone
              </Text>
            </LayoutFooter>
            <LayoutSidebarLeft>
              <ul>
                <li>First Item</li>
                <li>Second Item</li>
                <li>Third Item</li>
                <li>Fourth Item</li>
              </ul>
            </LayoutSidebarLeft>
            <LayoutSidebarRight>
              <ul>
                <li>First Item</li>
                <li>Second Item</li>
                <li>Third Item</li>
                <li>Fourth Item</li>
              </ul>
            </LayoutSidebarRight>
            <LayoutMain>
              <h2>Title</h2>
              <p>Take a trip down memory lane and relive the best decade ever! Our website is dedicated to everything that made the 90s unique - from our favorite TV shows and music, to the toys and games we loved to play. So, grab a Surge soda, put on your LA Lights sneakers, and let's dive into the world of 90s nostalgia!</p>
            </LayoutMain>
          </FlexibleLayout>
	);
};

export default FlexibleLayoutCustom;