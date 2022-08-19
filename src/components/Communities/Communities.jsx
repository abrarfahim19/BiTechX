import React from 'react';
import CommunityCard from '../CommunityCard/CommunityCard';
import "./Communities.css";

const Communities = () => {
    return (
        <div style={{display:"flex", flexDirection:"column",gap:"10px"}}>
            <h2 style={{textAlign:'left', color:"white", padding:"10px"}}>Authors to Follow</h2>
            <CommunityCard/>
            <CommunityCard/>
            <CommunityCard/>
        </div>
    );
};

export default Communities;