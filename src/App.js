import { CssBaseline, ThemeProvider, Typography, Container, Toolbar, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "./context/theme";
import TopNavbar from "./layout/TopNavbar";
import Landing from "./components/Landing";
import Menu from "./components/Menu/Menu";
import Footer from "./layout/Footer";
import Contact from "./components/Contact";

const App = () => {
    const [menuItems, setMenuItems] = useState(null)
    useEffect(()=>{
        fetch("https://cafe-agioskonstantinos-default-rtdb.europe-west1.firebasedatabase.app/.json")
            .then(resp => resp.json())
            .then(data=> setMenuItems(data))
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <TopNavbar />
            <Landing />
            {menuItems && <Menu data={menuItems}/>}
            <Contact />
            <Footer />
        </ThemeProvider>
    )
};

export default App;
