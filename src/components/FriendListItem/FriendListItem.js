import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li class="item">
    {/* <span class="status">{isOnline}</span> */}
    {isOnline ? (
      <span class="status" style={{ backgroundColor: '#55AC57' }}>
        + {isOnline}
      </span>
    ) : (
      <span class="status" style={{ backgroundColor: '#E0343B' }}>
        - {isOnline}
      </span>
    )}

    <img class="avatar" src={avatar} alt="User avatar" width="48" />
    <p class="name">{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

FriendListItem.defaultProps = {
  avatar:
    'https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg',
};

export default FriendListItem;
