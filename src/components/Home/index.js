import React from 'react';
import Carousel from 'src/containers/Home/Carousel';
import NewsOfTheWeeks from 'src/containers/Home/NewsOfTheWeeks';
import Articles from 'src/containers/Home/Articles';

import './home.scss';

const Home = () => (
  <div className="home">
    <div className="container">
      <div className="div1">
        <Carousel />

      </div>
      <div id="heol">
        <NewsOfTheWeeks />
      </div>
    </div>
    <div id="articlesbox">
      <Articles />
    </div>

  </div>
);

export default Home;
