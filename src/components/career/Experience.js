import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
           <h3>Expériences</h3>

           <div className="exp-1">
               <h4>2020 / Développeuse web</h4>
               
               <ul>
                   <li>◦Intégration de maquette avec des animations graphiques avancées</li>
                   <li>◦Responsive design</li>
                   <li>◦Optimisation du référencement naturel (SEO) et amélioration de l’accessibilité d’un site web</li>
                   <li>◦Création d’un réseau social d’entreprise</li>
               </ul>
           </div>

           <div className="exp-2">
               <h4> 2016 - 2020 / Agent administratif et bancaire / Ca Chèques, Rodez</h4>
               
               <ul>
                   <li>◦Gestion des interdictions bancaires</li>
                   <li>◦Traitement des réclamations des agences bancaires</li>
                   <li>◦Elaboration de tableaux Excel (macros) visant à l'amélioration de la productivité des équipes</li>
               </ul>
           </div>

           <div className="exp-3">
               <h4>2016 / Assistante juridique / SCP Rames-Dumoulin, Villerfranche-de-Rouergue</h4>
           </div>

           <div className="exp-4">
               <h4>2015 / Agent administratif en protection sociale / MSA, Rodez</h4>
           </div>

           <div className="exp-5">
               <h4>2015 / Agent en vente et service à la clientèle / Crédit Agricole, Villerfranche-de-Rouergue</h4>
           </div>
        </div>
    );
};

export default Experience;