import React, { useEffect } from 'react';
import YouTube from 'react-youtube';
import { Icon, Button, Label } from 'semantic-ui-react';
import ShareLink from 'react-twitter-share-link';
import { Link } from 'react-router-dom';
import FacebookShareLink from 'react-facebook-share-link';
import PropTypes from 'prop-types';

import './article.scss';


const Article = ({
  getArticle,
  getAllCommentary,
  article,
  match,
  InputChange,
  newMessage,
  submitForm,
  messageList,
  addLike,
  addDislike,
}) => {
  // const articlenews = articles.news;
  const opts = {
    playerVars: {
      modestbranding: 1,
      autohide: 1,
      showinfo: 0,
    },
  };
  useEffect(() => {
    getArticle(parseInt(match.params.id, 10));
    getAllCommentary(parseInt(match.params.id, 10));
  }, []);
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
  // const questions = articlenews.caracQuestions;
  // const reponses = articlenews.caracReponses;
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
          {/* <section className="game-card">
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
          </section> */}
          <div className="game-article">
            <h2>{article.title}</h2>
            <p>{article.text}</p>
          </div>
        </section>
        <div className="communication">
          <div className="share-link">
            <ShareLink>
              {link => (
                <a href={link}><Icon name="twitter square" color="blue" size="big" /></a>
              )}
            </ShareLink>
            <FacebookShareLink>
              {link => (
                <a href={link}><Icon name="facebook official square" color="blue" size="big" /></a>
              )}
            </FacebookShareLink>
            <Button as="div" labelPosition="right">
              <Button icon onClick={addLike}>
                <Icon name="thumbs up" />
                Like
              </Button>
              <Label as="a" basic pointing="left">
                {article.like}
              </Label>
            </Button>
            <Button as="div" labelPosition="left" onClick={addDislike}>
              <Label as="a" basic pointing="right">
                {article.dislike}
              </Label>
              <Button icon>
                <Icon name="thumbs down" />
                  Dislike
              </Button>
            </Button>
          </div>
        </div>
        <section className="commentary-section">
          {JSON.parse(sessionStorage.getItem('token'))
            && (
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
            )}
          {!JSON.parse(sessionStorage.getItem('token'))
            && (
              <div className="userNotlog-comInfo">
                <p>
                  <Link to="/login" exact="true">
                    Connectez vous pour laisser un commentaire
                  </Link>
                </p>
              </div>
            )}
          <div>
            <ul className="message-list">
              {messageList.map(message => (
                <li key={message.id}>
                  <div className="message">
                    <div className="divImg">
                      <img src={`/public/avatarUploads/${message.User.avatar}`} className="divImg-imagesize" alt="" />
                    </div>
                    <div className="message-list_item">
                      <div id="userInfo">
                        <h4 id="userInfo-userName">{message.User.userName}</h4>
                        <p id="userInfo-date">{message.createdAt}</p>
                      </div>
                      <span>{message.commentary}</span>
                    </div>

                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <div className="article-recom">
                  hello
      </div>
    </div>
  );
};

Article.propTypes = {
  match: PropTypes.object.isRequired,
  article: PropTypes.object.isRequired,
  getArticle: PropTypes.func.isRequired,
  getAllCommentary: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  addDislike: PropTypes.func.isRequired,
  InputChange: PropTypes.func.isRequired,
  newMessage: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
  messageList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Article;
