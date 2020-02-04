import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import './article.scss';


const Article = ({ articles, match }) => {
  const article = articles.news.find(element => element.id === match.params.id);
  const opts = {
    playerVars: {
      modestbranding: 1,
      autohide: 1,
      showinfo: 0,
    },
  };
  const checkVideo = () => {
    if (typeof article.videoId === 'undefined') {
      return (<img className="video" src={article.image} alt="" />);
    }
    // eslint-disable-next-line no-else-return
    else {
      return (
        <div className="video-container">
          <YouTube
            SameSite
            className="youtube-b"
            videoId={article.videoId}
            opts={opts}
          />
        </div>
      );
    }
  };
  const questions = article.caracQuestions;
  const reponses = article.caracReponses;
  return (
    <div className="p-article">
      <div className="article-block">
        <section>
          {checkVideo()}
          <section className="game-card">
            <div><img src="/assets/img/starwars-jacket.jpg" alt="" /></div>
            <div className="game-card_carac">
              <table>
                <tbody>
                  <tr>
                    <td className="game-card_carac_column">
                      <table>
                        <tbody>
                          {questions.map(question => (
                            <tr key={question}><td className="game-card_carac_item">{question}</td></tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          {reponses.map(reponse => (
                            <tr key={reponse}><td className="game-card_carac_item">{reponse}</td></tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="avisNote">
              <h3>Avis</h3>
              <div className="avisNote-circle1">
                <div className="avisNote-circle2"><span>20/20</span></div>
              </div>
            </div>
            <div className="userAvis">
              <h3>Donnez votre avis</h3>
              <span>✏</span>
            </div>
          </section>
          <div className="game-article">
            <h2>{article.title}</h2>
            <p>{article.text}</p>
          </div>
        </section>
        <section>
          commentaire
        </section>
      </div>
      <div className="article-recom">
        article recommendé
      </div>
    </div>
  );
};

Article.propTypes = {
  match: PropTypes.object.isRequired,
  articles: PropTypes.object.isRequired,
};

export default Article;
