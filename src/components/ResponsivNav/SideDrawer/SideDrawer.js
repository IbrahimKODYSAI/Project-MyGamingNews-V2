import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Menu,
  Dropdown,
} from 'semantic-ui-react';
import './SideDrawer.scss';

const SideDrawer = ({
  activeItem,
  setItem,
  genres,
  categories,
  getAllPlateforms,
  getAllGenres,
  show,
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
  }, []);

  return (
    <div className={cssClassNames}>

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
        <Dropdown text="TYPES" simple item>
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
};
export default SideDrawer;
