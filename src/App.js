import React,{useState}from "react";
import axios from "axios";
import"./App.css";

function App(){
    const[city,setCity]=useState("");
    const[weather,setWeather]=useState(null);
    const API_KEY="9334f65eac03523d11970a00b1a5db7c";

    const fetchWeather=async()=>{
        if(!city)return;
        try{
            const response=await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
                    setWeather(response.data);
            }
            catch(error){
                alert("City not found! Please enter a valid city.");
            }
        };
        return(
            <div className="container">
                <h1>🌤️ Weather Finder</h1>
                <input 
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e)=>setCity(e.target.value)}                
                />
                <button onClick={fetchWeather}>Get Weather</button>

                {weather && (
                    <div className="weather-info">
                        <h2>{weather.name}</h2>
                        <p>🌡 Temperature: {weather.main.temp}°C</p>
                        <p>🌥 Condition: {weather.weather[0].description}</p>
                        <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
                    </div>
                )}
            </div>
        ); 
    }
    export default App;