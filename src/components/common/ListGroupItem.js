import React from 'react';
import PropTypes from 'prop-types';

const ListGroupItem = ({upgrade}) => {
  return (
    <li className="list-group-item">{upgrade}</li>
  );
};

ListGroupItem.propTypes = {
  upgrade: PropTypes.string.isRequired
};

export default ListGroupItem;
