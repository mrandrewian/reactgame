import React from 'react';
import PropTypes from 'prop-types';

const HeroesDisplayRow = ({hero}) => {
  return (
    <tr>
      <td>{hero.firstName}</td>
      <td>{hero.lastName}</td>
      <td>{hero.power}</td>
      <td>{hero.toughness}</td>
      <td>{hero.class}</td>
    </tr>
  );
};

HeroesDisplayRow.propTypes = {
  hero: PropTypes.object.isRequired
};

export default HeroesDisplayRow;
