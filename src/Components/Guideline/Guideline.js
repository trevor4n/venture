import React, { useEffect, useState } from 'react'
import axios from 'axios'
// todo - local styles

const Guideline = ({match, trip, getResults, results}) => {

    const [guideline, setGuideline] = useState([])

    function getGuideline(){
        axios.get(`http://localhost:8000/guidelines/${match.params.id}`) // todo - double quotes?
        .then(res => res.data)
        .then(res => {
            setGuideline(res)
            console.log(`getGuideline:: `, guideline)
        })
    }

    useEffect(() => {
        getGuideline()
        // todo - consider moving the following into a getGuideline then statement
        getResults([
            { locationType: "country_code" },
            // { location: "" + guideline[0].location }
            { location: "" + guideline.location }
            // icebox - check if string concats are necessary
        ])
        console.log(`guideline location:: `, guideline.location)
        console.log(`Guideline getResults:: `, results)
    }, [])

    return (
        <div>
            <h1>Guidelines for {trip.name}</h1>
            <p>Destination: {trip.destination}</p>
            <p>:: {trip.description} ::</p>
            {/* stretch - photo_url */}
            <hr />
            <p>
                {/* stretch - secondary check for if guideline has been created yet */}
                --Local Guideline-- <br/>
                Location code: { guideline.location } <br/>
                Info: { results[0] }
                {/* icebox - guideline[0].trip provides a url that could be used for show trip detail route */}
            </p>
            {/* todo - back to TripIndex button */}
        </div>
    )
}

export default Guideline
