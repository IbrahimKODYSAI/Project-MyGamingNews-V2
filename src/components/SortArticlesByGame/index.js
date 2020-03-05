// == Import : npm
import React, { useEffect } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import 'src/components/Home/Articles/articles.scss';
import 'src/components/SortArticles/sortarticles.scss';

// == Composant
const SortArticlesByGame = ({ match, articlesSort, getArticlesByGames }) => {
  useEffect(() => {
    getArticlesByGames(match.params.id);
  }, []);

  return (
    <div>
      <div id="articles">
        <h1 id="title-sort" className="c-wings2">Recherche par jeu : {match.params.name}</h1>
        <div className="article-div">
          {
            articlesSort.map(article => (
              <Link key={article.id} to={`/article/${article.id}`} exact>
                <Card id="cards">
                  <div className="divimg">
                    <Image
                      className="image"
                      src={article.image}
                    />
                  </div>
                  <Card.Content>
                    <h3 className="cardtitle">{article.title}</h3>
                    <Card.Description className="card-resume">
                      {article.resume}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Button>Learn more</Button>
                  </Card.Content>
                </Card>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

SortArticlesByGame.propTypes = {
  match: PropTypes.object.isRequired,
  articlesSort: PropTypes.array.isRequired,
  getArticlesByGames: PropTypes.func.isRequired,
};

// == Export
export default SortArticlesByGame;
