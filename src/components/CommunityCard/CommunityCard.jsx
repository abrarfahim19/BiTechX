import React from 'react';
import "./CommunityCard.css";
import community from "../../props/community.png"

const CommunityCard = (props) => {
    const {name, bio, summary} = props.d
    return (
        <div className='community-card'>
            <div className='communitycard-details'>
                <img src={community} height="80" alt="" />
                <div style={{display:"flex", flexDirection:"column",justifyContent:"space-between", alignItems:'flex-start'}}>
                    <h5 style={{color:"white"}}>{name}  <span style={{color:"gray", paddingLeft:"10px"}}>{summary.stories} stories</span> <span style={{color:"gray", paddingLeft:"10px"}}>21 stories</span></h5>
                    <p style={{color:"gray", fontWeight:"normal"}}>{bio.slice(0,50)+"..."}</p>
                </div>
            </div>
            <div className='actions'>
                <span>{summary.followers} followers</span>
                <a href='www.google.com' style={{textDecoration:"none", color:"royalblue"}}>Follow</a>
            </div>            
        </div>
    );
};

export default CommunityCard;