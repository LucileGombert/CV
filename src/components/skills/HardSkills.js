import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import OtherSkills from './OtherSkills';

class HardSkills extends Component {
    state= {
        front: [
            {id:1, value: "CSS", xp:1},
            {id:2, value: "Sass", xp:0.8},
            {id:3, value: "Bootstrap", xp:1},
            {id:4, value: "JavaScript", xp:1},
            {id:5, value: "Vue", xp:0.5},
            {id:6, value: "React", xp:0.2},
        ],
        back: [
            {id:1, value: "Node", xp:0.7},
            {id:2, value: "Express", xp:0.7},
            {id:3, value: "PHP", xp:0.1},
            {id:4, value: "MongoDB", xp:0.6},
            {id:5, value: "MySQL", xp:0.7},
        ]
    }

    render() {
        let {front, back} = this.state;

        return (
            <div className="hardSkills">
                <h3>Hardskills</h3>
                
                <ProgressBar languages={front} className="frontDisplay" title="Frontend"/>
                <ProgressBar languages={back} className="backDisplay" title="Backend"/>
            
                <OtherSkills/>
            </div>
        );
    }
}

export default HardSkills;