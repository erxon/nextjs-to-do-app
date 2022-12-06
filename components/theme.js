import { createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        mode:  "light",
        primary: {
            main: "#3B56BD"
        }
    },
    typography: {
        fontFamily: 'Roboto'
    }
});

export default theme;