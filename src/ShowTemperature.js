import React, { useState } from 'react';
import styles from "./WeatherInfo.module.css";

const ShowTemperature = (props) => {
    let [unit, setUnit] = useState('metric');
    let [temperature, setTemperature] = useState(props.temp)
    function convertToF(event) {
       event.preventDefault();
       setTemperature(Math.round(temperature *  9/5) + 32);
       setUnit('imperial');
    }
    function converToCelsius(event) {
        event.preventDefault();
        setTemperature(props.temp);
        setUnit('metric')
    }

    if (unit === 'metric') {
        return (
          <div>
            <span className={styles.temp}>{temperature}</span>
            <span className={styles.unitLinks}>
              °C |{" "}
              <a href="/" onClick={convertToF}>
                °F
              </a>
            </span>
          </div>
        );
    } else {
        return (
          <div>
            <span className={styles.temp}>{temperature}</span>
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