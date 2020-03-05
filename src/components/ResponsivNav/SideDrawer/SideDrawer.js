import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Menu,
  Dropdown,
  Button,
} from 'semantic-ui-react';
import AccountButton from 'src/components/ResponsivNav/SideDrawer/Accountbutton';
import './SideDrawer.scss';

const SideDrawer = ({
  activeItem,
  setItem,
  genres,
  categories,
  getAllPlateforms,
  getAllGenres,
  show,
  userInfo,
  avatar,
}) => {
  let cssClassNames = 'side-drawer';
  if (show) {
    cssClassNames = 'side-drawer open';
  }
  const handleItemClick = (e, { name }) => setItem(name);
  // const options = genres;
  useEffect(() => {
    getAllPlateforms();
    getAllGenres();
    userInfo();
  }, []);
  userInfo();

  return (
    <div className={cssClassNames}>
      <div className="avatar-login">
        {JSON.parse(sessionStorage.getItem('token'))
          && <div className="accountbuton"><AccountButton avatar={avatar} /></div>
        }
        {!JSON.parse(sessionStorage.getItem('token'))
          && (
          <div>
            <Link
              to="/Sign_Up"
              exact
            >
              <Button className="lg button" primary>Sign-Up</Button>
            </Link>
            <Link
              to="/login"
              exact
            >
              <Button className="lg button">Login</Button>
            </Link>
          </div>
          )
        }
      </div>

      <div className="platformbutton">
        {categories.map(category => (
          <li
            className="platformbutton-items"
            key={category.id}
            name={category.name}
            onClick={handleItemClick}
          >
            <span>{category.name}</span>
          </li>
        ))}
      </div>
      <Menu.Item
        className="typemenu"
        active={activeItem === 'GAMES'}
      >
        <Dropdown text="GENRES" simple item>
          <Dropdown.Menu>
            {genres.map(genre => (
              <Dropdown.Item key={genre.id} text={genre.name} />
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
      <div className="spacer" />

      <div className="platformlogo">
        <div className="facebook1" />
        <div className="youtube" />
        <div className="linkedin" />
        <div className="twitter2" />
      </div>
      <div className="spinner" />
    </div>
  );
};

SideDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
  activeItem: PropTypes.string.isRequired,
  setItem: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  getAllPlateforms: PropTypes.func.isRequired,
  getAllGenres: PropTypes.func.isRequired,
  userInfo: PropTypes.func.isRequired,
  avatar: PropTypes.string.isRequired,
};
export default SideDrawer;
