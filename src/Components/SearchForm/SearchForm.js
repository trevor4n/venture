import React from 'react'

const SearchForm = () => {
    return (
        <div>
            <form className='App-search_form'>
                <input placeholder='Where would you like to venture?' type='text' name='searchString' required />
                <button type='submit'>Venture!</button>
            </form>
        </div>
    )
}

export default SearchForm
