import React from 'react';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div>
    <div>
      <img src={avatar} alt="User avatar" />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>

    <ul>
      <li>
        <span>Followers</span>
        <span>{stats.followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{stats.views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  // stats: PropTypes.number.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

// export default Profile;
