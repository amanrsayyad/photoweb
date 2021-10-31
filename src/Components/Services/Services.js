import React from 'react';
import './Services.css';
import light from '../../Svg/light.svg';
import camerapink from '../../Svg/camerapink.svg';
import aph from '../../Svg/aph.svg';

const Services = () => {
    return (
        <div className='services'>
            <h1 class="animate-skill">Our Services</h1>
            <div className='services_container'>
                <div className='services_card'>
                    <div class="services__title">
                        <img src={aph} alt="" />
                        <h3>Photography</h3>
                        <p>We shoot professional photos with rich cameras in high resolutions at outdoor places.</p>
                    </div>
                </div>
                <div className='services_card'>
                    <div class="services__title">
                        <img src={camerapink} alt="" />
                        <h3>Studio shoot</h3>
                        <p>We shoot professional photos in our studio in your memorable moments.</p>
                    </div>
                </div>
                <div className='services_card'>
                    <div class="services__title">
                        <img src={light} alt="" />
                        <h3>Event shoots</h3>
                        <p>We shoot professional photos & videos at diffrent events & programs.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
