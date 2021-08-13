import React from 'react';
import Navigation from '../components/Navigation';
import HardSkills from '../components/skills/HardSkills';
import SoftSkills from '../components/skills/SoftSkills';
import TransversalSkills from '../components/skills/TransversalSkills';
import Hobbies from '../components/skills/Hobbies';

const Skills = () => {
    return (
        <div className="skills">
            <Navigation/>
            
            <div className="skillsContent">
                <HardSkills />
                <SoftSkills /> 
                <TransversalSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Skills;