import React, {useState} from 'react';
import styles from './Weather.module.css';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';

const Weather = (props) => {
  let [weatherData, setWeatherData] = useState({ready: false});
  let [city, setCity] = useState(props.defaultCity)
  
  let responseHandler = (response) => {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt *1000),
      icon: response.data.weather[0].icon
    });
  };
  
  function submitHandler(event) {
    event.preventDefault();
    search();
  }
  function cityHandler(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "400f755361803d28237d7c1751e11b72";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(responseHandler);
  }
  
  
  if (weatherData.ready) {
return (
  <div className={styles.container}>
    <form className="d-flex w-50" onSubmit={submitHandler}>
      <input
        className="form-control"
        type="text"
        placeholder="type a city..."
        autoFocus="on"
        onChange={cityHandler}
      />
      <input type="submit" className="btn btn-primary" />
    </form>
    <WeatherInfo data={weatherData} />
  </div>
);
  } else {
    
    search();
    return "Loadig...";
  }
    
};

export default Weather;