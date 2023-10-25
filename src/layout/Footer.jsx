import React from 'react'
import { Facebook, Google, Instagram } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'

import styles from './footer.module.scss'

const Footer = () => {

    return (
        <Box component="footer" sx={{backgroundColor: "primary.dark"}} className={styles.footer}>
            <Box display="flex" justifyContent={"center"} gap={2}>
                <IconButton
                    href='https://www.facebook.com/p/Agios-Konstantinos-Cafe-100063575983248/'
                    target="_blank"
                >
                    <Facebook />
                </IconButton>
                <IconButton
                    href="https://www.instagram.com/agios_konstantinos_cafe/"
                    target="_blank"
                >
                    <Instagram />
                </IconButton>
                <IconButton
                    href='https://maps.app.goo.gl/zNtx1CNSaC3G4CYk9'
                    target='_blank'
                >
                    <Google />
                </IconButton>
            </Box>

            <Typography component='p' variant='caption' className={styles.footer__copyright}>Developed & Designed with 💖 by <a href='https://kotsiossp97.github.io' target='_blank' rel="noreferrer">Konstantinos Andreou</a>, &copy; 2023</Typography>
        </Box>
    )
}

export default Footer