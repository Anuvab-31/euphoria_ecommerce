import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import * as React from 'react';

// Create a theme instance.
const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#0F1A4E",
            light: "#f44336"
        },
        secondary: {
            main: "#2C2C2C",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#FFFFFF"
        },
    },
    // typography: {
    //     fontFamily: "Space Grotesk"
    // }

});

export default theme;
