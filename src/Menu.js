import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Menu extends React.Component {
  render(){
    return (
      <div className="menu">
        <Link className="menlin" to="/">Home</Link>
        <Link className="menlin" to="/followers">Followers</Link>
        <Link className="menlin" to="/repos">Repos</Link>
      </div>
    );
  }
};

export default Menu;
