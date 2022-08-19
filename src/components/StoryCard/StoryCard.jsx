import React from 'react';
import './StoryCard.css';
import storyImage from '../../props/storyImage.png'
import avatar from '../../props/avatar.png'
import {MdOutlineTravelExplore} from "react-icons/md"

const StoryCard = () => {
    return (
        <div className="storycard">
            <div className="story-details">
                <h3>This text is for our article title , sometime it is quite long and like this</h3>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:"10px"}}>
                    <div className='author'>
                        <div className='author-img'>
                            <img src={avatar} alt="" style={{height:"30px", width:"30px", borderRadius:"50%"}} />
                        </div>
                        <p style={{fontWeight:"normal"}}>Michel Scott</p>
                    </div>
                    <div style={{display:"flex", justifyContent:"center",gap:"5px", alignItems:"center"}}> <MdOutlineTravelExplore style={{color:"royalblue"}}/> <span><a href="#" style={{textDecoration:"none", color:"royalblue", fontWeight:"bold"}}>Travel to Explore</a></span></div>
                </div>
                <hr />
                <p style={{fontWeight:"lighter", fontSize:"12px"}}>Nov 4, 2019| 2 min read <span style={{fontWeight:"bold", color:"gray", marginLeft:"5px"}}>#Website #Design #Dev_Web</span></p>
            </div>
            <div style={{width: "200px",height: "120px"}}>
                <img style={{objectFit: "cover", height:"100%", width:"100%", borderRadius:"5px 30px 5px 5px"}} src={storyImage} alt="" />
            </div>
        </div>
    );
};

export default StoryCard;

{/* <h5>Article Title is like this</h5>
<div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <img style={{borderRadius:"50%", objectFit: "cover"}} src={avatar} height="30" width="30" alt="" />
        <p>Michale Scott</p>    
    </div>
    <div ><MdOutlineTravelExplore/> <span>Travel to Explore</span></div>
</div>
<hr />
<p>Nov 4, 2019 | 2 min read #Website #Design #Dev_Web #Adobe...</p> */}