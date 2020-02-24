import { connect } from 'react-redux';

import Articles from 'src/components/Home/Articles';
import { getGamesList } from 'src/store/reducer';

const mapStateToProps = state => ({
  articles: state.articles,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getGames: () => {
    dispatch(getGamesList());
  },
});

const ArticlesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Articles);

export default ArticlesContainer;
