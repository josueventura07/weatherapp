import React from 'react'
import { useState } from 'react'

const WeatherCard = ({weather, temperature}) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const changeTemperature = () => setIsCelsius(!isCelsius)

  console.log(weather);

  return (
    <article className='card'>
        <h1 className='card_title'>Weather App</h1>
        <h2 className='card_subtitle'>{`${weather?.name}, ${weather?.sys.country}`}</h2>
        <section className='card_first-content'>
          <img className='card_icon' src={weather ? `https:openweathermap.org/img/wn/${weather.weather[0]?.icon}@4x.png` : ''} alt="img" />
          
        </section>
        <section className='card_second-content'>
          <h3>{weather?.weather[0].description}</h3>
          <ul className='info_content'>
            <li className='info_content-list'><span className='info_title'>Wind Speed:</span> {weather?.wind.speed} m/s</li>
            <li className='info_content-list'><span className='info_title'>Clouds:</span> {weather?.clouds.all} %</li>
            <li className='info_content-list'><span className='info_title'>Pressure:</span> {weather?.main.pressure} hPa</li>
          </ul>
        </section>
        <h2 className='temperature'>{isCelsius ? `${temperature?.celsius} °C` : `${temperature?.fahrenheit} °F`}</h2>
        <button className='card_btn'onClick={changeTemperature}>{isCelsius ? 'Change to °F' : 'Change to °C'}</button>
    </article>
  )
}

export default WeatherCard