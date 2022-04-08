import React from 'react';
import PropTypes from 'prop-types';

const FritndList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(friend => {
      <FriendListItem />;
    })}
  </ul>
);
