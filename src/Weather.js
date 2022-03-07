import React, {useState} from 'react';
import styles from './Weather.module.css';
import axios from 'axios';
import sunnyPic from './images/sunny.png';
import humidityIcon from './images/humidity.png';
import windIcon from './images/wind.png';
import PrecipitationIcon from './images/precipitation.png';
import FormatedDate from './FormatedDate';

const Weather = () => {
  let [weatherData, setWeatherData] = useState({});
  let [ready, setReady] = useState(false);
  
  let responseHandler = (response) => {
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt *1000)
    });
    setReady(true);
  };
  
  
  
  if (ready) {
return (
  <div className={styles.container}>
    <form className="d-flex w-50">
      <input
        className="form-control"
        type="text"
        placeholder="type a city..."
        autoFocus="on"
      />
      <input type="submit" className="btn btn-primary" />
    </form>
    <div className="row mt-5 align-items-center">
      <div className="col-6">
        <img className={styles.mainIcon} src={sunnyPic} alt="icon" />
      </div>
      <div className="col-6">
        <ul>
          <li className={styles.city}>{weatherData.city}</li>
          <li className={styles.time}>
            {<FormatedDate date={weatherData.date} />}
          </li>
          <li className={styles.description}>{weatherData.description}</li>
        </ul>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-6 border-end border-secondary">
        <h1 className={styles.temp}>{Math.round(weatherData.temperature)} °</h1>
      </div>
      <div className="col-6">
        <ul className={styles.status}>
          <li>
            <img className={styles.listIcons} src={humidityIcon} alt="icon" />{" "}
            humidity {weatherData.humidity}%{" "}
          </li>
          <li>
            <img className={styles.listIcons} src={windIcon} alt="icon" /> wind{" "}
            {Math.round(weatherData.wind)} km/h{" "}
          </li>
          <li>
            <img
              className={styles.listIcons}
              src={PrecipitationIcon}
              alt="icon"
            />{" "}
            precipitation 0%{" "}
          </li>
        </ul>
      </div>
    </div>
  </div>
);
  } else {
    let city = 'Tehran';
    const apiKey = '400f755361803d28237d7c1751e11b72';
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiURL).then(responseHandler);
    
    return "Loadig...";
  }
    
};

export default Weather;