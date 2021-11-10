import React from "react";
import './about-section.scss'
import logo from '../../../files/logo.jpg'

const AboutSection = () => {
    return (
        <div className="about-section">
            <div className="company-synopsis">
            <h2>Trusted by 2000+ freelance machanics</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos temporibus ipsum quod sed sunt illo alias ducimus voluptates et autem, provident suscipit reiciendis repudiandae recusandae.</p>
            </div>
            <div className="our-services">
                <div className="service1">
                    <div className="service-text-area">
                        <img src={logo} alt="#" />
                        <h2>Lorem, ipsum dolor.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae numquam, aspernatur facere natus commodi illo est nostrum et hic. Natus tempore ab officia magnam vero.</p>
                        <a href="#">Learn more</a>
                    </div>
                </div>
                <div className="service2">
                    <div className="service-text-area">
                        <img src={logo} alt="#" />
                        <h2>Lorem, ipsum dolor.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae numquam, aspernatur facere natus commodi illo est nostrum et hic. Natus tempore ab officia magnam vero.</p>
                        <a href="#">Learn more</a>
                    </div>
                </div>
                <div className="service3">
                    <div className="service-text-area">
                        <img src={logo} alt="#" />
                        <h2>Lorem, ipsum dolor.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae numquam, aspernatur facere natus commodi illo est nostrum et hic. Natus tempore ab officia magnam vero.</p>
                        <a href="#">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutSection;