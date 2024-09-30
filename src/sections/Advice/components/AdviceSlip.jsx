import { useEffect, useState } from 'react'
import FavouriteSlipsList from "./FavouriteSlipsList"
function AdviceSlip() {
    const [advice, setAdvice] = useState('');
    const [updateAdvice, setUpdateAdvice] = useState(true)
    const [favouriteAdvice, setFavouriteAdvice] = useState([])

    // Use Effect to fetch advice
    useEffect(() => {
        if(updateAdvice) {
            // Const function fetch method
            const adviceData = async() => {
                try {
                    const response = await fetch('https://api.adviceslip.com/advice')
                    if(!response.ok) {
                        throw new Error('Network response was not ok')
                    }
                    const data = await response.json()
                    setAdvice(data.slip)
                } catch (error) {
                    console.error('Fetch operation failed:', error)
                }
            }
            // Call the fetch function
            adviceData()
        }

        setUpdateAdvice(false)
    }, [updateAdvice])

    //Get a new advice
    const handleAdviceRequest = () => {
        setUpdateAdvice(true)
    }

    //As long as the advice isn't already in the list of favourites, add it.
    const addFavourite = () => {
        if(!favouriteAdvice.includes(advice.advice)) {
            setFavouriteAdvice(current => [...current, advice.advice])
        }
    }

    return (
        <>
        <section className="adivce-slip">
            <h3>Current Advice</h3>
            <p>{advice.advice}</p>
            <button onClick={handleAdviceRequest}>Get More Advice</button>
            <button onClick={addFavourite}>Save To Favourites</button>
        </section>
        <FavouriteSlipsList favourites={favouriteAdvice}/>
        </>
    )
}

export default AdviceSlip