import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


const EditReview = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [review, setReview] = useState({
        name: '',
        date: '',
        hoursPlayed: '',
        description: '',
        rating: ''
    })
    console.log(id)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/reviews/${id}`)
        .then(res => {
            console.log(res)
            setReview(res.data.review)
            console.log(Array.isArray(res.data.reviews)) 
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const [error, setError] = useState({})

    const handleChange = (e) => {
        setReview({...review, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/reviews/${id}`, review)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => {
                console.log(err.response.data.error.errors)
                setError(err.response.data.error.errors)
            })
    }

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/reviews/${id}`)
        .then(res => {
            console.log("success deleting review");
            console.log(res)
            navigate("/")
        })
        .catch(err => {
            console.log("error deleting review", err.response);
        })
    }

    return (
        <div>
            <h2>Edit Review</h2>
            <form onSubmit={handleSubmit}>
                <div style={{margin: '10px'}}>
                    <label htmlFor="">Name: </label>
                    <input type="text" name="name" value={review.name} onChange={handleChange} />
                    {
                        error.name ? <p>{error.name.message}</p> : null
                    }
                </div>
                <div style={{margin: '10px'}}>
                    <label htmlFor="">Date Released: </label>
                    <input type="date" name="date" value={review.date.substring(0, 10)} onChange={handleChange} />
                    {
                        error.date ? <p>{error.date.message}</p> : null
                    }
                </div>
                <div style={{margin: '10px'}}>
                    <label htmlFor="">Hours Played: </label>
                    <input type="number" name="hoursPlayed" min={1} value={review.hoursPlayed} onChange={handleChange} />
                    {
                        error.hoursPlayed ? <p>{error.hoursPlayed.message}</p> : null
                    }
                </div>
                <div style={{margin: '10px'}}>
                    <label htmlFor="">Review: </label>
                    <textarea name="description" cols="30" rows="10" value={review.description} onChange={handleChange} />
                    {
                        error.description ? <p>{error.description.message}</p> : null
                    }
                </div>
                <div style={{margin: '10px'}}>
                    <label htmlFor="">Rating: </label>
                    <input type="number" name="rating" min={1} max={5} value={review.rating} onChange={handleChange} />
                    {
                        error.rating ? <p>{error.rating.message}</p> : null
                    }
                </div>
                <button style={{backgroundColor: 'lightBlue', margin: '10px'}}>Submit</button>
                <Link to={"/"}>
                    <button style={{margin: '10px', backgroundColor: 'lightPink'}}>Cancel</button>
                </Link>
                <button onClick={(e) => handleDelete(review._id)} style={{backgroundColor: 'red', margin: '10px'}}>Delete</button>
            </form>
        </div>
    )
}

export default EditReview