import React from 'react';
import DisplayIcon from './DisplayIcon';
import styles from './Forecast.module.css';
import axios from 'axios';

const Forecast = (props) => {
  function responseHandler(respone) {
    console.log(respone.data)
  }
  const lat = props.coords.lat;
  const lon = props.coords.lon;
  const apiKey = "400f755361803d28237d7c1751e11b72";
  const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
  axios.get(apiURL).then(responseHandler);

    return (
      <div className={styles.forecast}>
        <div className="d-flex align-items-center justify-content-evenly">
          <DisplayIcon code="01d" size="70" />
          <div>
            <div>Saturday</div>
            <div>cloudy</div>
          </div>
          <div className={styles.min}>
            <div className={styles.minTitle}>Min</div>
            <div className={styles.minTemp}>5°</div>
          </div>
          <div className={styles.max}>
            <div className={styles.maxTitle}>Max</div>
            <div className={styles.maxTemp}>9°</div>
          </div>
        </div>
      </div>
    );
};

export default Forecast;