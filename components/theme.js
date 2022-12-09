import { createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        mode:  "light",
        primary: {
            main: "#3B56BD"
        }
    },
    typography: {
        fontFamily: 'Roboto',
        fontSize: 12
    }
});

export default theme;