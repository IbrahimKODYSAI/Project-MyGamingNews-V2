// == Import : npm
import React, {useEffect, useState} from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
// import 'src/components/Home/Articles/articles.scss';
import 'src/components/SortArticles/sortarticles.scss';

// == Composant
const SortArticles = ({ match, getSortArticlesByPlateform, getSortArticlesByGenre, articlesSort }) => {
  const type = match.params.type;
  const category = match.params.category;

  useEffect(() => {
    // setcat(category);
    if (type === 'plateform') {
      getSortArticlesByPlateform(category);
    }
    if (type === 'genre') {
      getSortArticlesByGenre(category);
    }
  }, []);

  return (
    <div>
      <div id="articles">
        <h1 id="title-sort" className="c-wings2">Article par {type} : {category}</h1>
        <div className="article-div">
          {
            articlesSort.map((article) => {
              return (
                <Link key={article.id} to={`/article/${article.id}`} exact="true">
                  <Card id="cards">
                    <div className="divimg">
                      <Image
                        className="image"
                        src={article.image}
                      />
                    </div>
                    <Card.Content>
                      <h3>{article.title}</h3>
                      <Card.Description className="card-resume">
                        {article.resume}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Button>Learn more</Button>
                    </Card.Content>
                  </Card>
                </Link>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

SortArticles.propTypes = {
  getSortArticlesByPlateform: PropTypes.func.isRequired,
  getSortArticlesByGenre: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  articlesSort: PropTypes.array.isRequired,
};

// == Export
export default SortArticles;
