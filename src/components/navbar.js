import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    history.push('/login');
  };

  return (
    <nav>
      <h1>My App</h1>
      {isLoggedIn ? (
        <>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={() => history.push('/login')}>Login</button>
      )}
    </nav>
  );
};

export default Navbar;
