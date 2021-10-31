import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { auth, signInwithGoogle } from '../../firebase';

const Header = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            setUser(user)
            console.log(user)
        })
    }, [])

    const signOut = () => {
        auth.signOut().then(() => {
            setUser(null)
        })
    }

    return (
        <div className='header'>
            <div className='header__left'>
                <Link to='/'>Photo<span>Web</span></Link>
            </div>
            <div className="header__right">
                <div className='header__icons'>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <Link to='/' onClick={closeMobileMenu}>
                            Home
                        </Link>
                        <Link to='/Aboutus' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                        <Link to='/Gallery' onClick={closeMobileMenu}>
                            Gallery
                        </Link>
                        <Link to='./Contactus' onClick={closeMobileMenu}>
                            Contact US
                        </Link>
                       
                       
                        {user === null ?
                            (<div className="g-auth mobAuth" onClick={signInwithGoogle}><span>Log In</span></div>) :
                            (   <div className="g-user">
                                    <h3 className="g-userName">{user.displayName}</h3>
                                    <div className="g-auth" onClick={signOut}><span>Log Out</span></div>
                                </div>
                            )
                        }
                    </ul>
                    <div className='menu_icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
