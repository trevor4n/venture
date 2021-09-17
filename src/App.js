import { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import SearchForm from './Components/SearchForm/SearchForm'
import SearchResults from './Components/SearchResults/SearchResults'
import SearchHeader from './Components/SearchHeader/SearchHeader'
import Guideline from './Components/Guideline/Guideline'
import TripIndex from './Components/TripIndex/TripIndex'
import TravelSafe from './Components/TravelSafe'
import axios from 'axios'
// import fetch from 'node-fetch'
import './App.css'

function App() {
  const searchOptions = {
    apiVersion: '1',
    key: process.env.REACT_APP_TRAVEL_SAFE_KEY,
    // key: process.env.REACT_APP_TRAVEL_SAFE_KEY_PROD,
    baseUrl: 'https://sandbox.travelperk.com',
    // baseUrl: 'https://api.travelperk.com',
    api: '/travelsafe',
    // icebox - https://developers.travelperk.com/docs/rest-api
    // endpoint: '/restrictions',
    // endpoint: '/airline_safety_measures',
    endpoint: '/guidelines',
  }

  const requestOptions = {
    method: 'GET', // default
    // mode: 'no-cors', // todo - uncomment?
    redirect: 'follow', // default
  }

  // NODE FETCH
  // ref - https://github.com/node-fetch/node-fetch#api
  // const requestOptions = {
  //   method: 'GET', // default
  //   headers: {
  //     'Authorization': 'ApiKey ' + searchOptions.key,
  //     'Accept': 'application/json',
  //     'Api-Version': '1',
  //     'Accept-Language': 'en'
  //   },
  //   redirect: 'follow' // default
  // }

  const [searchParams, setSearchParams] = useState([
    { locationType: 'country_code' },
    { location: '' },
  ])
  const [lastSearch, setLastSearch] = useState([])
  const [results, setResults] = useState([])
  const [trips, setTrips] = useState([])
  const [trip, setTrip] = useState([])

  function getResults(searchParams) {
    // stretch - Travel Restrictions parametric url
    // ref - https://developers.travelperk.com/docs/travel-restrictions
    // stretch - Airline Safety Measurres parametric url
    // ref - https://developers.travelperk.com/docs/airline-safety-measures
    // wip - Travel Guidelines parametric url
    // ref - https://developers.travelperk.com/reference#retrieve-a-local-guideline
    const url = `${searchOptions.baseUrl}${searchOptions.api}${searchOptions.endpoint}?location_type=${searchParams[0].locationType}&location=${searchParams[1].location}`

    // NODE FETCH
    // fetch(url, requestOptions)
    fetch(url, requestOptions, {
      headers: {
        Authorization: 'ApiKey ' + searchOptions.key,
        Accept: 'application/json',
        'Api-Version': '1',
        'Accept-Language': 'en',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(`TravelSafe response::`, response)
        setResults(response.data)
        setLastSearch(searchParams)
        setSearchParams({})
      })
      .catch(console.error)
  }

  function handleChange(event) {
    let tmpSearchParams = [
      { locationType: 'country_code' },
      { location: '' + event.target.value },
    ]
    // let tmpSearchParams = searchParams
    // tmpSearchParams[1].location = '' + event.target.value
    setSearchParams(tmpSearchParams)
  }

  function handleSubmit(event) {
    event.preventDefault()
    getResults(searchParams)
  }

  function getTrips() {
    axios
      .get('http://localhost:8000/trips')
      .then((res) => res.data)
      .then((res) => {
        setTrips(res)
        // console.log(`getTrips:: `, trips)
      })
  }

  useEffect(() => {
    // getResults(searchParams)
    getTrips()
  }, [])

  return (
    <div className="App">
      {/* <SearchHeader lastSearch={lastSearch} />
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchParams={searchParams}
      />
      <SearchResults results={results}/> */}
      <main>
        {/* proxy sandbox */}
        <TravelSafe />

        {/* Trip Index */}
        <Route
          exact
          path="/"
          render={() => (
            <TripIndex trips={trips} getTrips={getTrips} setTrip={setTrip} />
          )}
        />

        {/* Guideline Show */}
        <Route
          exact
          path="/guidelines/:id"
          render={(routerProps) => (
            <Guideline
              match={routerProps.match}
              trip={trip}
              getResults={getResults}
              results={results}
            />
          )}
        />
        {/* stretch - perhaps use /trips as the exact trip index and use the '/' path as a non-exact catch all that redirects to '/trips' */}
      </main>
    </div>
  )
}

export default App
