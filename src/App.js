import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import theme from "./context/theme";
import TopNavbar from "./layout/TopNavbar";
import Landing from "./components/Landing";
import Menu from "./components/Menu/Menu";
import Footer from "./layout/Footer";
import Contact from "./components/Contact";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationGR from "./locales/gr";
import translationEN from "./locales/en";
import menuData from "./data/menu";
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    "el-GR": {
        translation: translationGR,
    },
    "en-US": {
        translation: translationEN,
    },
};


i18n
.use(LanguageDetector)
.use(initReactI18next).init({
    resources,
    fallbackLng: "en-US",
    interpolation: {
        escapeValue: false,
    },
})

const App = () => {
    // const [menuItems, setMenuItems] = useState(null);
    // useEffect(() => {
    //     fetch(
    //         "https://cafe-agioskonstantinos-default-rtdb.europe-west1.firebasedatabase.app/.json"
    //     )
    //         .then((resp) => resp.json())
    //         .then((data) => setMenuItems(data));
    // }, []);

    const menuItems = menuData

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <TopNavbar />
            <Landing />
            {menuItems && <Menu data={menuItems} />}
            <Contact />
            <Footer />
        </ThemeProvider>
    );
};

export default App;
