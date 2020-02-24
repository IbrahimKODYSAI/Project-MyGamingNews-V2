import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './newsoftheweek.scss';

const NewsOfTheWeeks = ({ articles, getGames }) => {

  useEffect(() => {
    getGames();
  }, []);
  const NewsOfTheWeekList = articles.newsOfTheWeek;

  return (
    <section className="week-box">
      {NewsOfTheWeekList.map((WeekNews, index) => {
        if (index < 4) {
          return (
            <article key={WeekNews.id}>
              <div className="week-box_imgbox">
                <Link to={`/article/${WeekNews.id}`} excat="true">
                  <img src={WeekNews.image} alt="" />
                </Link>
              </div>
              <div className="week-box_content">
                <Link to={`/article/${WeekNews.id}`} excat="true">
                  <h3>{WeekNews.title}</h3>
                </Link>
                <p>{WeekNews.resume}</p>
                <Link to={`/article/${WeekNews.id}`} excat="true">
                  <span>Lire la suite</span>
                </Link>
              </div>
            </article>
          );
        }
      })}
    </section>
  );
};


NewsOfTheWeeks.propTypes = {
  articles: PropTypes.object.isRequired,
  getGames: PropTypes.func.isRequired,
};

export default NewsOfTheWeeks;
