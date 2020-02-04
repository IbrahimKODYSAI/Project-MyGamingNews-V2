import { connect } from 'react-redux';

import NewsOfTheWeeks from 'src/components/Home/NewsOfTheWeek';


const mapStateToProps = state => ({
  articles: state.articles,
});

const mapDispatchToProps = {};

const CarouselContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsOfTheWeeks);

export default CarouselContainer;
