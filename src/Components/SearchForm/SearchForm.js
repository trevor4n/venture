import React from 'react'

const SearchForm = ({ handleChange, handleSubmit, searchParams }) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className="App-SearchForm">
        <input
          placeholder="Where would you like to venture?"
          type="text"
          name="searchParams"
          required
          onChange={handleChange}
          value={searchParams[1].location}
        />
        <button type="submit">
          {/* <SearchIcon height="2rem" width="2rem" /> */}
          Venture!
        </button>
      </form>
    </div>
  )
}

export default SearchForm
