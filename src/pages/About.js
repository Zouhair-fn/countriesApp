import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>A propos</h1>
            <br />
            <p>Le site que nous avons créé est connecté à une API de pays, offrant aux utilisateurs une expérience de navigation fascinante dans le monde entier. Le site est conçu pour afficher les pays du monde avec leur drapeau, leur population et leurs autres informations pertinentes.Le site dispose également d'une fonctionnalité de tri qui vous permet de filtrer les pays par continent. Cela vous permet de découvrir les pays d'un continent particulier.
            En outre, vous pouvez également trier les pays en fonction de leur population.
            </p>
            <br />
            <p>Dans l'ensemble, notre site connecté à une API de pays est un excellent outil pour explorer le monde et découvrir chaque pays.
            Nous espérons que cette expérience de navigation immersive vous inspirera à voyager davantage et à en apprendre davantage sur notre monde incroyable.
            </p>
        </div>
    );
};

export default About;