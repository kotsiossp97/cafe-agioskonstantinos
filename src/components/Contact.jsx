import React from "react";
import styles from "./contact.module.scss";
import { Box, Button, Divider, Typography } from "@mui/material";
import { Facebook, Instagram, Phone } from "@mui/icons-material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
    return (
        <Box
            className={styles.contact}
            id="contact"
            sx={{ paddingX: { xs: "1rem", sm: "5rem", md: "10rem" } }}
        >
            <Typography textAlign={"center"} variant="h2">
                CONTACT
            </Typography>
            <Divider sx={{ marginY: "1rem" }} />
            <Box
                className={styles.contact__content}
                sx={{ paddingX: { xs: "1rem", sm: "5rem", md: "10rem" } }}
            >
                <div className={styles.contact__content_buttons}>
                    <Button
                        href="https://www.facebook.com/p/Agios-Konstantinos-Cafe-100063575983248/"
                        target="_blank"
                        size="large"
                        variant="text"
                        color="secondary"
                        sx={{ textTransform: "none", gap: 1 }}
                    >
                        <Facebook sx={{ fontSize: "250%" }} />
                        <Typography sx={{ fontSize: "150%" }}>
                            Agios Konstantinos Cafe
                        </Typography>
                    </Button>
                    <Button
                        href="https://www.instagram.com/agios_konstantinos_cafe/"
                        target="_blank"
                        size="large"
                        variant="text"
                        color="secondary"
                        sx={{ textTransform: "none", gap: 1 }}
                    >
                        <Instagram sx={{ fontSize: "250%" }} />
                        <Typography sx={{ fontSize: "150%" }}>
                            @agios_konstantinos_cafe
                        </Typography>
                    </Button>
                    <Button
                        href="tel:+357 99124061"
                        size="large"
                        variant="text"
                        color="secondary"
                        sx={{ textTransform: "none", gap: 1 }}
                    >
                        <Phone sx={{ fontSize: "250%" }} />
                        <Typography sx={{ fontSize: "150%" }}>
                            +357 99124061
                        </Typography>
                    </Button>
                </div>

                <div className={styles.contact__content_map}>
                    <MapContainer
                        center={[34.8657418, 33.0578542]}
                        zoom={15}
                        scrollWheelZoom={false}
                        style={{height: "100%"}}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[34.8657418, 33.0578542]}>
                            <Popup>
                                <b>Agios Konstantinos Cafe</b><br />
                                <address style={{padding: "1rem"}}>
                                    Megalou Konstantinou<br />
                                    Agios Konstantinos, 4561<br />
                                    Limassol, Cyprus
                                </address>
                                <Button variant="contained" color="primary" sx={{textTransform: "none", color: "white!important"}} href="https://maps.app.goo.gl/zNtx1CNSaC3G4CYk9" target="_blank">View on Google Maps</Button>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </Box>
        </Box>
    );
};

export default Contact;
