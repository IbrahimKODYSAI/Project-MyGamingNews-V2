// == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';
// import { Route } from 'react-router-dom';

// == Import : local
import Header from 'src/containers/Header';
import ResponsivNav from 'src/components/ResponsivNav';
import Home from 'src/components/Home';
import Article from 'src/containers/Article';
import Login from 'src/containers/Login';
import SignUp from 'src/containers/SignUp';
import ForgottenPassword from 'src/containers/ForgottenPassword';
import User from 'src/components/User';
import Footer from 'src/components/Footer';

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
        <Route path="/user" component={User} />
        <Route path="/" exact component={Home} />
        <Route path="/article/:id" exact component={Article} />
        <Route path="/Login" exact component={Login} />
        <Route path="/forgotten-password" exact component={ForgottenPassword} />
        <Route path="/signup" exact component={SignUp} />

      </main>
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
);

// == Export
export default App;
