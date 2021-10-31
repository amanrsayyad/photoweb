import React from 'react';
import './Home.css';
import video from '../Svg/video.svg';
import {Link} from 'react-router-dom';
import Services from '../Components/Services/Services';
import Aboutus from './Aboutus';
import Gallery from './Gallery';
import Contactus from '../Components/Contact Us/Contactus';
import Footer from '../Components/Footer/Footer';




const Home = () => {

    return (
        <div>
            <div class="about" id="about">
                <div class="about__container">
                    <div>
                        <h1 class="about__heading animate-about">Pictures that catch your moments.</h1>
                        <div class="about__features">
                            <p class="about__feature animate-about">
                                Quality pictures & videos that memories live life long.
                                We professionaly shoot photos & videos for production purposes.
                            </p>
                            
                            <div className="exploreBtn"><Link to='./Contactus'>Contact Us <i class="fas fa-arrow-right"></i></Link></div>
                        </div>
                    </div>
                    <div>
                        <img src={video} alt="gym" class="about__img animate-img" />
                    </div>

                </div>
            </div>
            <div>
                <Aboutus />
                <Services />
                <Gallery />
                <Footer />
            </div>
        </div>


    )
}

export default Home;
