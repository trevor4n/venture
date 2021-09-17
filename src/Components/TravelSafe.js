import React, { useEffect } from 'react'

const TravelSafe = () => {

    useEffect(() => {
        
            fetch('http://localhost:8000/proxy')
            .then(res => res.json())
            .then(res => console.log(res))
        
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default TravelSafe
