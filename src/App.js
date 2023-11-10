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
import LanguageDetector from "i18next-browser-languagedetector";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "cafe-agioskonstantinos.firebaseapp.com",
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: "cafe-agioskonstantinos",
    storageBucket: "cafe-agioskonstantinos.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEAS_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

const resources = {
    "el-GR": {
        translation: translationGR,
    },
    "en-US": {
        translation: translationEN,
    },
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en-US",
        interpolation: {
            escapeValue: false,
        },
    });

const App = () => {
    const menuItems = menuData;

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
