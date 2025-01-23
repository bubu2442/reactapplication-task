import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Login from './components/login';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
