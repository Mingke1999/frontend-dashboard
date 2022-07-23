import React, { useState, useEffect,Component } from 'react';
import {Link} from 'react-router-dom'
import { Button } from './Button';
import axios from 'axios'
import './Navbar.css';
import { useNavigate } from "react-router-dom";

function Navbar(){
const history = useNavigate();
const [click, setClick] = useState(false);
const [button, setButton] = useState(true);
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);
const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
useEffect(() => {
        showButton();
    }, []);
window.addEventListener('resize', showButton);
const logUserOut = () =>{
    sessionStorage.clear();
    history("/")
}
    return ( 

    <div>
        <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <img src='https://alacritas.cis.utas.edu.au/~mingked/kit301/PNGs/logo.png'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
               
                <li className='nav-item'>
                    <Link
                        to='/service'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Services
                    </Link>
                </li>
                { 
                    sessionStorage.getItem('token') 
                    ?
                    <li>
                      <Link
                            to='/'
                            className='nav-links'
                            onClick={logUserOut}
                        >
                        Logout
                        </Link>  
                    </li>
                    :
                    <li>
                      <Link
                            to='/login'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                        Login
                        </Link>  
                    </li>
                }

                {
                    sessionStorage.getItem('token')
                    ?
                    <li className='nav-item'>
                    <Link
                        to='/dashboard'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Dashboard
                    </Link>
                    </li>
                    :
                    <li className='nav-item'>
                    <Link
                        to='/sign-up'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Sign Up
                    </Link>
                    </li>

                }
                
             </ul>
                {/* button && <Button buttonStyle='btn--outline'>SIGN UP</Button>*/}
             </div>
        </nav>
        
    </div>
    )
}

export default Navbar