import React, { useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './user.scss';
import UserAvatar from 'src/components/User/UserAvatar';
import Adminroute from 'src/containers/Adminroute';
import UserHome from 'src/containers/UserHome';


const User = ({ avatar, userInfo }) => {
  useEffect(() => {
    userInfo();
  }, []);
  userInfo();
  return (
    <div>
      {JSON.parse(sessionStorage.getItem('token'))
      && (
      <div>
        <div className="wrapper">
          <div className="wrapper-header">
            <Link to="/user/Avatar" exact="true">
              <div className="wrapper-header_avatar">
                <div className="wrapper-header_avatar_dl">
                  <span>mettre à jour</span>
                </div>
                <img src={`./public/avatarUploads/${avatar}`} alt="" />
              </div>
            </Link>
            <div>
              <img className="wrapper-header_img" src="./assets/netflix.jpg" alt="" />
            </div>
          </div>
          <ul className="wrapper-nav">
            <Link to="/user/userhome" exact="tue">
              {/* className={activeItem === 'home' ? 'wrapper-nav_item active' : 'wrapper-nav_item'} */}
              <li className="wrapper-nav_item">A propos </li>
            </Link>
            <li className="wrapper-nav_item">Favoris</li>
            <Link to="/user/admin" exact="true">
              <li className="wrapper-nav_item">Admin</li>
            </Link>
            <li className="wrapper-nav_item" />
          </ul>
        </div>
        <div>
          <Route path="/user/Avatar" exact component={UserAvatar} />
          <Route path="/user/userhome" exact component={UserHome} />

          <Adminroute />
        </div>
      </div>
      )}
      {!JSON.parse(sessionStorage.getItem('token'))
      && (
      <div>
        <h1 className="error">YOU ARE NOT L0GIN </h1>
        <img id="logo" src="/" alt="" />
        <div>
          <Link to="/login" exact> <h1>Please Sign in to Access your account</h1> </Link>
          <h3>Or</h3>
          <Link className="link2" to="/" exact> <h1>Return to Home</h1> </Link>
        </div>
      </div>
      )}
    </div>
  );
};

User.propTypes = {
  avatar: PropTypes.string.isRequired,
  userInfo: PropTypes.func.isRequired,
};

export default User;
