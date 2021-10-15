import React, { useState, useEffect } from 'react';
import { getToken, words } from '@the-collab-lab/shopping-list-utils';
import ViewList from './Pages/ViewList';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import AddItem from './components/AddItem';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('Token');
    user && setToken(user);
  }, [token]);

  const createToken = () => {
    const token = getToken(words);
    localStorage.setItem('Token', token);
  };

  const handleSubmit = () => {
    createToken();
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container mt-2" style={{ marginTop: 40 }}>
          <Switch>
            <Route exact path="/">
              {token ? (
                <Redirect to="/ViewList" />
              ) : (
                <Home onSubmit={() => handleSubmit()} />
              )}
            </Route>
            <Route exact path="/AddItem">
              <AddItem />
            </Route>
            <Route exact path="/ViewList">
              <ViewList />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
