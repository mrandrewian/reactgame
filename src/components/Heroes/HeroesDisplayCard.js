import React from 'react';
import PropTypes from 'prop-types';

const HeroesDisplayCard = ({hero}) => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-header">
          <i className="material-icons">face</i> {hero.firstName} {hero.lastName}
        </div>
        <div className="card-body">
          <div><i className="material-icons">fingerprint</i> {hero.class}</div>
          <div><i className="material-icons">fitness_center</i> {hero.power}</div>
          <div><i className="material-icons">security</i> {hero.toughness}</div>
        </div>
      </div>
    </div>
  );
};

HeroesDisplayCard.propTypes = {
  hero: PropTypes.object.isRequired
};

export default HeroesDisplayCard;
