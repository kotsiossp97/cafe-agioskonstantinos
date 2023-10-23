import React from "react";
import { Card, Typography } from "@mui/material";
import styles from "./menuitem.module.scss";

const MenuItem = (props) => {
    const { data } = props;
    const image = data.img === ""?require(`../../assets/items/noImage.png`):require(`../../assets/items/${data.img}`);

    return (
        <Card sx={{ bgcolor: "primary.main" }} className={styles.menuitem} elevation={3}>
            <div className={styles.menuitem__details}>
                <Typography
                    variant="h4"
                    fontWeight={600}
                    pb={2}
                >
                    {data.name}
                </Typography>
                <Typography
                    variant="body2"
                    className={styles.menuitem__description}
                >
                    {data.desc}
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

            <div className={styles.menuitem__image}>
                <img src={image} alt={data.name} loading="lazy" className={data.img===""?styles.menuitem__img:""} />
            </div>
        </Card>
    );
};

export default MenuItem;
