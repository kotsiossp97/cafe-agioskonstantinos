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
    return (
        <Card
            sx={{ bgcolor: "primary.main" }}
            style={{ "--bg-image": `url(${image})` }}
            className={styles.menuitem}
            elevation={3}
        >
            <div className={styles.menuitem__details}>
                <Typography variant="h5" fontWeight={600} pb={2}>
                    {data.title[i18n.language]}
                </Typography>
                <Typography
                    variant="body2"
                    className={styles.menuitem__description}
                >
                    {data.desc[i18n.language]}
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
            {/* 
            <div className={styles.menuitem__image}>
                <img src={image} alt={data.name} className={data.img===""?styles.menuitem__img:""} />
            </div>
             */}
        </Card>
    );
};

export default MenuItem;
