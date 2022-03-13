import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tehran" />
        <p className="text-center m-3">
          <a href="https://github.com/mahsa-irankhah/react-weather">
            open-sourced
          </a>{" "}
          project coded by Mahsa Irankhah
        </p>
      </div>
    </div>
  );
}

export default App;
