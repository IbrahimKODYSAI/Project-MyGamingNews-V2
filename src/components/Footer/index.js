// // == Import : npm
// import 'semantic-ui-css/semantic.min.css';
// import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import React from 'react';

// == Import : local

import './footer.scss';

// == Composant
const Footer = () => (
  <div id="footer">
    <div className="linkdiv">
      <div className="link">
        <Link to="/contact" exact="true">
          Contact
        </Link>
        <Link to="/mention_legale" exact="true">
          Mention légale
        </Link>
        <Link to="/" exact="true">
          Accueil
        </Link>
      </div>
    </div>
    <div className="textfooter">
      <p>&copy; 2019 Game news</p>
    </div>
    <div className="divicon">
      <div className="icons">
        {/* <Icon name="twitter square" size="big" color="blue" />
        <Icon name="facebook square" size="big" color="blue" /> */}
      </div>
    </div>
  </div>
);

// == Export
export default Footer;
