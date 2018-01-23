import React from 'react';
import PropTypes from 'prop-types';

const HeroesDisplayCard = ({hero}) => {
  if (hero.class == "Warrior") {
    const {heroIcon} = "<i className='ra ra-axe ra-fw'></i>";
  } else if (hero.class == "Mage") {
    const {heroIcon} = "<i className='ra ra-fairy-wand ra-fw'></i>";
  } else if (hero.class == "Healer") {
    const {heroIcon} = "<i className='ra ra-health ra-fw'></i>";
  } else if (hero.class == "Assassin") {
    const {heroIcon} = "<i className='ra ra-daggers ra-fw'></i>";
  }
  return (
    <div className="col">
      <div className="card">
        <div className="card-header">
          <i className="ra ra-player ra-fw"></i> {hero.firstName} {hero.lastName}
        </div>
        <div className="card-body">
          <div>
            {hero.class == "Warrior" && <i className='ra ra-axe ra-fw'></i>}
            {hero.class == "Mage" && <i className='ra ra-fairy-wand ra-fw'></i>}
            {hero.class == "Healer" && <i className='ra ra-health ra-fw'></i>}
            {hero.class == "Assassin" && <i className='ra ra-daggers ra-fw'></i>}
            <span> {hero.class}</span>
          </div>
          <div><i className="ra ra-shield ra-fw"></i> {hero.power}</div>
          <div><i className="ra ra-hearts ra-fw"></i> {hero.toughness}</div>
        </div>
      </div>
    </div>
  );
};

HeroesDisplayCard.propTypes = {
  hero: PropTypes.object.isRequired
};

export default HeroesDisplayCard;
