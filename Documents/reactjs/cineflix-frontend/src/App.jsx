import React from 'react';
import Login from './Components/auth/Login';
import Signup from './Components/auth/Signup';
import Home from './Components/Body/Navbar';
import Account from './Components/Body/Account';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux'
import { AuthProvider } from './Components/auth/authDetail';
import PrivateRoute from './Components/auth/PrivateRoute';
import history from './history'

function App() {
    return (
    <AuthProvider>
    <BrowserRouter>
        <div className="app">
          <PrivateRoute history={history} exact path="/" component={Home}/>
          <PrivateRoute history={history} exact path="/account" component={Account}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
        </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default connect()(App);
