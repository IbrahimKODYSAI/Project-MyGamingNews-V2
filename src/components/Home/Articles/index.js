import React from 'react';
import PropTypes from 'prop-types';
import './articles.scss';
import { Link } from 'react-router-dom';


const Articles = (props) => {
  const { articles } = props;
  const articlesList = articles.news;
  return (
    <section className="container1">
      <div className="c-wings c-wings--sm">Articles</div>
      {articlesList.map(article => (
        <article key={article.id}>
          <div className="container1-card_imgbox">
            <Link to={`/article/${article.id}`} exact="true"><img src={article.image} alt="" /></Link>
          </div>
          <div className="container1-card_label">
            <h3>{article.title}</h3>
            <p>{article.resume.slice(0, 90)}...</p>
            <button type="button">Learn more</button>
          </div>
        </article>
      ))}
    </section>
  );
};


Articles.propTypes = {
  articles: PropTypes.object.isRequired,
};

export default Articles;
