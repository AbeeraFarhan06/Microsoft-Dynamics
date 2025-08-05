import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark' ,
    useSystemColorMode: false,
};

const theme = extendTheme({ 
    config,
     styles: {
        global: {
        body: {
            bg: "white", // Set body background to black
            color: "black", // Optional: make text readable
        },
        html: {
            bg: "white", // Also apply to html
        },
        },
    }

});

export default theme;