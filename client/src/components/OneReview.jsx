import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const OneReview = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [review, setReview] = useState({
        name: ''
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
            <h1 style={{fontFamily: 'cursive'}}>{review.name}</h1>
            <p style={{padding: '10px'}}>Date Released: {review.date}</p>
            <p style={{padding: '10px'}}>Hours Played: {review.hoursPlayed}</p>
            <p style={{padding: '10px'}}>Review: {review.description}</p>
            <p style={{padding: '10px'}}>Rating: {review.rating}</p>
        </div>
    )
}

export default OneReview