import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const history = useHistory();

  if (!isLoggedIn) {
    history.push('/login');  // Redirect to login if not logged in
  }

  return (
    <div>
      <h2>Home Page</h2>
      {isLoggedIn ? (
        <p>Welcome, {user.email}</p>
      ) : (
        <p>Please log in to view this page.</p>
      )}
    </div>
  );
};

export default Home;
