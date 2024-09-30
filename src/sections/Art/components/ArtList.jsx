import ArtListItem from "./ArtListItem"
import { useEffect, useState } from 'react'

function ArtList () {
    const [paintings, setPaintings] = useState([]);

    // Use Effect to fetch contacts
    useEffect(() => {
        // Const function fetch method
        const paintingsData = async() => {
            try {
                const response = await fetch('https://boolean-uk-api-server.fly.dev/art')
                if(!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                setPaintings(data)
            } catch (error) {
                console.error('Fetch operation failed:', error)
            }
        }

        // Call the fetch function
        paintingsData()
    }, [])

    return (
        <>
            <ul className="art-list">
                {paintings.map(painting => (
                    <li key={painting.id}>
                        <ArtListItem art={painting} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ArtList