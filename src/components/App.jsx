import React from "react";
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import user from './profile/user.json';
import data from './statistics/data.json';


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

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      

   </div>
   



   )
};

export default App;