import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

import './article.scss';


const Article = ({
  articles,
  match,
  InputChange,
  newMessage,
  submitForm,
  messageList,
}) => {
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
  const handleChange = (event) => {
    const { name: fieldName, value: fieldValue } = event.target;
    InputChange(fieldName, fieldValue);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };
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
          <div className="zone-text">
            <form onSubmit={handleSubmit} className="form-text">
              <textarea
                onChange={handleChange}
                type="newMessage"
                value={newMessage}
                name="newMessage"
                placeholder="Ecris ton commentaire ici..."
              />
              <button type="submit" className="form-text_button">AJOUTER UN COMMENTAIRE</button>
            </form>
          </div>
          <div>
            <ul className="message-list">
              <li className="message-list_item">
                <p>heloooooooooooooooooooooooooooooooooo</p>
              </li>
              <li className="message-list_item">heloooooooooooooooooooooooooooooooooo</li>
              <li className="message-list_item">heloooooooooooooooooooooooooooooooooo</li>

              {messageList.map(message => (
                <li className="message-list_item">
                  {message.value}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <div className="article-recom">
        {articles.news.map(newArticle => (
          <p key={newArticle.id}>
            {newArticle.title[Math.floor(Math.random() * newArticle.title)]}
          </p>
        ))}
      </div>
    </div>
  );
};

Article.propTypes = {
  match: PropTypes.object.isRequired,
  articles: PropTypes.object.isRequired,
  InputChange: PropTypes.func.isRequired,
  newMessage: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
  messageList: PropTypes.array.isRequired,
};

export default Article;
