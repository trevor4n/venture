import axios from 'axios'
import React, { useState } from 'react'

const CreateTrip = () => {
  const initialState = {
    name: '',
    destination: '',
    description: '',
    photo_url:
      'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg',
    location_type: 'country_code',
    location: 'DE',
  }

  const [formState, setFormState] = useState(initialState)

  // const [searchParams, setSearchParams] = useState([
  //   { name: '' },
  //   { destination: '' },
  //   { description: '' },
  //   { photo_url: '' },
  //   { locationType: 'country_code' }, // stretch - remove this safety
  //   { location: '' },
  // ])
  // const [lastSearch, setLastSearch] = useState([])
  // const [results, setResults] = useState([])

  const handleChange = event => {
    // let changedForm = [
    //   { locationType: 'country_code' },
    //   { location: '' + event.target.value },
    // ]
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (
      document.getElementById('name').validity.valid &&
      document.getElementById('destination').validity.valid &&
      document.getElementById('description').validity.valid &&
      document.getElementById('photo_url').validity.valid &&
      document.getElementById('location').validity.valid
    ) {
      console.log(formState)
      // addVenture(formState)
      setFormState(initialState)
    }
  }

  const addVenture = venture => {
    const requestOptions = {
      method: 'POST',
      // mode: 'no-cors',
      redirect: 'follow', // default
    }
    axios
      .put('http://localhost:8000/trips/', venture)
      .then(res => {
        res.redirect('../TripIndex/TripIndex.js')
      })
      .catch(console.error)
  }

  return (
    <div className='CreateTrip'>
      <h2>Trip Info 🗺️</h2>
      <form onSubmit={handleSubmit} className='App-CreateTrip'>
        <ul>
          <li className='form-pair'>
            <label htmlFor='name'>Title:</label>
            <input
              required
              id='name'
              type='text'
              onChange={handleChange}
              value={formState.name}
            />
          </li>
          {/* <hr /> */}
          <li className='form-pair'>
            <label htmlFor='destination'>Destination:</label>
            <input
              required
              id='destination'
              type='text'
              onChange={handleChange}
              value={formState.destination}
            />
          </li>
          <li className='form-pair'>
            <label htmlFor='description'>Description:</label>
            <input
              id='description'
              type='text'
              onChange={handleChange}
              value={formState.description}
            />
          </li>
          <li className='form-pair'>
            <label htmlFor='photo_url'>Photo:</label>
            <input
              placeholder='https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg'
              id='photo_url'
              type='url'
              onChange={handleChange}
              value={formState.photo_url}
            />
          </li>
          <li className='form-pair'>
            <label htmlFor='location'>Location Code:</label>
            <select
              id='location'
              onChange={handleChange}
              // value={formState.location}
            >
              <option value='DE'>DE</option>
              <option value='CZ'>CZ</option>
              <option value='DE'>🚧</option>
            </select>
          </li>
        </ul>

        <button type='submit'>Add Venture</button>
      </form>
    </div>
    // <SearchHeader lastSearch={lastSearch} /> // icebox - last search
  )
}

export default CreateTrip
