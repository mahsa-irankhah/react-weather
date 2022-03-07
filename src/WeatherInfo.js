import React from "react";
import styles from "./WeatherInfo.module.css";
import humidityIcon from "./images/humidity.png";
import windIcon from "./images/wind.png";
import FormatedDate from "./FormatedDate";
import DisplayIcon from "./DisplayIcon";
import ShowTemperature from "./ShowTemperature";

const weatherData = (props) => {
  return (
    <div>
      <div className="row mt-5 align-items-center">
        <div className="col-6">
          <DisplayIcon code={props.data.icon} />
        </div>
        <div className="col-6">
          <ul>
            <li className={styles.city}>{props.data.city}</li>
            <li className={styles.time}>
              {<FormatedDate date={props.data.date} />}
            </li>
            <li className={styles.description}>{props.data.description}</li>
          </ul>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-6 border-end border-secondary">
          <ShowTemperature temp={Math.round(props.data.temperature)} />
        </div>
        <div className="col-6">
          <ul className={styles.status}>
            <li>
              <img className={styles.listIcons} src={humidityIcon} alt="icon" />{" "}
              humidity {props.data.humidity}%{" "}
            </li>
            <li>
              <img className={styles.listIcons} src={windIcon} alt="icon" />{" "}
              wind {Math.round(props.data.wind)} km/h{" "}
            </li>
            <li>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default weatherData;
