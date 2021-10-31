import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <div className="footer">
        <div className="footerLinks">
            <h1 className='headFooter'>PhotoWeb</h1>
            <p className='paraFoot'>Photo studio that capture your moments.</p>
        </div>
        <div className="footerLinks">
            <h1 className='head'>Contact Us</h1>
            <Link to='/' className='linkFoot'>Contact</Link>
            <Link to='/' className='linkFoot'>Support</Link>
        </div>
        <div className="footerLinks">
        <h1 className='head'>Future Plans</h1>
            <Link to='/' className='linkFoot'>Proadcast</Link>
            <Link to='/' className='linkFoot'>Giveaway</Link>
            <Link to='/' className='linkFoot'>Subscriptions</Link>
        </div>
        <div className="footerLinks">
        <h1 className='head'>Social Media</h1>
            <Link to='/' className='linkFoot'>Linkedin</Link>
            <Link to='/' className='linkFoot'>Instagram</Link>
            <Link to='/' className='linkFoot'>Youtube</Link>
        </div>
    </div>
    )
}

export default Footer;
