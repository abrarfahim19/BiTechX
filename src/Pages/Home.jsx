import React from 'react';
import Authors from '../components/Authors/Authors';
import Communities from '../components/Communities/Communities';
import ShortStory from '../components/ShortStoy/ShortStory';
import StoryCard from '../components/StoryCard/StoryCard';

const Home = () => {
    return (
        <div style={{padding:"100px 0"}} className='body'>
            <StoryCard/>
            <ShortStory/>
            <ShortStory/>
            <Authors/>
            <StoryCard/>
            <ShortStory/>
            <ShortStory/>
            <Communities/>
        </div>
    );
};

export default Home;