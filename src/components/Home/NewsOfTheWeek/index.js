import React from 'react';
import PropTypes from 'prop-types';
import './newsoftheweek.scss';

const NewsOfTheWeeks = (props) => {

  const { articles } = props;
  const NewsOfTheWeekList = articles.newsOfTheWeek;

  return (
    <section className="week-box">
      {NewsOfTheWeekList.map(WeekNews => (
        <article key={WeekNews.id}>
          <div className="week-box_imgbox">
            <img src={WeekNews.image} alt="" />
          </div>
          <div className="week-box_content">
            <h3>{WeekNews.title}</h3>
            <p>{WeekNews.resume}</p>
            <span>Lire la suite</span>
          </div>
        </article>
      ))}

    </section>
  );
};


NewsOfTheWeeks.propTypes = {
  articles: PropTypes.object.isRequired,
};

export default NewsOfTheWeeks;
