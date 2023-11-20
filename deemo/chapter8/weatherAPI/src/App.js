import "./App.css"
import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null);
  
  useEffect(() => {
    if (city) {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then((response) => {
          setWeatherData(response.data);
          console.log(response);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [city]);
  const inputData = (e) => {
    setCity(e.target.value);
  }
  return (
    <div className="container">
      <input value={city} placeholder="도시를 입력하세요" onChange={inputData} />
      {weatherData && (
        <div className="data-container">
          <h2>{weatherData.name}</h2>
          <h3>{Math.round(((weatherData.main.temp - 273.15) * 10)) / 10}°C</h3>
          <p>{weatherData.weather[0].main}</p>
        </div>
      )}
    </div>

  );
}

export default App;
