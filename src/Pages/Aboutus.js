import React from 'react';
import './Aboutus.css';
import team from '../Svg/team.svg';
import cam from '../Svg/cam.png';

const Aboutus = () => {
    return (
        <div class="aboutUs">
            <div class="aboutUs__container">
                <div>
                    <img src={cam} alt="gym" class="aboutUs__img animate-img" />
                </div>
                <div>
                    <h2 class="aboutUs__heading">About Us</h2>
                    <div class="aboutUs__features">
                        <h2 class="aboutUs__feature">
                            We are <span>PhotoWeb</span> very focused team that encourage there employee to deliver quality product to our customer.
                        </h2>
                        <h2 class="aboutUs__feature">
                            Our team is puarly based on production grade quality so please contact us or visit our store today.
                        </h2>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Aboutus;
