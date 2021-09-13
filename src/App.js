import { useEffect, useState } from 'react';
import SearchForm from './Components/SearchForm/SearchForm'
import SearchResults from './Components/SearchResults/SearchResults'
import SearchHeader from './Components/SearchHeader/SearchHeader';
import './App.css';

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
    endpoint: '/guidelines'
  }

  const requestOptions = {
    method: 'GET',
    // redirect: 'follow'
  }

  const [results, setResults] = useState([])
  // todo - initialState should corelate to endpoint used
  // current array breakdown
  // const [searchParams, setSearchParams] = useState({
  //   locationType: "country_code",
  //   location: "CZ"
  // })
  const [searchParams, setSearchParams] = useState([
    { locationType: "country_code" },
    { location: "" }
  ])
  const [lastSearch, setLastSearch] = useState([])

  useEffect(() => {
    getResults(searchParams)
  }, [])

  function getResults(searchParams){
    // todo - Travel Restrictions parametric url
    // ref - https://developers.travelperk.com/docs/travel-restrictions


    // todo - Airline Safety Measurres parametric url

    // Travel Guidelines parametric url
    // ref - https://developers.travelperk.com/reference#retrieve-a-local-guideline
    const url = `${searchOptions.baseUrl}${searchOptions.api}${searchOptions.endpoint}?location_type=${searchParams[0].locationType}&location=${searchParams[1].location}`
    fetch(url, requestOptions, {
      headers: {
        'Authorization': 'ApiKey ' + searchOptions.key,
        'Api-Version': '1',
        'Accept-Language': 'en'
      }
    })
    .then(response => response.json()) //API call successful
    .then(response => {
      setResults(response.data);
      setLastSearch(searchParams);
      setSearchParams({}); //reset params after searching
    })
    .catch(console.error);

  }

  function handleChange(event) {
    let tmpSearchParams = [
      { locationType: "country_code" },
      { location: "" + event.target.value }
    ]
    // let tmpSearchParams = searchParams
    // tmpSearchParams[1].location = '' + event.target.value
    setSearchParams(tmpSearchParams)
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    getResults(searchParams)
  }

  return (
    <div className="App">
      <SearchHeader lastSearch={lastSearch} />
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchParams={searchParams}
      />
      <SearchResults results={results}/>
    </div>
  );
}

export default App
