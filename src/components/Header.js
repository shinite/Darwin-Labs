import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
    <h1 className="heade__title" >Darwin Labs</h1>
  <div>
    <NavLink className="button button--link" to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink className="button button--link" to="/history" activeClassName="is-active">History</NavLink>
    <NavLink className="button button--link" to="/images" activeClassName="is-active">ViewImages</NavLink>
</div>
      </div>
    </div>
</header>
);

export default Header ;
