import {
    AppBar,
    Box,
    Button,
    Divider,
    Drawer,
    FormControl,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Select,
    Toolbar,
    useScrollTrigger,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

import React, { useState } from "react";
import navLinks from "../context/navlinks";
import logo from "../assets/cafe_logo.png";
import styles from "./topnavbar.module.scss";
import { smoothScroll } from "../utils/utils";
import { useTranslation } from "react-i18next";

const TopNavbar = (props) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleLanguageChange = (e) => {
        // console.log(e.target.value)
        i18n.changeLanguage(e.target.value)
    }

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
                <Toolbar sx={{ mx: { xs: 1, sm: 2}, justifyContent: "space-between" }} disableGutters>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: "none" }, width: "20%" }}
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
                                {t(link.key)}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ display: "flex", justifyContent:"flex-end" ,width: { xs: "20%", sm: "auto"} }}>
                        <FormControl size="small">
                            <Select value={i18n.resolvedLanguage} onChange={handleLanguageChange}>
                                <MenuItem value="en-US">🇬🇧</MenuItem>
                                <MenuItem value="el-GR">🇬🇷</MenuItem>
                            </Select>
                        </FormControl>
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
                            width: { xs: "65vw" },
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
                                        <ListItemIcon>
                                            {link.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={t(link.key)} />
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
