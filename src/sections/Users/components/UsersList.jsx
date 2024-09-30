import UsersListItem from "./UsersListItem"
import { useEffect, useState } from 'react'

function UsersList () {
    const [contacts, setContacts] = useState([]);

    // Use Effect to fetch contacts
    useEffect(() => {
        // Const function fetch method
        const contactsData = async() => {
            try {
                const response = await fetch('https://boolean-uk-api-server.fly.dev/Yumikitsu/contact')
                if(!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                setContacts(data)
            } catch (error) {
                console.error('Fetch operation failed:', error)
            }
        }

        // Call the fetch function
        contactsData()
    }, [])

    return (
        <>
        <ul className="users-list">
            {contacts.map(contact => (
                <UsersListItem key={contact.id} user={contact} />
            ))}
        </ul>
        </>
    )
}

export default UsersList