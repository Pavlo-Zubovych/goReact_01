import React from "react";
import Profile from './profile/Profile';
import user from './profile/user.json'

// console.log(user);

const App = () => {
  return (
    <div>
      <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
   </div>
   )
};

export default App;