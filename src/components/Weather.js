import React from "react";
import "../styles/weather.sass";

const Weather = props => {
  const weather = props.weather.map(city => {
    return (
      <div key={city.id} className="results">
        <h2>
          Weather for: {props.cityName}, {city.sys.country}
        </h2>
        <ul>
          <li>Description: {city.weather[0].description}</li>
          <li>Temperature: {city.main.temp.toFixed()} C</li>
          <li>humidity: {city.main.humidity} %</li>
          <li>Pressure: {city.main.pressure} hpa</li>
          <li>Wind speed: {city.wind.speed} m/s</li>
          <img
            src={`http://openweathermap.org/img/wn/${
              city.weather[0].icon
            }@2x.png`}
            alt="weather icon"
          />
        </ul>
      </div>
    );
  });
  return <section className={props.class}>{weather}</section>;
};

export default Weather;
