import React, { useEffect, useState } from 'react';
import CommunityCard from '../CommunityCard/CommunityCard';
import "./Communities.css";

const Communities = () => {
    const [data, setData] = useState([])
    useEffect(()=> {
        fetch("communities.json")
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    
    return (
        <div style={{display:"flex", flexDirection:"column",gap:"10px"}}>
            <h2 style={{textAlign:'left', color:"white", padding:"10px"}}>Authors to Follow</h2>
            {
                data && data.map(d=> <CommunityCard key={d.id} d={d}/>)
            }
        </div>
    );
};

export default Communities;