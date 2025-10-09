import { useState } from "react";
import "./FetchReq.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';




const FetchReq = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchJoke = async () => {
      try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
        if (!response.ok) throw new Error('Не вдалося отримати жарт');
        const data = await response.json();
        setJoke(data.joke);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
      console.log("joke got by fetch")
      if(error) return(err.message)
    };

    

  return (
    <div className="f-joke-wrap">
        <p>{joke}</p>
            <Stack spacing={2} direction="row">
                <Button 
                    variant="contained" 
                    onClick={fetchJoke}
                >
                get any joke by fetch
                </Button>
            </Stack>
        
    </div>

    //bruh
  )
};
 
export default FetchReq;