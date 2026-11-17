import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TravelSafe from '../TravelSafe'

const Guideline = ({ match, trip }) => {
  const [guideline, setGuideline] = useState([])

  function getGuideline() {
    axios
      .get(`http://localhost:8000/guidelines/${match.params.id}`)
      .then(res => res.data)
      .then(res => {
        setGuideline(res)
        console.log(`getGuideline:: `, guideline)
      })
  }

  useEffect(() => {
    getGuideline()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // avoid moving the following into a getGuideline then statement
  console.log(`guideline location:: `, guideline.location)

  return (
    <div>
      <h1>{trip.name}</h1>
      <p>Destination: {trip.destination}</p>
      <p>{trip.description}</p>
      {/* stretch - photo_url */}
      <p>
        {/* stretch - secondary check for if guideline has been created yet */}
        Location code: {guideline.location} <br />
        <hr />
        <TravelSafe />
        {/* icebox - guideline[0].trip provides a url that could be used for show trip detail route */}
      </p>
      {/* todo - back to TripIndex button */}
    </div>
  )
}

export default Guideline
