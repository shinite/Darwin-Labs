import React from 'react';
import {BrowserRouter,Route,Switch,Link, NavLink} from 'react-router-dom';


const Header = () => (
  <header>
    <h1>Darwin Labs</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/history" activeClassName="is-active">History</NavLink>
    <NavLink to="/images" activeClassName="is-active">ViewImages</NavLink>
  </header>
);

export default Header ;
