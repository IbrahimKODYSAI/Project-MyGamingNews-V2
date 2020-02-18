import { connect } from 'react-redux';

import Article from 'src/components/Article';
import { onInputChange, onSubmitForm } from '../../store/reducer';


const mapStateToProps = state => ({
  articles: state.articles,
  newMessage: state.newMessage,
  messageList: state.messageList,
});

const mapDispatchToProps = dispatch => ({
  InputChange: (name, value) => {
    dispatch(onInputChange(name, value));
  },
  submitForm: () => {
    dispatch(onSubmitForm());
  },
});


const ArticleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Article);

export default ArticleContainer;
