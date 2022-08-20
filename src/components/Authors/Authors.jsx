import React, { useEffect, useState } from 'react';
import AuthorCard from '../AuthorCard/AuthorCard';
import "./Authors.css";

const Authors = () => {
    const [data, setData] = useState([])
    useEffect(()=> {
        fetch("users.json")
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    return (
        <div style={{display:"flex", flexDirection:"column",gap:"10px"}}>
            <h2 style={{textAlign:'left', color:"white", padding:"10px"}}>Authors to Follow</h2>
            {
                data && data.map(d => <AuthorCard key={d.id} d={d}/>)
            }
        </div>
    );
};

export default Authors;