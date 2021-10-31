import React from 'react';
import './Gallery.css';

const Gallery = () => {
    return (
        <div class="project" id="project">
        <div class="project__wrapper">
            <div class="project__text animate-project">
                <p class="topline">Gallery</p>
                <h1>Nature shoots</h1>
                <p class="project__desc">
                    This is one of best images click by our employee this photo is from nainytal kashmir.
                </p>
            </div>
            <div class="project__text animate-project">
                <h1>Events</h1>
                <p class="project__desc">
                    We shoot at any event in our surrounding is happening in india.
                </p>
             </div>
            <div class="project__text animate-project">
                <h1>Wedding</h1>
                <p class="project__desc">
                   We shoot awesome photos and videos and videos make the memorable moments for them.
                </p>
            </div>
            <div class="project__text animate-project">
                <h1>Big Events</h1>
                <p class="project__desc">
                  One of the best events shoot at palace of pune very huge production is happend that time.
                </p>
            </div>
            <div class="project__text animate-project">
                <h1>Regional events</h1>
                <p class="project__desc">
                  This events are very much attached to our company because from there we stared from the scratch.
                </p>
            </div>
            <div class="project__card animate-project">
                <img src="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80" alt=""  className='pro__img'/>
            </div>
            <div class="project__card animate-project">
                <img src="https://shotkit.com/wp-content/uploads/2020/09/event-photography-feat.jpg" alt="" className='pro__img'/>
            </div>
            <div class="project__card animate-project">
                <img src="https://www.manhattanbride.com/wp-content/uploads/2019/04/Indian-Traditions39-787-Christopher-Brock-Photography.jpg" alt="" className='pro__img'/>
            </div>
            <div class="project__card animate-project">
                <img src="https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1626226296000/photosp/8414445b-0491-4b68-8a6f-8d3c6857fce1/stock-photo-light-night-entrance-india-golden-wedding-life-event-ceremony-8414445b-0491-4b68-8a6f-8d3c6857fce1.jpg" alt="" className='pro__img'/>
            </div>
            <div class="project__card animate-project">
                <img src="https://i.pinimg.com/736x/77/e2/08/77e2080c3e2a6700643a0845ff8c8c6c--saree-wedding-bollywood-wedding.jpg" alt="" className='pro__img'/>
            </div>
        </div>
    </div>
    )
}

export default Gallery;



