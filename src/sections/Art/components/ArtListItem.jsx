import PublicationHistoryList from "./PublicationHistoryList"
import { useEffect, useState } from 'react'
function ArtListItem ({ art }) {
    const [imageSrc, setImageSrc] = useState('');

    // Use Effect to fetch the image
    useEffect(() => {
        const imageUrl = `https://boolean-uk-api-server.fly.dev${art.imageURL}`

        fetch(imageUrl)
            .then(response => {
                if(!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.blob()
            })
            .then(blob => {
                const objectUrl = URL.createObjectURL(blob)
                setImageSrc(objectUrl)
            })
            .catch(error => {
                console.error('Fetch operation failed:', error)
            })
    }, [art.imageURL])

    return (
        <>
            <div className="frame">
              <img src={imageSrc} />
            </div>
            <h3>{art.title}</h3>
            <p>Artist: {art.artist}</p>
            <h4>Publication History:</h4>
            {art.publicationHistory.map(publication => (
                <PublicationHistoryList key={art.id} publication={publication}/>
            ))}
        </>
    )
}

export default ArtListItem