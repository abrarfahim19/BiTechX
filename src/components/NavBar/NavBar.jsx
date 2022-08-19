import React from 'react';
import logo from "../../props/Logo.png"
import './NavBar.css'

const NavBar = () => {
    return (
        <div style={{ position: "fixed" }} className='logo'>
            <div >
                <img  src={logo} alt="" />
            </div>
        </div>
    );
};

export default NavBar;