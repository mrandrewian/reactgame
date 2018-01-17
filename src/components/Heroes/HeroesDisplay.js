import React from 'react';
import PropTypes from 'prop-types';
import HeroDisplayRow from './HeroesDisplayRow';

const HeroesDisplay = ({heroes}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Power</th>
          <th>Toughness</th>
          <th>Class</th>
        </tr>
      </thead>
      <tbody>
        {heroes.map(hero =>
          <HeroDisplayRow key={hero.id} hero={hero}/>
        )}
      </tbody>
    </table>
  );
};

HeroesDisplay.propTypes = {
  heroes: PropTypes.array.isRequired
};

export default HeroesDisplay;
