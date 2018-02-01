import React from 'react';
import PropTypes from 'prop-types';
import HeroDisplayCard from './HeroesDisplayCard';

const HeroesDisplay = ({heroes}) => {
  return (
    <div className="hero-display row">
      {heroes.map((hero, index) =>
        <HeroDisplayCard
          index={index}
          key={hero.id}
          hero={hero}
        />
      )}
    </div>
  );
};

HeroesDisplay.propTypes = {
  heroes: PropTypes.array.isRequired
};

export default HeroesDisplay;
