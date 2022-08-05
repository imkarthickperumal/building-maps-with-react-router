import React from "react";
import {Route} from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>This is Welcome Page !</h1>
      <Route path='/welcome/new-user'>
        <h1>Welcome, new user</h1>
      </Route>
    </section>
  );
};

export default Welcome;
