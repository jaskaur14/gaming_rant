import { useEffect } from 'react'
import { useState } from 'react'
import { React } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const DisplayAll = () => {

    const {id} = useParams()
    const [allReviews, setAllReviews] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/reviews')
        .then(res => {
            console.log(res)
            setAllReviews(res.data.reviews)
            console.log(Array.isArray(res.data.reviews)) 
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    function changeColor(e) {
        e.target.style.background = 'lightSeaGreen';
    }
    function changeBack(e) {
        e.target.style.background = 'lightCyan';
    }
    function changeLColor(e) {
        e.target.style.background = 'green';
    }
    function changeBackL(e) {
        e.target.style.background = 'lightGreen';
    }

    return (
        <div>
            <h2 style={{fontFamily: 'copperplate'}}>Reviews Completed:</h2>
            <div style={{display: 'flex', flex: '1', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
            { 
                allReviews.map((review) => (
                    <div key={review._id}>
                        <div>
                            <h3 style={{fontFamily: 'cursive'}}>{review.name}</h3>
                            <Link to={`/oneReview/${review._id}`}>
                                <button style={{margin: '10px', backgroundColor: 'lightcyan'}} onMouseOver={changeColor} onMouseLeave={changeBack}>Details</button>
                            </Link>
                            <Link to={'/reviews/' + review._id}>
                                <button style={{margin: '10px', backgroundColor: 'lightcyan'}} onMouseOver={changeColor} onMouseLeave={changeBack}>Edit a review</button>
                            </Link>
                        </div>
                    </div>
                ))
            }
            </div>
            <div>
                <h2 style={{fontFamily: 'copperplate'}}>Find New Games!</h2>
                <a href="https://store.steampowered.com/charts/mostplayed/">
                    <button style={{margin: '20px', backgroundColor: 'lightGreen'}} onMouseOver={changeLColor} onMouseLeave={changeBackL}>Steam's Most Played</button>
                </a>
                <a href="https://www.twitch.tv/">
                    <button style={{margin: '20px', backgroundColor: 'lightGreen'}} onMouseOver={changeLColor} onMouseLeave={changeBackL}>Check Out Twitch!</button>
                </a>
                <a href="https://www.vgreleaselist.com/#closest">
                    <button style={{margin: '20px', backgroundColor: 'lightGreen'}} onMouseOver={changeLColor} onMouseLeave={changeBackL}>Keep Up With New Releases</button>
                </a>
            </div>
        </div>
    )
}

export default DisplayAll
