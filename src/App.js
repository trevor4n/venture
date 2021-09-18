import { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
// import SearchForm from './Components/SearchForm/SearchForm'
// import SearchResults from './Components/SearchResults/SearchResults'
// import SearchHeader from './Components/SearchHeader/SearchHeader'
import Guideline from './Components/Guideline/Guideline'
import TripIndex from './Components/TripIndex/TripIndex'
import axios from 'axios'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  /*
  const [searchParams, setSearchParams] = useState([
    { locationType: 'country_code' },
    { location: '' },
  ])
  const [lastSearch, setLastSearch] = useState([])
  const [results, setResults] = useState([])
  */
  const [trips, setTrips] = useState([])
  const [trip, setTrip] = useState([])

  /* 
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
  */

  function getTrips() {
    axios
      .get('http://localhost:8000/trips')
      .then(res => res.data)
      .then(res => {
        setTrips(res)
        // console.log(`getTrips:: `, trips)
      })
  }

  useEffect(() => {
    // getResults(searchParams)
    getTrips()
  }, [])

  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark' fixed='top'>
        <Container>
          <Navbar.Brand href='/'>
            <img
              alt=''
              src='https://react-bootstrap.github.io/logo.svg'
              width='30'
              height='30'
              className='d-inline-block align-top sticky-nav'
            />{' '}
            Venture
          </Navbar.Brand>
        </Container>
      </Navbar>
      {/* <SearchHeader lastSearch={lastSearch} />
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchParams={searchParams}
      />
      <SearchResults results={results}/> */}
      <main>
        {/* Trip Index */}
        <Route
          exact
          path='/'
          render={() => (
            <TripIndex trips={trips} getTrips={getTrips} setTrip={setTrip} />
          )}
        />

        {/* Guideline Show */}
        <Route
          exact
          path='/guidelines/:id'
          render={routerProps => (
            <Guideline match={routerProps.match} trip={trip} />
          )}
        />
        {/* icebox - /trips as the exact trip index and use the '/' path as a non-exact redirect catch to '/trips' */}
      </main>
    </div>
  )
}

// icebox - string concats

export default App
