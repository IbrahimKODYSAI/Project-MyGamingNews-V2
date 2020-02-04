import  { connect } from 'react-redux';

import Articles from 'src/components/Home/Articles';

const mapStateToProps = state => ({
  articles: state.articles,
});


const mapDispatchToProps = {};


const ArticlesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Articles);

export default ArticlesContainer;
