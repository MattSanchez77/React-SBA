import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Calendar() {
    const [liturgicalData, setLiturgicalData] = useState(null);

    // useEffect(() => {
    //     axios.get('http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/${year}/${month}/${day}')
    //         .then((res) => {
    //             console.log(res.data); // peek at the structure
    //             setLiturgicalData(res.data);
    //         })
    //         .catch((err) => {
    //             console.error('API error:', err);
    //         });
    // }, []);

    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        if (!selectedDate) return; // wait until a date is chosen
      
        const [year, month, day] = selectedDate.split('-');
      
        // Build the URL using year/month/day
        const url = `https://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/${year}/${month}/${day}`;
      
        // Fetch data
        axios.get(url)
          .then((res) => {
            setLiturgicalData(res.data);
          })
          .catch((err) => {
            console.error('Date-specific API error:', err);
          });
      
      }, [selectedDate]);



      return (
        <>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
      
          {liturgicalData && (
            <>
              <h2>{liturgicalData.celebration.title}</h2>
              <p>Season: {liturgicalData.season.name}</p>
            </>
          )}
        </>
      );
}