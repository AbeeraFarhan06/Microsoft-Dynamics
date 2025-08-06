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
            bg: "#f5f5f5", // Set body background to black
            color: "black", // Optional: make text readable
        },
        html: {
            bg: "#f5f5f5", // Also apply to html
        },
        },
    }

});

export default theme;