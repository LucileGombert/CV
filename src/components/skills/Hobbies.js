import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Centres d'intérêt</h3>

            <div className="list">
                <ul>
                    <li className="hobby">
                        <i className="fas fa-paint-brush"></i>
                        <span>Bricolage & Aménagement d’intérieur & Décoration</span>
                    </li>

                    <li className="hobby">
                        <i className="fas fa-motorcycle"></i>
                        <span>Moto de route</span>
                    </li>

                    <li className="hobby">
                        <i className="fas fa-bicycle"></i>
                        <span>VTT</span>
                    </li>

                    <li className="hobby">
                        <i className="fas fa-globe"></i>
                        <span>Veille technologique & Nouvelles technologies</span>
                    </li>

                    <li className="hobby">
                        <i className="fab fa-bitcoin"></i>
                        <span>Cryptomonnaies</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Hobbies;