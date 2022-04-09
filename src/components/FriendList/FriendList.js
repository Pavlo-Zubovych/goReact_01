import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
// import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(friend => {
      <FriendListItem
        avatar={friends.avatar}
        name={friends.name}
        isOnline={friend.isOnline}
      />;
    })}
  </ul>
);

export default FriendList;
