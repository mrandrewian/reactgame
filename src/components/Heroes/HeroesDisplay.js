import React from 'react';
import PropTypes from 'prop-types';
import HeroDisplayCard from './HeroesDisplayCard';

const HeroesDisplay = ({heroes}) => {
  return (
    <div className="row">
      {heroes.map(hero =>
        <HeroDisplayCard key={hero.id} hero={hero}/>
      )}
    </div>
  );
};

HeroesDisplay.propTypes = {
  heroes: PropTypes.array.isRequired
};

export default HeroesDisplay;
