import { connect } from 'react-redux';

import Article from 'src/components/Article';
import { onInputChange, onsubmitCommentary, getCommentary, getOneArticle } from '../../store/reducer';


const mapStateToProps = state => ({
  articles: state.articles,
  article: state.article,
  newMessage: state.newMessage,
  messageList: state.messageList,
});

const mapDispatchToProps = dispatch => ({
  getArticle: (articleId) => {
    console.log('add message');
    dispatch(getOneArticle(articleId));
  },
  InputChange: (name, value) => {
    dispatch(onInputChange(name, value));
  },
  submitForm: () => {
    dispatch(onsubmitCommentary());
  },
  getAllCommentary: (articleId) => {
    dispatch(getCommentary(articleId));
  }
});


const ArticleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Article);

export default ArticleContainer;
