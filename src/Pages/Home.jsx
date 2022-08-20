import React from 'react';
import { Link } from 'react-router-dom';
import Authors from '../components/Authors/Authors';
import Communities from '../components/Communities/Communities';
import ShortStory from '../components/ShortStoy/ShortStory';
import StoryCard from '../components/StoryCard/StoryCard';

const Home = () => {
    return (
        <div style={{padding:"100px 0"}} className='body'>
            <Link to='longstory' style={{textDecoration: 'none'}}>
                <StoryCard/>
            </Link>
            <ShortStory/>
            <ShortStory/>
            <Authors/>
            <Link to='longstory' style={{textDecoration: 'none'}}>
                <StoryCard/>
            </Link>
            <ShortStory/>
            <ShortStory/>
            <Communities/>
        </div>
    );
};

export default Home;