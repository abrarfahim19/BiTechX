import React from 'react';
import "./ShortStory.css";
import image from "../../props/storyImage.png";
import author from "../../props/avatar.png";
import { MdOutlineTravelExplore } from 'react-icons/md';

const ShortStory = () => {
    const time = "11:22 AM, Nov 11, 2019"
    return (
        <div className='shortstory'>
            <div className='shortstory-image'>
                <img style={{objectFit: "cover", height:"100%", width:"100%", borderRadius:"5px 30px 5px 5px"}} src={image} alt="" />
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas officiis eos autem similique assumenda voluptates hic, quibusdam vitae illo? Nulla praesentium iusto ratione delectus nihil itaque enim odio, nostrum consequuntur maxime, officiis tempore suscipit quis eius atque excepturi, sit error quibusdam quae? Esse voluptatibus ipsa consectetur consequuntur nihil delectus, amet maxime atque, quia ea aspernatur nesciunt. Dignissimos nihil, doloribus nulla eligendi vel adipisci consequuntur fuga, nostrum ipsum in autem et qui quisquam iste sit doloremque ea, voluptas amet! Quo, optio autem ea quas necessitatibus ratione numquam voluptatem! Consectetur inventore quod esse veniam nam velit expedita ea aspernatur, impedit corrupti eveniet!</p>
            <hr />
            <div className="story-footer">
                <div className='author'>
                    <div className='author-img'>
                        <img src={author} alt="" style={{height:"40px", width:"40px", borderRadius:"50%"}} />
                    </div>
                    <p style={{fontWeight:"bold"}}>Michel Scott</p>
                </div>
                <div><p style={{fontWeight:"lighter"}}>{time}</p></div>
                <div style={{display:"flex", justifyContent:'space-between', alignItems:"center", gap:"5px"}}><MdOutlineTravelExplore style={{color:"royalblue"}}/> <span><a href="#" style={{textDecoration:"none", color:"royalblue", fontWeight:"bold"}}>Travel to Explore</a></span></div>
            </div>
        </div>
    );
};

export default ShortStory;