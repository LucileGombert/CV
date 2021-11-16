import React, { Component } from 'react';

class Project extends Component {
    state = {
        showInfo: false
    }

    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        let {name, languagesIcons, source, link, info, picture} = this.props.item;
        
        return (
            <div className="project">
                <div className="projectContent">
                    <div className="icons">
                        {languagesIcons.map(icon =>
                            <i className={icon} key={icon}></i>
                        )}
                    </div>
                    
                    <h3>{name}</h3>

                    {/* <img src={picture} alt="" onClick={this.handleInfo}/> */}

                    <a href={link} target="_blank" rel="noreferrer">
                        <img src={picture} alt="Projet"/>
                    </a>
                    <span className="infos" onClick={this.handleInfo}>
                        <i className="fas fa-plus-circle"></i>
                    </span>
                </div>
                

                {
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="head">
                                <div className="returnButton" onClick={this.handleInfo}>
                                    <i className="fas fa-arrow-left"></i>
                                </div>

                                <h3>{name}</h3>
                            </div>

                            <p className="text">{info}</p>

                            <div className="sourceCode">
                                <a href={source} target="_blank" rel="noopener noreferrer" className="sourceButton">Code source</a>
                            </div>
                        </div>
                    )
                }
                
            </div>
        );
    }
}

export default Project;