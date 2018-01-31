import React from 'react';
import PropTypes from 'prop-types';
import ListGroupItem from './ListGroupItem';

const ListGroup = ({upgrades = []}) => {
  return (
    <ul className="list-group">
      {upgrades.map(upgrade =>
        <ListGroupItem key={upgrade} upgrade={upgrade}/>
      )}
    </ul>
  );
};

ListGroup.propTypes = {
  upgrades: PropTypes.array.isRequired,
  listGroupType: PropTypes.string.isRequired
};

export default ListGroup;
