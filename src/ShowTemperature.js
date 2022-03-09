import React, { useState } from 'react';
import styles from "./WeatherInfo.module.css";

const ShowTemperature = (props) => {
    let [unit, setUnit] = useState('metric');
    function convertToF(event) {
       event.preventDefault();
       setUnit('imperial');
    }
    function converToCelsius(event) {
        event.preventDefault();
        setUnit('metric')
    }

    if (unit === 'metric') {
        return (
          <div>
            <span className={styles.temp}>{props.temp}</span>
            <span className={styles.unitLinks}>
              °C |{" "}
              <a href="/" onClick={convertToF}>
                °F
              </a>
            </span>
          </div>
        );
    } else {
      let fTemp = Math.round((props.temp * 9) / 5) + 32;
        return (
          <div>
            <span className={styles.temp}>{fTemp}</span>
            <span className={styles.unitLinks}>
              <a href="/" onClick={converToCelsius}>
                °C
              </a>{" "}
              | °F
            </span>
          </div>
        );
    }
    
};

export default ShowTemperature;