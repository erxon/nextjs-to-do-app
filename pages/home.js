import CreateTask from "../components/create-task";
import {useState} from "react";

function Home(){
    const [showTaskProp, setShowTaskProp] = useState(false);
    return(
        <>
            <CreateTask onClickHandle={() => {setShowTaskProp(!showTaskProp)}} />
        </>
    )
}

export default Home;