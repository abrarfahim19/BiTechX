import React from 'react';
import "./AuthorCard.css";
import author from "../../props/author.png"

const AuthorCard = (props) => {
    console.log(props.d);
    const {name, bio, summary} = props.d;
    return (
        <div className='author-card'>
            <div className='card-details'>
                <img src={author} height="50" alt="" />
                <div style={{display:"flex", flexDirection:"column",justifyContent:"space-between", alignItems:'flex-start'}}>
                    <h5 style={{color:"white"}}>{name}<span style={{color:"gray"}}> {summary.stories} stories</span></h5>
                    <p style={{color:"gray", fontWeight:"normal"}}>{bio}</p>
                </div>
            </div>
            <div className='actions'>
                <span>{summary.followers} followers</span>
                <a href='www.google.com' style={{textDecoration:"none", color:"royalblue"}}>Follow</a>
            </div>            
        </div>
    );
};

export default AuthorCard;