import React from "react";
import './testimonials.scss';
import Logo from '../../../files/logo.jpg'

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h2>What customers think about us</h2>
            <div className="testimonial-containers">
                <div className="testimonial1">
                    <img src={Logo} alt="#" />
                    <h3>customer testimonial</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus labore, necessitatibus mollitia quo ea voluptas praesentium et odio exercitationem sit rem! Maxime laudantium sapiente, nihil vel commodi, velit repudiandae ad perspiciatis labore eaque cum minima reprehenderit autem exercitationem accusamus aperiam?</p>
                </div>
                <div className="testimonial2">
                    <img src={Logo} alt="#" />
                    <h3>customer testimonial</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus labore, necessitatibus mollitia quo ea voluptas praesentium et odio exercitationem sit rem! Maxime laudantium sapiente, nihil vel commodi, velit repudiandae ad perspiciatis labore eaque cum minima reprehenderit autem exercitationem accusamus aperiam?</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;