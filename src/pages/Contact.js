import React from 'react';
import Navigation from '../components/Navigation';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>

            <div className="contactContent">
                <div className="header"></div>

                <div className="contactBox">
                        <h1>Contactez-moi</h1>

                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Rodez</span>
                            </li>

                            <li>
                                <i className="far fa-envelope"></i>
                                <span>contact@lucilegombert.com</span>
                            </li>

                            <li>
                                <i className="fas fa-globe"></i>
                                <span><a href="https://lucilegombert.com/" target="_blank" rel="noopener noreferrer">lucilegombert.com</a></span>
                            </li>
                        </ul>
                    </div>

                <div className="socialMedia">
                    <ul>
                        <a href="https://www.facebook.com/LucileGombertDev" target="_blank" rel="noopener noreferrer">
                            <h4>Facebook</h4>
                            <i className="fab fa-facebook-square"></i>
                        </a>
                        
                        <a href="https://github.com/LucileGombert" target="_blank" rel="noopener noreferrer">
                            <h4>GitHub</h4>
                            <i className="fab fa-github-square"></i>
                        </a>
                        
                        <a href="https://www.linkedin.com/in/lucile-gombert/" target="_blank" rel="noopener noreferrer">
                            <h4>LinkedIn</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;