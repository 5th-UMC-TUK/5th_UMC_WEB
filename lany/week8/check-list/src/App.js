import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [city, setCity] = useState();
  const [cityWeather, setCityWeather] = useState({ name: "", temp: 0, weather: "" });
  const [isExist, setIsExist] = useState(false);
  const weatherKey = process.env.REACT_APP_WEATHER_API_KEY;
  const inputCity = (e) => {
    setCity(e.target.value);
  };

  const callAPI = (e) => {
    if (e.code === "Enter") {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}`)
        .then((res) => {
          setCityWeather({
            name: res.data.name,
            temp: Math.floor(res.data.main.temp - 273.15),
            weather: res.data.weather[0].main,
          });
          setIsExist(true);
          console.log(res);
        })
        .catch((err) => {
          setIsExist(false);
          console.log(err);
        });
    }
  };
  return (
    <div>
      <input placeholder="도시를 입력하세요" value={city} onChange={inputCity} onKeyDown={callAPI} />
      {isExist && (
        <div id="weather-wrap">
          <h2>{cityWeather.name}</h2>
          <h1>{cityWeather.temp}℃</h1>
          <span>{cityWeather.weather}</span>
        </div>
      )}
    </div>
  );
}

export default App;
