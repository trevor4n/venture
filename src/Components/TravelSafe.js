import React, { useEffect } from 'react'

const TravelSafe = () => {

    useEffect(() => {
        const requestOptions = {
            method: 'GET', // default
            // method: 'POST', // default
            // mode: 'no-cors', // todo - uncomment?
            redirect: 'follow' // default
          }

            fetch('http://localhost:8000/proxy/country_code/DE/', requestOptions, {
                headers: {
                    'Authorization': 'ApiKey ' + process.env.REACT_APP_TRAVEL_SAFE_KEY,
                    'Accept': 'application/json',
                    'Api-Version': '1',
                    'Accept-Language': 'en'
                }
            })
            .then(res => res.json())
            .then(res => console.log(res))
        
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default TravelSafe
