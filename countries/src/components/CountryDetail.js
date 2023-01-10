import axios from "axios"
import { useEffect, useState } from "react"
// console.log("process env", process.env.REACT_APP_API_KEY)

export default function CountryDetail({ country }) {
  // console.log(country[0]);
  // country = country[0];
  const lat = country.latlng[0]
  const lon = country.latlng[1]

  const [weather, setWeather] = useState({})

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((promise) => {
        setWeather(promise.data)
      })
    console.log("Effect")
  }, [])

  return (
    // searchedCountries.map(item =>
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <h1>Languages:</h1>
      <ul>
        {Object.values(country.languages).map((lan) => (
          <li key={lan}>{lan}</li>
        ))}
      </ul>
      <img width="300px" height="200px" src={country.flags.png} alt="flag" />
      <h1>Weather in {country.name.common}</h1>
      <p>
        Temperature {Object.keys(weather).length && weather?.main?.temp} Celcius
      </p>
      {Object.keys(weather).length && (
        <img
          src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
          alt="weather"
        />
      )}
      <p>Wind {Object.keys(weather).length && weather?.wind?.speed}m/s</p>
    </div>
  )
}
