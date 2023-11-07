import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    function changeColor(e) {
        e.target.style.background = 'lightcoral';
    }
    function changeBack(e) {
        e.target.style.background = 'lightsalmon';
    }
    return (
        <div style={{display:"flex"}}>
            <img style={{marginLeft: '10px', height: 'Leavecm', width: '4cm', opacity: '0.4', backgroundColor:'lightGreen'}} src="https://media.istockphoto.com/id/1251623043/vector/joystick-line-and-solid-icon-electronics-concept-gamepad-controller-sign-on-white-background.jpg?s=612x612&w=0&k=20&c=d5GjLIPSBo8QR7GJD_BO7TqN6sFa8GpUUaSZLXczDwI=" alt="gaming logo" />
            <h1 style={{marginRight: "500px", marginLeft: "20px", fontFamily: 'papyrus'}}>Gaming Rant</h1>
            <Link to={"/"}>
                <button style={{margin: "20px", padding: "20px", backgroundColor: 'lightsalmon'}} onMouseOver={changeColor} onMouseLeave={changeBack}>Home</button>
            </Link>
            <Link to={"/createReview"}>
            <button style={{margin: "20px", padding: "20px", backgroundColor: 'lightsalmon'}}onMouseOver={changeColor} onMouseLeave={changeBack} >Add a review</button>
            </Link>
        </div>
    )
}

export default Nav