import React, { Component } from "react";
import "../styles/app.sass";
import Input from "./Input.js";
import Weather from "./Weather.js";
import AnimatedLeaf from "./AnimatedLeaf";

class WeatherApp extends Component {
  state = {
    weather: [],
    city: "Powiat warszawski zachodni",
    cityName: "Warsaw",
    weatherSectionClass: "weather"
  };
  handleOptionChange = e => {
    this.setState({
      city: e.target.value
    });
  };
  handleWeatherRender = e => {
    e.preventDefault();
    this.setState({
      weather: [],
      cityName: e.target.querySelector("select").options[
        e.target.querySelector("select").options.selectedIndex
      ].text,
      weatherSectionClass: "weather"
    });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        this.state.city
      },pl&units=metric&appid=6749543a09b33dd2d66d94a8d2dc1a1b`
    )
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        let weather = this.state.weather.concat(data);
        this.setState({ weather, weatherSectionClass: "weather active" });
      });
  };

  render() {
    return (
      <section className="app">
        <Input
          option={this.state.city}
          change={this.handleOptionChange}
          submit={this.handleWeatherRender}
        />
        <Weather
          weather={this.state.weather}
          cityName={this.state.cityName}
          class={this.state.weatherSectionClass}
        />
        <AnimatedLeaf />
      </section>
    );
  }
}

export default WeatherApp;
