import React from 'react';

import './DrawerToggleButton.scss';

const DrawerToggleButton = props => (
  <button type="submit" className="toggle-button" onClick={props.click}>
    <div className="toggle-button_line"/>
    <div className="toggle-button_line"/>
    <div className="toggle-button_line"/>
  </button>
);

export default DrawerToggleButton;
