import React, { useEffect, useState } from 'react';
import "./ShortStory.css";
import image from "../../props/storyImage.png";
import authorImage from "../../props/avatar.png";
import { MdOutlineTravelExplore } from 'react-icons/md';

const ShortStory = () => {
    const [data, setData] = useState([])
    
    useEffect(()=> {
        fetch("shortStory.json")
        .then(res => res.json())
        .then(data => setData(data[0]))
    },[])
    
    const {content, community, author,created} = data;
    return (
        <div className='shortstory'>
            <div className='shortstory-image'>
                <img style={{objectFit: "cover", height:"100%", width:"100%", borderRadius:"5px 30px 5px 5px"}} src={image} alt="" />
            </div>
            <p>{content}</p>
            <hr />
            <div className="story-footer">
                <div className='author'>
                    <div className='author-img'>
                        <img src={authorImage} alt="" style={{height:"40px", width:"40px", borderRadius:"50%"}} />
                    </div>
                    <p style={{fontWeight:"bold"}}>{author?.name}</p>
                </div>
                <div><p style={{fontWeight:"lighter"}}>{created}</p></div>
                <div style={{display:"flex", justifyContent:'space-between', alignItems:"center", gap:"5px"}}><MdOutlineTravelExplore style={{color:"royalblue"}}/> <span><a href="#" style={{textDecoration:"none", color:"royalblue", fontWeight:"bold"}}>{community?.name}</a></span></div>
            </div>
        </div>
    );
};

export default ShortStory;