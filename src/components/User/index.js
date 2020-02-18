import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './user.scss';
import UserAvatar from 'src/components/User/UserAvatar';

class User extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <div className="wrapper">
          <div className="wrapper-header">
            <Link to="/user/Avatar" exact="true">
              <div className="wrapper-header_avatar">
                <div className="wrapper-header_avatar_dl">
                  <span>mettre à jour</span>
                </div>
                <img src="./assets/hello1.jpg" alt="" />
              </div>
            </Link>
            <div>
              <img className="wrapper-header_img" src="./assets/netflix.jpg" alt="" />
            </div>
          </div>
          <ul className="wrapper-nav">
            <li className={activeItem === 'home' ? 'wrapper-nav_item active' : 'wrapper-nav_item'}>A propos </li>
            <li className="wrapper-nav_item">Favoris</li>
            <li className="wrapper-nav_item">Admin</li>
            <li className="wrapper-nav_item" />
          </ul>
        </div>
        <div>
          <Route path="/user/Avatar" exact component={UserAvatar} />
        </div>
      </div>
    );
  }
}

export default User;
