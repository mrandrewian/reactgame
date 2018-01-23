import React from 'react';
import PropTypes from 'prop-types';
import ListGroupItem from './ListGroupItem';

const ListGroup = ({upgrades = []}) => {
  return (
    <ul className="list-group {listGroupType}">
      {upgrades.map(upgrade =>
        <ListGroupItem upgrade={upgrade}/>
      )}
    </ul>
  );
};

ListGroup.propTypes = {
  upgrades: PropTypes.array.isRequired,
  listGroupType: PropTypes.string.isRequired
};

export default ListGroup;
