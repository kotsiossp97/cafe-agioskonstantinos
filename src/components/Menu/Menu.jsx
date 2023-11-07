import React, { useState } from "react";
import styles from "./menu.module.scss";
import {
    Box,
    Divider,
    Grid,
    Tab,
    Tabs,
    Typography,
} from "@mui/material";
import MenuItem from "./MenuItem";
import { useTranslation } from "react-i18next";

const Menu = (props) => {
    const menuItems = props.data
    const { t, i18n } = useTranslation()
    const categories = Object.entries(menuItems).map(([key, category]) => ({title: category.title, dataKey: key}))

    const [tabIndex, setTabIndex] = useState(0);
    const handleCategoryChange = (e, newIndex) => {
        setTabIndex(newIndex)
    }

    const categoryItems = menuItems[categories[tabIndex].dataKey].items
    const language = i18n.resolvedLanguage.split('-')[0]

    return (
        <Box
            id="menu"
            className={styles.menu}
            sx={{ paddingX: { xs: "1rem", sm: "5rem", md: "10rem" } }}
        >
            <div>
                <Typography textAlign={'center'} variant="h2">{t("menu")}</Typography>
                <Divider sx={{marginY: "1rem"}} />
                <Tabs
                    value={tabIndex}
                    onChange={handleCategoryChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    sx={{ marginBottom: 2}}
                >
                    {categories.map((category, i) => (
                        <Tab
                            key={i}
                            label={category.title[language]}
                        />
                    ))}
                </Tabs>
            </div>

            <Grid
                container
                justifyContent="center"
                sx={{
                    overflowX: "visible",
                    overflowY: "auto",
                    overscrollBehavior: "contain"
                }}
                rowSpacing={1}
                columnSpacing={{xs: 0, lg: 1}}
                py={4}
            >
                {
                    categoryItems.map((item, i) => (
                        <Grid key={i} item sx={{width: {xs: "100%", lg: "50%"}}}>
                            <MenuItem data={item}/>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default Menu;
