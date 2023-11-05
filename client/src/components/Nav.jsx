import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div style={{display:"flex", backgroundColor: "lightGreen"}}>
            <h1 style={{marginRight: "500px", marginLeft: "20px"}}>Gaming Rant</h1>
            <Link to={"/"}>
                <button style={{margin: "20px", padding: "20px", backgroundColor: 'lightsalmon'}}>Home</button>
            </Link>
            <Link to={"/createReview"}>
            <button style={{margin: "20px", padding: "20px", backgroundColor: 'lightcoral'}}>Add a review</button>
            </Link>
        </div>
    )
}

export default Nav