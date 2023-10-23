import React from "react";
import collage from "../assets/landing_collage-2x.png";
import styles from "./landing.module.scss";
import { Button, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { smoothScroll } from "../utils/utils";
import logo from '../assets/cafe_logo.png'

const Landing = () => {

    return (
        <div className={styles.landing} id="home">
            <img
                src={collage}
                alt="Landing Collage"
                className={styles.landing__image}
            />

            <div className={styles.landing__logo}>
                <img src={logo} alt="cafe logo" />
            </div>
            <div className={styles.landing__content}>
                <Typography
                    className={styles.landing__content_title}
                    variant="h2"
                >
                    <TypeAnimation
                        sequence={[
                            "A tasty getaway in the mountains.",
                            1000,
                            "A tasty getaway in clean air.",
                            1000,
                            "A tasty getaway in a cool climate.",
                            1000,
                            "A tasty getaway with great view.",
                            1000,
                        ]}
                        speed={50}
                        preRenderFirstString
                        className={styles.landing__content_title}
                        repeat={Infinity}
                    />
                </Typography>
            </div>

            <div className={styles.landing__actions}>
                <Button variant="contained" size="large" onClick={()=>{smoothScroll("menu")}}>View Menu</Button>
            </div>
        </div>
    );
};

export default Landing;
