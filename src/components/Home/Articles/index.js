import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './articles.scss';
import { Link } from 'react-router-dom';


const Articles = ({ articles, gamesList, getGames }) => {
  useEffect(() => {
    getGames();
  }, []);
  const articlesList = articles.news;
  return (
    <div>
      <section>
        {JSON.parse(sessionStorage.getItem('token'))
          && (
            <>
              <h1 className="news-BigTitle">YOUR PREFERENCIES</h1>
              <div className="user-preferencies">
                {
                  gamesList.map((game) => {
                    return (
                      <Link key={game.id} to={`/games/${game.name}/${game.id}`} exact>
                          <button class="buttonv5">{game.name}</button>
                      </Link>
                    );
                  })
                }
              </div>
            </>
          )
        }
      </section>
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
    </div>
  );
};


Articles.propTypes = {
  articles: PropTypes.object.isRequired,
  getGames: PropTypes.func.isRequired,
};

export default Articles;
