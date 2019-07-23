import React from "react";
import "../styles/weather.sass";

const Weather = props => {
  return (
    <section className="results">
      <h1>{props.cityName}</h1>
    </section>
  );
};

export default Weather;
