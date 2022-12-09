import {useState} from "react";
import { TextField, Button } from "@mui/material";
import styles from "../public/styles/components.module.css";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


export default function CreateTask(props){
    const [date, setDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    
    return (
        <div className={styles.textFields}>
            <TextField 
                id="standard-basic" 
                label="Task"
                variant="standard"
                margin="dense"
                name="task"
                multiline />
            <div className={styles.flexRow}>
                <TextField 
                    sx={{mr:1}}
                    id="standard-basic" 
                    label="Description"
                    variant="standard"
                    margin="dense"
                    name="task"
                    multiline />
                <TextField 
                    id="standard-basic" 
                    label="Collection"
                    variant="standard"
                    margin="dense"
                    name="task"
                    multiline />
            </div>
            
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                    className={styles.datePicker}
                    label="Date"
                    value={date}
                    onChange={(newValue) => {
                    setDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    
                />
                <div className={styles.flexRow}>
                    <TimePicker
                        className={styles.timePicker}
                        label="Start time"
                        value={startTime}
                        onChange={(newValue) => {
                            setStartTime(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                        label="End time"
                        value={endTime}
                        onChange={(newValue) => {
                            setEndTime(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </div>
                
            </LocalizationProvider>
            <div className={styles.flexRow}>
                <Button 
                    sx={{mb:1, mt:1, mr: 1}}
                    variant="contained"
                    size="small"
                    >
                    ADD
                </Button>
                <Button 
                    variant="outlined"
                    sx={{mb:1, mt:1}}
                    size="small"
                    onClick={props.cancel}
                    >
                    CANCEL
                </Button>
            </div>
            

        </div>
    );
} 