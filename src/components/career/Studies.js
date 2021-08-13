import React from 'react';

const Studies = () => {
    return (
        <div className="studies">
           <h3>Formations</h3>

           <div className="study-1">
               <h4>2021 / Développeur web (diplôme RNCP III / bac+2) / OpenClassrooms</h4>
               
               <ul>
                    <li>◦Découper, assembler et intégrer les éléments d’une maquette graphique </li>
                    <li>◦Animer des pages web et construire un site web responsive</li>
                    <li>◦Améliorer le référencement naturel et l’accessibilité d’un site</li>
                    <li>◦Se connecter à un service web pour exploiter des données tierces (API)</li>
                    <li>◦Créer, gérer et afficher le contenu d’une base de données</li>
               </ul>
           </div>

           <div className="study-2">
               <h4>2015 / DUT Carrières Juridiques / IUT de Rodez</h4>
               
               <ul>
                   <li>Stage dans le service DRH du Conseil Départemental de l’Aveyron</li>
               </ul>
           </div>

           <div className="study-3">
               <h4>2013 / BTS Management des Unités Commerciales / Form’Action Rodez</h4>
               
               <ul>
                   <li>Vendeuse prêt-à-porter à Mango dans le cadre du contrat de professionnalisation</li>
               </ul>
           </div>
        </div>
    );
};

export default Studies;