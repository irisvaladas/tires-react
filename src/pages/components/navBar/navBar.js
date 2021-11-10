import React from "react"
import { Link } from "react-router-dom";
import Logo from "../../../files/logo.jpg"
import './navBar.scss';

const navbar = () => {
    return (
        <div className="navbar">
            <img id="company-logo" src={Logo} />
            <div className="navLinks">
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
            <button>Log in</button>
            <button>Register</button>
        </div>
    );
};

export default navbar;