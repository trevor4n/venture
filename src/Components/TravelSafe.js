import React, { useEffect, useState } from 'react'

function checkStatus(res) {
  if (res.status >= 200 && res.status < 300) {
    return res
  } else {
    let err = new Error(res.statusText)
    err.response = res
    throw err
  }
}

const TravelSafe = () => {
  const [guideline, setGuideline] = useState([])

  function fetchGuideline() {
    const requestOptions = {
      method: 'GET', // default
      // method: 'POST',
      // mode: 'no-cors',
      redirect: 'follow', // default
    }

    fetch('http://localhost:8000/proxy/country_code/DE/', requestOptions, {
      headers: {
        // FLAGS
        Authorization: 'ApiKey ' + process.env.REACT_APP_TRAVEL_SAFE_KEY,
        // Authorization: 'ApiKey ' + process.env.REACT_APP_TRAVEL_SAFE_KEY_PROD,
        
        Accept: 'application/json',
        'Api-Version': '1',
        'Accept-Language': 'en',
      },
    })
      .then(checkStatus)
      .then(res => res.json())
      .then(res => {
        setGuideline(res)
      })
      .then(res => {
        console.log('TravelSafe component guideline', guideline)
      })
  }

  useEffect(() => {
    fetchGuideline()
    // console.log(guideline)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

  console.log(guideline)

  if(Object.keys(guideline).length > 0){
    return (
      <div>
        <h3>🦠 {guideline.details}</h3> <br />
        <h4>Risk Level: {guideline.risk_level['name']} - {guideline.risk_level["details"]}</h4> <br />
        {/* <div>{guideline.risk_level["details"]}</div> */}

        {/* Mask Policy */}
        <div>{guideline.guidelines[1].summary}</div>
        <br />

        {/* Public Transportation, Shops */}
        <div>{guideline.guidelines[2].summary}</div>
        <div>{guideline.guidelines[6].summary}</div>
        <br />
        
        {/* Restaurants, Bars, Nightclubs */}
        <div>{guideline.guidelines[3].summary}</div>
        <div>{guideline.guidelines[4].summary} {guideline.guidelines[4].details}</div>
        <div>{guideline.guidelines[5].summary}</div>
        {/* <div>{guideline.guidelines[5].details} {guideline.guidelines[5].summary}</div> */}

        <br />
        {/* <div>Severity of - {guideline.guidelines[0].category['name']} - {guideline.guidelines[0].severity} </div> */}
        <div>Severity of internal government measures: {guideline.guidelines[0].severity} </div>
        <h6>{guideline.guidelines[0].summary}*</h6>
        <div className='regulations'>*{guideline.summary}</div> <br />
      </div>
    )
  } else {
    return(
      <div>Loading guideline...</div>
    )
  }
}

export default TravelSafe
