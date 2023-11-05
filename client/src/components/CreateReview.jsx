import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Form = () => {
    const navigate = useNavigate()
    const [review, setReview] = useState({
        name: '',
        date: '',
        hoursPlayed: '',
        description: '',
        rating: ''
    })

    const [error, setError] = useState({})

    const handleChange = (e) => {
        setReview({...review, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/reviews", review)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => {
                console.log(err.response.data.error.errors)
                setError(err.response.data.error.errors)
            })
    }

    return (
        <div>
            <h2>Add a new Review:</h2>
            <form onSubmit={handleSubmit}>
                <div style={{margin: '10px'}}>
                    <label htmlFor="">Name: </label>
                    <input type="text" name="name" onChange={handleChange} />
                    {
                        error.name ? <p>{error.name.message}</p> : null
                    }
                </div>
                <div style={{margin: '10px'}}>
                    <label htmlFor="">Date Released: </label>
                    <input type="date" name="date" onChange={handleChange} />
                    {
                        error.date ? <p>{error.date.message}</p> : null
                    }
                </div>
                <div style={{margin: '10px'}}>
                    <label htmlFor="">Hours Played: </label>
                    <input type="number" name="hoursPlayed" min={1} onChange={handleChange} />
                    {
                        error.hoursPlayed ? <p>{error.hoursPlayed.message}</p> : null
                    }
                </div>
                <div style={{margin: '10px'}}>
                    <label htmlFor="">Review: </label>
                    <textarea name="description" cols="30" rows="10" onChange={handleChange} />
                    {
                        error.description ? <p>{error.description.message}</p> : null
                    }
                </div>
                <div style={{margin: '10px'}}>
                    <label htmlFor="">Rating: </label>
                    <input type="number" name="rating" min={1} max={5} onChange={handleChange} />
                    {
                        error.rating ? <p>{error.rating.message}</p> : null
                    }
                </div>
                <button style={{backgroundColor: 'lightBlue', margin: '10px'}}>Submit</button>
                <Link to={"/"}>
                    <button style={{margin: '10px', backgroundColor: 'lightPink'}}>Cancel</button>
                </Link>
            </form>
        </div>
    )
}

export default Form