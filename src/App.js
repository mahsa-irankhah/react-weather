import React from "react";

function App() {
  return (
    <div className="App">
      <div className="container complete-document">
        <h1>
          Choose a{" "}
          <span className="city" id="city-name">
            city
          </span>
          , to see <span id="main-temp">the tempreture</span>°
        </h1>
        <form id="search-form" spellCheck="false">
          <input
            type="text"
            id="search-box"
            placeholder="type a city"
            autoComplete="off"
          />
          <input type="submit" value="search" className="search-button" />
        </form>
        <button id="current-location">your current city</button>
        <div className="image">
          <img src="" alt="" id="main-icon" width="100px" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <p className="status">
                humidity <br />
                <span id="humidity-rate"></span>%
              </p>
            </div>
            <div className="col-4 main-day">
              <p className="status" id="main-status"></p>
              <p>
                <strong className="4" id="mainday">
                  Saturday
                </strong>
              </p>
            </div>
            <div className="col-4">
              <p className="status">
                wind <br />
                <span id="wind-speed"></span>km/h
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="source-part">
        <a
          href="https://github.com/mahsa-irankhah/react-weather"
          target="_blank"
          className="source-link"
        >
          open-source project
        </a>{" "}
        coded by Mahsa Irankhah
      </p>
    </div>
  );
}

export default App;
