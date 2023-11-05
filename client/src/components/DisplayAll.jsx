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

    // const handleDelete = (reviewId) => {
    //     axios.delete('http://localhost:8000/api/reviews/' + reviewId)
    //         .then(res => {
    //             console.log("success deleting review");
    //             console.log(res)
    //             const filteredReviews = allReviews.filter((review) => {
    //                 return review._id !== reviewId;
    //             });
    //             setAllReviews(filteredReviews);
    //             })
    //         .catch(err => {
    //             console.log("error deleting review", err.response);
    //         })
    // }

    return (
        <div>
            <h2>Reviews Completed:</h2>
            { 
                allReviews.map((review) => (
                    <div key={review._id}>
                        <p>Name: {review.name}</p>
                        <Link to={`/oneReview/${review._id}`}>
                            <button style={{margin: '10px', backgroundColor: 'lightcyan'}}>Details</button>
                        </Link>
                        <Link to={'/reviews/' + review._id}>
                            <button style={{margin: '10px', backgroundColor: 'lightseagreen'}}>Edit a review</button>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAll
