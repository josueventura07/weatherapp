import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'

function App() {

const [coords, setCoords] = useState()
const [weather, setWeather] = useState()

useEffect(() => {
  const success = pos => {
    const obj = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(obj)
  }
navigator.geolocation.getCurrentPosition(success)
}, [])


useEffect(() => {
  if(coords) {
  const APIKEY = '292dc31945c32f5484206d9867a3f41f'
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
  axios.get(URL)
  .then(res => setWeather(res.data))
  .catch(err => console.log(err))
  }
}, [coords])

  console.log(weather);

  return (
    <div className="App">
      <h1>Weather App</h1>
    </div>
  )
}

export default App
