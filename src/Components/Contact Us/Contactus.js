import React from 'react';
import './Contactus.css';
import emailjs from 'emailjs-com';

const Contactus = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_fl61xdl',
            'template_2xo8f8d',
            e.target,
            'user_dTrtp80zDobyw6gcS3G5E').then((result) => {
                alert("Mail has been sucessfully send! 👍");

            }, (error) => {
                alert(error.message)

            });
        e.target.reset()
    }




    return (
        <div className="container">
            <div className="contact-box">
                <div className="left"></div>
                <div className="right">
                    <form onSubmit={sendEmail}>
                        <h2 className='contact_head'>Contact Us</h2>
                        <input type="text" name="name" class="field" placeholder="Your Name" />
                        <input type="email" name="user_email" class="field" placeholder="Your Email" />
                        <textarea placeholder="Message" name="message" class="field"></textarea>
                        <button className="btn">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactus;
