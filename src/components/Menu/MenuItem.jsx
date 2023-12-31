import React from "react";
import { Card, Typography } from "@mui/material";
import styles from "./menuitem.module.scss";
import { useTranslation } from "react-i18next";

const MenuItem = (props) => {
    const { data } = props;
    const image =
        data.img === ""
            ? require(`../../assets/items/noImage.png`)
            : require(`../../assets/items/${data.img}`);
    const { i18n } = useTranslation();

    const language = i18n.resolvedLanguage.split('-')[0]

    return (
        <Card
            sx={{ bgcolor: "primary.main" }}
            style={{ "--bg-image": `url(${image})` }}
            className={styles.menuitem}
            elevation={3}
        >
            <div className={styles.menuitem__details}>
                <Typography variant="h5" fontWeight={600} pb={1}>
                    {data.title[language]}
                </Typography>
                <Typography
                    variant='body1'
                    sx={{fontSize: { xs: "95%", sm: "100%"}}}
                    className={styles.menuitem__description}
                >
                    {data.desc[language]}
                </Typography>
                <div className={styles.menuitem__price}>
                    <Typography variant="body2">
                        €&nbsp;&nbsp;
                        <span>
                            {Number(data.price).toLocaleString("en", {
                                minimumFractionDigits: 2,
                                minimumIntegerDigits: 2,
                            })}
                        </span>
                    </Typography>
                </div>
            </div>
        </Card>
    );
};

export default MenuItem;
