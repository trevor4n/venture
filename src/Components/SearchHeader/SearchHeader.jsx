import React from 'react'

const SearchHeader = ({ lastSearch }) => {
  return (
    <div>
      <header>
        <div className="brand">
          <h1>Venture</h1>
        </div>
        <p className="muted">
          Showing results for <strong>{lastSearch}</strong>
        </p>
      </header>
    </div>
  )
}

export default SearchHeader
