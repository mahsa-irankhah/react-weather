import React, { useState, useEffect } from 'react';
import styles from './Forecast.module.css';
import axios from 'axios';
import ForecastDay from './ForecastDay';

const Forecast = (props) => {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false)
  }, [props.coords]);

  function responseHandler(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }
  
  
   if (loaded) {return (
     <div className={styles.forecast}>
       <div className="row">
         <div className="col-6 bg-primary">
           {forecastData.map((daily, index) => {
             if (index < 6) {
               return <ForecastDay key={index} data={daily} />;
             } else {
               return null;
             }
           })}
         </div>
       </div>
     </div>
   );} else {
      const lat = props.coords.lat;
      const lon = props.coords.lon;
      const apiKey = "400f755361803d28237d7c1751e11b72";
      const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      axios.get(apiURL).then(responseHandler);
     return null;
   }
    
};

export default Forecast;