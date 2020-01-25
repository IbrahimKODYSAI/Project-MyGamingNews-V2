// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from 'src/components/Header';

// Action Creators
import { setActiveItem, getPlateform, getGenres } from 'src/store/reducer';

const mapStateToProps = state => ({
  categories: state.categories,
  activeItem: state.activeItem,
  genres: state.genres,
});

const mapDispatchToProps = dispatch => ({
  setItem: (name) => {
    dispatch(setActiveItem(name));
  },
  getAllPlateforms: (name) => {
    dispatch(getPlateform(name));
  },
  getAllGenres: (name) => {
    dispatch(getGenres(name));
  },
});

// Container
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

// == Export
export default HeaderContainer;
