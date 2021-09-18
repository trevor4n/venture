import { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import Guideline from './Components/Guideline/Guideline'
import TripIndex from './Components/TripIndex/TripIndex'
import axios from 'axios'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav'
import './App.css'
import CreateTrip from './Components/CreateTrip/CreateTrip'
// import viz from './android-chrome-192x192.png'

function App() {
  const [trips, setTrips] = useState([])
  const [trip, setTrip] = useState([])

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
              // src={viz}
              // width='30'
              // height='30'
              className='d-inline-block align-top sticky-nav viz'
            />{' '}
            Venture
          </Navbar.Brand>
          {/* <Nav className='me-auto'> */}
          <Nav>
            <Nav.Link href="/createTrip">Add a Trip</Nav.Link>
            <Nav.Link href="https://github.com/trevor4n/venture" target='_blank' >GitHub repo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
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

        {/* Trip Create */}
        <Route
          exact
          path='/createTrip'
          render={() => (
            <CreateTrip />
          )}
        />
        {/* icebox - /trips as the exact trip index and use the '/' path as a non-exact redirect catch to '/trips' */}
      </main>
    </div>
  )
}

// icebox - string concats

export default App
