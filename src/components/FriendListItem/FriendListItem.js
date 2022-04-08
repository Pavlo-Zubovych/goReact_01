import React from 'react';
import PropTypes from 'prop-types';

const FriensListItem = ({ avatar, name, isOnline }) => (
  <li class="item">
    <span class="status">{isOnline}</span>
    <img class="avatar" src="" alt="User avatar" width="48" />
    <p class="name">{name}</p>
  </li>
);
