import { createTheme, darkScrollbar, responsiveFontSizes } from "@mui/material"

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    },
    typography: {
        fontFamily: "'EB Garamond Variable', sans-serif"
    }
})


const theme = responsiveFontSizes(createTheme(darkTheme, {
    palette: {
        primary: darkTheme.palette.augmentColor({
            color: {
                main: "#474b55"
            }
        }),
        secondary: darkTheme.palette.augmentColor({
            color: {
                main: "#fefefe"
            }
        })
    },
    components: {
        MuiCssBaseline: {
          styleOverrides: (themeParam) => ({
            body: darkScrollbar(),
          }),
        },
      },
}))


export default theme