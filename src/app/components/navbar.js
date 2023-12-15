import React from "react";
import {Navbar, NavLogo, NavItem, Text, SevenSegmentDisplay} from 'retro-react'

const Header = () => {
    // intentionally blank
    return (
            <Navbar
                color="warn"
                pattern="solid"
            >
                <NavLogo>
                <Text variant='h2' color="secondary">
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
                <SevenSegmentDisplay
                    color="white"
                    segmentThickness="none"
                    value={2}
                    size='small'
                />
            </Navbar>
    )
}

export default Header;