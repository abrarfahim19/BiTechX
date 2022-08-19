import React from 'react';
import "./AuthorCard.css";
import author from "../../props/author.png"

const AuthorCard = () => {
    return (
        <div className='author-card'>
            <div className='card-details'>
                <img src={author} height="50" alt="" />
                <div style={{display:"flex", flexDirection:"column",justifyContent:"space-between", alignItems:'flex-start'}}>
                    <h5 style={{color:"white"}}>Michel Scott  <span style={{color:"gray"}}>1,212 stories</span></h5>
                    <p style={{color:"gray", fontWeight:"normal"}}>Don't ever for any reason do anything to anyone</p>
                </div>
            </div>
            <div className='actions'>
                <span>1000 followers</span>
                <a href='www.google.com' style={{textDecoration:"none", color:"royalblue"}}>Follow</a>
            </div>            
        </div>
    );
};

export default AuthorCard;