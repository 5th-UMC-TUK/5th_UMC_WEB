import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const inputValue = (e) => {
    setCity(e.target.value);
  };

  const searchWeather = (e) => {
    if (e.keyCode === 13) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        )
        .then((res) => {
          setWeather(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="App">
      <input
        placeholder="도시를 입력하세요"
        value={city}
        onChange={inputValue}
        onKeyDown={searchWeather}
      />
      {weather && (
        <div className="weather_wrap">
          <div className="weather_city">{weather.name}</div>
          <div className="weather_temp">
            {(weather.main.temp - 273.15).toFixed(1) + "°C"}
          </div>
          <div className="weather_desc">{weather.weather[0].main}</div>
        </div>
      )}
    </div>
  );
}

export default App;
