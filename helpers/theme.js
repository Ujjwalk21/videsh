import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#FF7F68',
        },
        secondary: {
            main: "#7254F2"
        },
        background: {
            main: "#fff"
        },
        color: {
            main: "#000"
        }
    },
    typography: {
        fontFamily: 'Montserrat'
    },
})

theme.typography.h1 = {
    fontWeight: "700",
    fontSize: '48px',
    [theme.breakpoints.down('md')]: {
        fontSize: '24px',
    },
}
theme.typography.h2 = {
    fontWeight: "700",

    fontSize: '36px',
    [theme.breakpoints.down('md')]: {
        fontSize: '24px',
    },
}
theme.typography.h4 = {
    fontWeight: "400",
    fontSize: '20px',
    [theme.breakpoints.down('md')]: {
        fontSize: '12px',
    },
}

theme.typography.body1 = {
    fontSize: '16px',
    [theme.breakpoints.down('md')]: {
        fontSize: '12px',
    },
}

theme.typography.body2 = {
    fontSize: '14px',
    [theme.breakpoints.down('md')]: {
        fontSize: '12px',
    },
}