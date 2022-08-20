import React, { useEffect, useState } from 'react';
import image from "../../props/storyImage.png";
import author1 from "../../props/avatar.png";
import { MdOutlineTravelExplore } from 'react-icons/md';
import './LongStoryPage.css';

const LongStoryPage = () => {
    const [data, setData] = useState([])
    useEffect(()=> {
        fetch("stories.json")
        .then(res => res.json())
        .then(data => setData(data[0]))
    },[])

    const {content, created, community, author, title} = data
    return (
        <div style={{backgroundColor:"black",paddingTop:"100px", display:'flex', justifyContent:'center', alignItems:'center', height:"100%"}}>
            <div className='shortstory'>
                <h2 style={{padding:"10px"}}>{title}</h2>
                <div className='longstory-image'>
                    <img style={{objectFit: "cover", height:"100%", width:"100%", borderRadius:"5px 30px 5px 5px", paddingBottom:"10px"}} src={image} alt="" />
                </div>
                <p>{content}</p>
                <hr />
                <div className="story-footer">
                    <div className='author'>
                        <div className='author-img'>
                            <img src={author1} alt="" style={{height:"40px", width:"40px", borderRadius:"50%"}} />
                        </div>
                        <p style={{fontWeight:"bold"}}>{author?.name}</p>
                    </div>
                    <div><p style={{fontWeight:"lighter"}}>{created}</p></div>
                    <div style={{display:"flex", justifyContent:'space-between', alignItems:"center", gap:"5px"}}><MdOutlineTravelExplore style={{color:"royalblue"}}/> <span><a href="#" style={{textDecoration:"none", color:"royalblue", fontWeight:"bold"}}>{community?.name}</a></span></div>
                </div>
            </div>
        </div>
    )
};

export default LongStoryPage;