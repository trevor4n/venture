import React from 'react'

const SearchResults = ({results}) => {
    if(!results.length)
        return <h2>No Results Found...</h2>
    return (
        <div className='App-results'>
            { results.map(result => (
                <div key={result.id} className='result'>
                    <span>
                        {/* todo - result... */}
                        {result}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default SearchResults
