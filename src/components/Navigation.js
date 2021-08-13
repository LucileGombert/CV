import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./images/me.JPG" alt="Profil" />
                    {/* <img src="images/me.JPG" alt="Profil3" />
                    <img src={window.location.origin + '/CV/./images/me.JPG'} alt="Profil4"/>
                    <img src={window.location.origin + '/CV/images/me.JPG'} alt="Profil6"/> */}
                   
                    <h2>Lucile Gombert</h2>
                </div>

            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/CV/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/CV/parcours" activeClassName="navActive">
                            <i className="fas fa-briefcase"></i>
                            <span>Parcours</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/CV/competences" activeClassName="navActive">
                            <i className="fas fa-tools"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/CV/portfolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/CV/contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialMedia">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/LucileGombertDev" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/LucileGombert" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github-square"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/lucile-gombert/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="signature">
                <p><a href="https://lucilegombert.com/" target="_blank" rel="noopener noreferrer">Lucile Gombert</a> | 2021</p>
            </div>
        </div>
    );
};

export default Navigation;