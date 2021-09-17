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
      // method: 'POST', // default
      // mode: 'no-cors', // todo - uncomment?
      redirect: 'follow', // default
    }

    fetch('http://localhost:8000/proxy/country_code/DE/', requestOptions, {
      headers: {
        Authorization: 'ApiKey ' + process.env.REACT_APP_TRAVEL_SAFE_KEY,
        Accept: 'application/json',
        'Api-Version': '1',
        'Accept-Language': 'en',
      },
    })
      .then(checkStatus)
      // .then(res => res.json())
      // .then(res => console.log(res))
      .then((res) => res.data)
      .then((res) => {
        // console.log(res.json())
        setGuideline(res)
      })
  }

  useEffect(() => {
    fetchGuideline()
  }, [])

  return (
    <div>
      <div>Summary: {guideline ? guideline.summary : null}</div>
    </div>
  )
}

export default TravelSafe
