import { connect } from 'react-redux';

import NewsOfTheWeeks from 'src/components/Home/NewsOfTheWeek';
import { getGamesList } from 'src/store/reducer';

const mapStateToProps = state => ({
  articles: state.articles,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getGames: () => {
    dispatch(getGamesList());
  },
});

const CarouselContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsOfTheWeeks);

export default CarouselContainer;
