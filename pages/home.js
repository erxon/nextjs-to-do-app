import {useState} from "react";
import { 
    Button, 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem, 
    Grid } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Layout from '../components/layout';
import CreateTask from "../components/create-task";
import TimeTable from "../components/time-table";
import Calendar from "../components/calendar";
import styles from "../public/styles/home.module.css";


export default function Home(){
    const [showTaskProp, setShowTaskProp] = useState(false);
    const [collection, setCollection] = useState("");

    const handleChange = (event) => {
        setCollection(event.target.value);
    };

    return(
        <Layout>
            <Grid container spacing={2}>
                <Grid item xs={4} className={styles.padding}>
                    <Calendar />
                    <FormControl
                        size="small" 
                        sx={{mb: 1, width: "300px"}}
                    >
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={collection}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>1</MenuItem>
                            <MenuItem value={20}>2</MenuItem>
                            <MenuItem value={30}>3</MenuItem>
                        </Select>
                    </FormControl>
                    {showTaskProp && <CreateTask cancel={() => {setShowTaskProp(false)}}/>}
                    <br />
                    <Button 
                        variant="contained"
                        size="small"
                        startIcon={<AddIcon />}
                        onClick={() => {setShowTaskProp(!showTaskProp)}}>
                        ADD TASK
                    </Button>
                </Grid>
                <Grid xs={8} className={styles.padding}>
                    <TimeTable />
                </Grid>
                
            </Grid>
            
        </Layout>
    );
}