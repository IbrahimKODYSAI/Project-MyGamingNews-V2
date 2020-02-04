// == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';
// import { Route } from 'react-router-dom';

// == Import : local
import Header from 'src/containers/Header';
import ResponsivNav from 'src/components/ResponsivNav';
import Home from 'src/components/Home';
import Article from 'src/containers/Article';
// import Footer from 'src/components/Footer';
import './app.scss';

// == Composant
const App = () => (
  <div id="app">
    <div>
      <div id="navbar">
        <Header />
      </div>
      <div className="responsiv-navbar">
        <ResponsivNav />
      </div>
      <main>
        <Route path="/" exact component={Home} />
        <Route path="/article/:id" exact component={Article} />
      </main>
    </div>
    <footer>
      footer
    </footer>
  </div>
);

// == Export
export default App;
