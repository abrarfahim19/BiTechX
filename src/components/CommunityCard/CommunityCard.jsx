import React from 'react';
import "./CommunityCard.css";
import community from "../../props/community.png"

const CommunityCard = () => {
    return (
        <div className='community-card'>
            <div className='communitycard-details'>
                <img src={community} height="80" alt="" />
                <div style={{display:"flex", flexDirection:"column",justifyContent:"space-between", alignItems:'flex-start'}}>
                    <h5 style={{color:"white"}}>Michel Scott  <span style={{color:"gray", paddingLeft:"10px"}}>1,212 stories</span> <span style={{color:"gray", paddingLeft:"10px"}}>21 stories</span></h5>
                    <p style={{color:"gray", fontWeight:"normal"}}>Don't ever for any reason do anything to anyone...</p>
                </div>
            </div>
            <div className='actions'>
                <span>1000 followers</span>
                <a href='www.google.com' style={{textDecoration:"none", color:"royalblue"}}>Follow</a>
            </div>            
        </div>
    );
};

export default CommunityCard;