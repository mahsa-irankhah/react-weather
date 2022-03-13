import React from 'react';
import styles from "./WeatherInfo.module.css";

const ShowTemperature = (props) => {
    
        return (
          <div>
            <span className={styles.temp}>{props.temp}</span>
            <span className={styles.unitLinks}>
              °C
            </span>
          </div>
        );
    }
    

export default ShowTemperature;