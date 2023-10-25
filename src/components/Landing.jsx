import React from "react";
import styles from "./landing.module.scss";
import { Button, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { smoothScroll } from "../utils/utils";
import logo from "../assets/cafe_logo.png";
import { useTranslation } from "react-i18next";
import { RestaurantMenu } from "@mui/icons-material";

const Landing = () => {
    const { t } = useTranslation();

    const Typing = () => (
        <TypeAnimation
            sequence={[
                t("typingString1"),
                1000,
                t("typingString2"),
                1000,
                t("typingString3"),
                1000,
                t("typingString4"),
                1000,
            ]}
            speed={50}
            preRenderFirstString
            className={styles.landing__content_title}
            repeat={Infinity}
        />
    );

    return (
        <div className={styles.landing} id="home">
            <picture>
                <source srcSet={require('../assets/landing_collage-4x.png')} media="(min-width: 1200px)" />
                <source srcSet={require('../assets/landing_collage-3x.png')} media="(min-width: 900px)" />
                <source srcSet={require('../assets/landing_collage-2x.png')} media="(min-width: 600px)" />

                <img
                    src={require('../assets/landing_collage-2x.png')}
                    alt="Landing Collage"
                    className={styles.landing__image}
                />
            </picture>

            <div className={styles.landing__logo}>
                <img src={logo} alt="cafe logo" />
            </div>
            <div className={styles.landing__content}>
                <Typography
                    className={styles.landing__content_title}
                    variant="h2"
                >
                    <Typing />
                </Typography>
            </div>

            <div className={styles.landing__actions}>
                <Button
                    variant="contained"
                    size="large"
                    startIcon={<RestaurantMenu />}
                    onClick={() => {
                        smoothScroll("menu");
                    }}
                >
                    {t("viewMenu")}
                </Button>
            </div>
        </div>
    );
};

export default Landing;
