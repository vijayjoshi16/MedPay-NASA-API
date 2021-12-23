import {NavbarContainer, NavbarHeading, NavbarOption, MenuButton, MenuDash, DrawerContent} from './Navbar.styles';
import { Grid,Hidden } from '@material-ui/core';
import { SwipeableDrawer } from '@material-ui/core';
import { useState } from 'react';


const Navbar = ()=>{
    const [drawerOpen, setDrawerOpen] = useState(false);

    return(
        <NavbarContainer>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <NavbarHeading>
                        MedPay NASA API
                    </NavbarHeading>
                </Grid>
                <Hidden smDown={true}>
                <Grid item xs={12} sm={12} md={6} lg={8}>
                    <NavbarOption>
                        Explore
                    </NavbarOption>
                    <NavbarOption>
                        Search
                    </NavbarOption>
                </Grid>
                </Hidden>
            </Grid>
            <Hidden mdUp={true}>
                <MenuButton
                onClick={()=>{setDrawerOpen(true)}}>
                    <MenuDash />
                    <MenuDash />
                    <MenuDash />
                </MenuButton>
            </Hidden>
            <SwipeableDrawer
            open={drawerOpen}
            onOpen={()=>{setDrawerOpen(true)}}
            onClose={()=>{setDrawerOpen(false)}}
            >
                <DrawerContent>
                    <NavbarOption>
                        Explore
                    </NavbarOption>
                    <br></br><br></br>
                    <NavbarOption>
                        Search
                    </NavbarOption>
                </DrawerContent>
            </SwipeableDrawer>
        </NavbarContainer>
    )
};

export default Navbar;