// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Carousel from 'src/components/Home/Carousel';

// Action Creators

const mapStateToProps = state => ({
  articles: state.articles,
});

const mapDispatchToProps = {};

// Container
const CarouselContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Carousel);

// == Export
export default CarouselContainer;
