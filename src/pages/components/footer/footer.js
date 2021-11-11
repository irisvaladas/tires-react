import React from "react";
import './footer.scss';
import Logo from '../../../files/logo.jpg'

const Footer = () => {
    return (
        <div className="footer">
            <nav>
                <div className="left-nav">
                    <ul>
                        <li><a href="#">Mobile App</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Company</a></li>
                    </ul>
                </div>
                <img src={Logo} alt="company-logo" />
                <div className="right-nav">
                    <ul>
                        <li><a href="#">Help Desk</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                </div>
            </nav>
            <div className="footer-bottom">
                <div className="socials">
                    <img src={Logo} alt="social1" />
                    <img src={Logo} alt="social2" />
                    <img src={Logo} alt="social3" />
                    <img src={Logo} alt="social4" />
                </div>
                <p>Follow us</p>
                <p id="copyright">Copyright mechanic team app 2021</p>
            </div>
        </div>
    )
}

export default Footer;