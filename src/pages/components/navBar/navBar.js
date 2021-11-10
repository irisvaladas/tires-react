import React from "react"
import { Link } from "react-router-dom";
import Logo from "../../../files/logo.jpg"
import "./navBar.scss"

const navbar = () => {
    return (
        <div>
            <img src={Logo} id="logo"/>
            <li>
                <Link to="/">About Us</Link>
            </li>
            <li>
                <Link to="/contacts">Contacts</Link>
            </li>
            <li>
                <Link to="/searchingPage">Services</Link>
            </li>
        </div>
    );
};

export default navbar;