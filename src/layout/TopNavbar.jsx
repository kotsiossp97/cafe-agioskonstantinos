import {
    AppBar,
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    useScrollTrigger,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

import React, { useState } from "react";
import navLinks from "../context/navlinks";
import logo from "../assets/cafe_logo.png";
import styles from "./topnavbar.module.scss";
import { smoothScroll } from "../utils/utils";

const TopNavbar = (props) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
        target: props.window ? props.window() : undefined,
    });

    return (
        <div style={{marginBottom: "70px"}}>
            <AppBar
                component="nav"
                color="primary"
                elevation={trigger ? 4 : 0}
                enableColorOnDark={trigger}
            >
                <Toolbar sx={{ mx: 2 }} disableGutters>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: "none" } }}
                    >
                        <Menu />
                    </IconButton>
                    <Box flexGrow={1} sx={{ display: "flex", justifyContent: {xs: "center", sm: "start"}}}>
                        <img
                            src={logo}
                            alt="cafe logo"
                            loading="lazy"
                            onClick={()=> {smoothScroll("home")}}
                            className={styles.navbarLogo}
                        />
                    </Box>

                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navLinks.map((link, i) => (
                            <Button key={i} sx={{ color: "inherit" }} onClick={()=> {smoothScroll(link.href)}}>
                                {link.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: "250px",
                        },
                    }}
                >
                    <Box
                        onClick={handleDrawerToggle}
                        sx={{ textAlign: "center" }}
                    >
                        <Box sx={{ my: 2 }}>
                            <img
                                src={logo}
                                alt="cafe logo"
                                loading="lazy"
                                className={styles.navbarLogo__white}
                            />
                        </Box>
                        <Divider />
                        <List>
                            {navLinks.map((link, i) => (
                                <ListItem key={i} disablePadding>
                                    <ListItemButton
                                        sx={{ textAlign: "center" }}
                                        onClick={()=>{smoothScroll(link.href)}}
                                    >
                                        <ListItemText primary={link.name} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </nav>
        </div>
    );
};

export default TopNavbar;
