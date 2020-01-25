// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SideDrawer from 'src/components/ResponsivNav/SideDrawer/SideDrawer';

// Action Creators
import { setActiveItem, getPlateform, getGenres } from 'src/store/reducer';

/* === State (données) === */

const mapStateToProps = state => ({
  categories: state.categories,
  activeItem: state.activeItem,
  genres: state.genres,
});

/* === Actions === */
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
const SideDrawerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideDrawer);

// == Export
export default SideDrawerContainer;
