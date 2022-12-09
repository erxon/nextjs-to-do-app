import theme from "./theme";
import { ThemeProvider} from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import styles from "../public/styles/components.module.css";

export default function Layout({children}){
    return(
        <div className={styles.layout}>
            <main>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </main>
        </div>
    );
}