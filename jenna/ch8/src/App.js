import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("");

  const searchWeather = async () => {
    try {
      const result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );

      console.log(result);
      setTemperature(result.data.main.temp);
      setWeather(result.data.weather[0].main);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (city !== "") {
      searchWeather();
    }
  }, [city]);

  const onActiveEnter = (e) => {
    if (e.key === "Enter") {
      setCity(e.target.value);
    }
  };

  return (
    <div>
      <input placeholder="도시를 입력하세요" onKeyDown={onActiveEnter}></input>
      <div>
        {temperature !== "" && (
          <>
            <h3>{city}</h3>
            <h1>{Math.round((temperature - 273.15) * 10) / 10}</h1>
            <p>{weather}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
