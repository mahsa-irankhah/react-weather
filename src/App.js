import React from "react";

function App() {
  return (
    <div className="App">
      <div class="container complete-document">
        <h1>
          Choose a{" "}
          <span class="city" id="city-name">
            city
          </span>
          , to see <span id="main-temp">the tempreture</span>°
        </h1>
        <form id="search-form" spellcheck="false">
          <input
            type="text"
            id="search-box"
            placeholder="type a city"
            autocomplete="off"
          />
          <input type="submit" value="search" class="search-button" />
        </form>
        <button id="current-location">your current city</button>
        <div class="image">
          <img src="" alt="" id="main-icon" width="100px" />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-4">
              <p class="status">
                humidity <br />
                <span id="humidity-rate"></span>%
              </p>
            </div>
            <div class="col-4 main-day">
              <p class="status" id="main-status"></p>
              <p>
                <strong class="4" id="mainday">
                  Saturday
                </strong>
              </p>
            </div>
            <div class="col-4">
              <p class="status">
                wind <br />
                <span id="wind-speed"></span>km/h
              </p>
            </div>
          </div>
        </div>
      </div>
      <p class="source-part">
        <a
          href="/"
          target="_blank"
          class="source-link"
        >
          open-source project
        </a>
        coded by Mahsa Irankhah
      </p>
      <script src="./main.js"></script>
    </div>
  );
}

export default App;
