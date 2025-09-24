import { useState } from "react";
import axios from "axios";
import "./AxiosReq.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const AxiosReq = () => {
    
    const [joke, setJoke] = useState("");
    const [error, setError] = useState("");

    const getData = async () => {
        try {
            const responseAxios = await axios.get(
                'https://v2.jokeapi.dev/joke/Any?type=single'
            )
                setJoke(responseAxios.data.joke)
                setError("");
            } catch(err) {
                setError("Помилка: " + err.message);
                setJoke("");
            }
        console.log("joke got by axios")
        if(error) return(err.message)
    }
    return ( 
        <div className="a-joke-wrap">
            <p>{joke}</p>
            <Stack spacing={2} direction="row">
                <Button 
                    variant="contained" 
                    onClick={getData}
                >
                get any joke by fetch
                </Button>
            </Stack>
        </div>
     );
}
 
export default AxiosReq;