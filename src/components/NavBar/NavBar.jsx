import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../props/Logo.png"
import './NavBar.css'

const NavBar = () => {

    return (
        <div style={{ position: "fixed" }} className='logo'>
            <Link to="/">
                <div >
                    <img  src={logo} alt="" />
                </div>
            </Link>
        </div>
    );
};

export default NavBar;