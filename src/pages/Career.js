import React from 'react';
import Navigation from '../components/Navigation';
import Studies from '../components/career/Studies';
import Experience from '../components/career/Experience';

const Career = () => {
    return (
        <div className="career">
            <Navigation/>
            
            <div className="careerContent">
                <Studies />
                <Experience /> 
            </div>
        </div>
    );
};

export default Career;