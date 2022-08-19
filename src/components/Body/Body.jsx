import React from 'react';
import AuthorCard from '../AuthorCard/AuthorCard';
import Authors from '../Authors/Authors';
import Communities from '../Communities/Communities';
import ShortStory from '../ShortStoy/ShortStory';
import StoryCard from '../StoryCard/StoryCard';
import './Body.css';

const Body = () => {
    return (
        <div className='body'>
            <StoryCard/>
            <ShortStory/>
            <Authors/>
            <Communities/>
        </div>
    );
};

export default Body;