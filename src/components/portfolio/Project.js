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
        let {name, languagesIcons, source, info, picture} = this.props.item;
        
        return (
            <div className="project">
                <div className="icons">
                    {languagesIcons.map(icon =>
                        <i className={icon} key={icon}></i>
                    )}
                </div>
                
                <h3>{name}</h3>

                <img src={picture} alt="" onClick={this.handleInfo}/>

                <span className="infos" onClick={this.handleInfo}>
                    <i className="fas fa-plus-circle"></i>
                </span>

                {
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="infosContent">
                                <div className="head">
                                    <div className="headTitle">
                                        <div className="returnButton" onClick={this.handleInfo}>
                                            <i className="fas fa-arrow-left"></i>
                                        </div>

                                        <h2>{name}</h2>
                                    </div>

                                    <div className="sourceCode">
                                        <a href={source} target="_blank" rel="noopener noreferrer" className="sourceButton">Code source</a>
                                    </div>
                                </div>

                                <p className="text">{info}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Project;