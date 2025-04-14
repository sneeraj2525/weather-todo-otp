import React, { useState } from 'react'
import weatherimg from '../../images/weather.png'; 
import axios from "axios"


const About = () => {

  const [city ,setCity] = useState();
  const [weather , setWeather] = useState();
  const [date ] = useState(new Date());

  const handleCityChange = (event) => {
      setCity(event.target.value)
  }

  const fetchWeather = async () => {
     try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q= ${city}&appid=${'6526d49bfbbb5d297c18d007b5ca1f9c'
      }`)
      console.log(response);
      setWeather(response);
     } catch (error) {
        console.log("Error fetching weather data" , error );
     }
  }

  const handleClick = () => {
      fetchWeather();
  }

  return (
    <>
      <section>
        <div className='container'>
            
             <div className='weather-container'>
                  <div className='title'>Weather App</div>
                    <div className='app-box'>
                      <input type='text' placeholder='Enter city' value={city} onChange={handleCityChange} />
                      
                      <button className='btn-theme' onClick={handleClick}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                          </svg>
                      </button>
                    </div>
                    {
                      weather && <>
                      <div className='city-name'>
                          <img src={weatherimg} alt="Logo" />
                          <h3>{weather.data.name}</h3>
                          <p>Date : {date.toDateString()}</p>
                      </div>

                      <div className='weather-description'>
                          <h1>{weather.data.main.temp} <span>&deg;c</span></h1>
                          <p>{weather.data.weather[0].description} </p>
                      </div>

                      <div className='weather-text'>
                        <div className='box'>
                            <h6>{weather.data.main.humidity} %</h6>
                            <p>Humidity</p>
                        </div>
                        <div className='box'>
                            <h6>{weather.data.wind.speed} km/h</h6>
                            <p>Wind Speed</p>
                        </div>
                        <div className='box'>
                            <h6>{weather.data.weather[0].main}</h6>
                            <p>Main</p>
                        </div>
                          
                      </div>


                      </>
                    }
                      
             </div>
        </div>
      </section>
    </>
    
  )
}

export default About