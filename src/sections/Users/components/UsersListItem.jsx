import { useEffect, useState } from "react";

function UsersListItem ({user}) {
    const [imageSrc, setImageSrc] = useState('');

    // Use Effect to fetch the image
    useEffect(() => {
        // Basic fetch
        const imageUrl = user.profileImage
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
    }, [user.profileImage])

    return (
        <>
            <li style={{background: user.favouriteColour}}>
                <img src={imageSrc} className="users-icon" />
                <h3>{user.firstName} {user.lastName}</h3>
                <p>{user.email}</p>
            </li>
        </>
    )
}

export default UsersListItem