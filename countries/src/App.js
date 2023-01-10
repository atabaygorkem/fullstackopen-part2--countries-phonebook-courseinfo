import { useState, useEffect } from "react"
import axios from "axios"
import CountryDetail from "./components/CountryDetail"

const App = (props) => {
  const [search, setSearch] = useState("")
  const [countries, setCountries] = useState([])
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data)
    })
  }, [])

  const [isClicked, setIsClicked] = useState(-1)

  let searchedCountries = countries.filter((country) =>
    country.name.official.toLowerCase().includes(search.toLowerCase())
  )

  // let countryName = "";

  return (
    <div>
      <label>Find Countries</label>
      <input
        name="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
          setIsClicked(-1)
        }}
      />
      {searchedCountries.length > 10 && (
        <p>Too many matches. Specify another filter</p>
      )}
      {countries.length !== 0 &&
        searchedCountries.length <= 10 &&
        searchedCountries.length !== 1 &&
        searchedCountries.map((country, index) => {
          return (
            <div id={country.ccn3} key={country.ccn3}>
              <p style={{ display: "inline-block" }}>{country.name.official}</p>
              <button
                onClick={() => {
                  setIsClicked(isClicked === index ? -1 : index)
                }}
              >
                Show
              </button>
            </div>
          )
        })}

      {isClicked !== -1 && searchedCountries.length !== 1 && (
        <CountryDetail country={searchedCountries[isClicked]} />
      )}

      {searchedCountries.length === 1 && (
        <CountryDetail country={searchedCountries[0]} />
      )}
    </div>
  )
}

export default App
