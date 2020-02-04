import { connect } from 'react-redux';

import Article from 'src/components/Article';


const mapStateToProps = state => ({
  articles: state.articles,
});

const mapDispatchToProps = {};


const ArticleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Article);

export default ArticleContainer;
