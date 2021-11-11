import React from "react"
import { Link } from "react-router-dom";
import Logo from "../../../files/logo.jpg"
import "./navBar.scss"

const navbar = () => {
    return (
        <div className="outDiv">
            <div className="logoDiv">
                <img src={Logo} alt="company logo" />
            </div>
            <div className="menu">
                <Link to="/">About Us</Link>
                <Link to="/contacts">Contacts</Link>
                <Link to="/searchingPage">Services</Link>
            </div>
            <div className="buttons">
                <Link to="../../guest/LoginPage"><button className="primary-btn1"> Login </button></Link>
                <Link to="../../guest/RegistrationPage"><button className="primary-btn2"> Register </button></Link>
            </div>
        </div>
    );
};

export default navbar;