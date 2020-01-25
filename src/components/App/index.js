// == Import : npm
import React from 'react';
// import { Route } from 'react-router-dom';

// == Import : local
import Header from 'src/containers/Header';
import ResponsivNav from 'src/components/ResponsivNav';

// import Footer from 'src/components/Footer';
import './app.scss';

// == Composant
const App = () => (
  <div id="app">
    <div id="navbar">
      <Header />
    </div>
    <div className="responsiv-navbar">
      <ResponsivNav />
    </div>
    {/* <main>
      lol
    </main>
    <footer>
      <Footer />
    </footer> */}
  </div>
);

// == Export
export default App;
