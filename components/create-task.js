import {Button, ThemeProvider} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import theme from "./theme";

export default function CreateTask({onClickHandle}){
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Button 
                    sx={{mt: 2}} 
                    variant="contained"
                    size="small" startIcon={<AddIcon />}
                    onClick={onClickHandle}> Add Task 
                </Button>
            </ThemeProvider>
        </div>
    );
} 