import React from 'react';
import DisplayIcon from "./DisplayIcon";
import styles from "./Forecast.module.css";

const ForecastDay = (props) => {
    let {data} = props;
    function day() {
        const days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturdday",
        ];
      const date = new Date(data.dt * 1000);
      let theDay = days[date.getDay()];
      return theDay;

    }
    return (
      <div>
        <div className="d-flex align-items-center justify-content-evenly">
          <DisplayIcon code={data.weather[0].icon} size={70} />
          <div>
            <div>{day()}</div>
            <div>{data.weather[0].description}</div>
          </div>
          <div className={styles.min}>
            <div className={styles.minTitle}>Min</div>
            <div className={styles.minTemp}>{Math.round(data.temp.min)}°</div>
          </div>
          <div className={styles.max}>
            <div className={styles.maxTitle}>Max</div>
            <div className={styles.maxTemp}>{Math.round(data.temp.max)}°</div>
          </div>
        </div>
      </div>
    );
};

export default ForecastDay;