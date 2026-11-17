import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const TripIndex = ({ trips, getTrips, setTrip }) => {
  useEffect(() => {
    getTrips()
    // console.log(`TripIndex trips::`, trips)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>Are you planning an adventure?</h1>
      <h5>Check out the local covid-19 guidelines first</h5>
      <br />
      {trips.map(trip => {
        // curly braces instead of parentheses
        return (
          <ul>
            {' '}
            {/* todo - div instead? */}
            {trip ? (
              <li key={trip.id}>
                {/* {trip.name} , {trip.destination} , {trip.description}, <Link to={`/trips/${trip.id}`}>Travel Guidelines</Link> */}
                {trip.name} <br /> in {trip.destination} ({trip.description}) <br /> 
                {
                  trip.guidelines.length > 0 ? (
                    // stretch - handle multiple guidelines for each trip
                    // icebox - handle guidelines that aren't created right after the trip is created, potentially out of order, assuming the guideline isnt a set of required field args.
                    <Link
                      to={`/guidelines/${'' + trip.id}`}
                      onClick={() => setTrip(trip)}
                    >
                      Travel Guidelines
                    </Link>
                  ) : null
                  // todo - add guideline button for create?
                }
                {/* todo - show photo_url */}
              </li>
            ) : null}
          </ul>
        )
      })}
    </div>
  )
}

export default TripIndex
