import React from 'react';
import AuthorCard from '../AuthorCard/AuthorCard';
import "./Authors.css";

const Authors = () => {
    return (
        <div style={{display:"flex", flexDirection:"column",gap:"10px"}}>
            <h2 style={{textAlign:'left', color:"white", padding:"10px"}}>Authors to Follow</h2>
            <AuthorCard/>
            <AuthorCard/>
            <AuthorCard/>
        </div>
    );
};

export default Authors;