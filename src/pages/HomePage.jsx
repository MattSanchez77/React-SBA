import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";


export default function HomePage(){
    const [liturgicalData, setLiturgicalData] = useState(null);

    useEffect(() => {
        axios.get('https://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/today')
          .then((res) => {
            console.log(res.data); // peek at the structure
            setLiturgicalData(res.data);
          })
          .catch((err) => {
            console.error('API error:', err);
          });
      }, []);


    return (
        <div>
          <h1>Today's Liturgical Info</h1>
    
          {liturgicalData ? (
            <>
              <h2>Season: {liturgicalData.season}</h2>
              <p>{liturgicalData.celebrations[0].title}</p>
              <p>Color: {liturgicalData.celebrations[0].colour}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
}