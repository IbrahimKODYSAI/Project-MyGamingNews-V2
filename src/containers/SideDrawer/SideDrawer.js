// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SideDrawer from 'src/components/ResponsivNav/SideDrawer/SideDrawer';

// Action Creators
import {
  setActiveItem,
  getPlateform,
  getGenres,
  getUserInfo,
} from 'src/store/reducer';

/* === State (données) === */

const mapStateToProps = state => ({
  categories: state.categories,
  activeItem: state.activeItem,
  genres: state.genres,
  avatar: state.userInfo.avatar,
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
  userInfo: () => {
    dispatch(getUserInfo());
  },
});

// Container
const SideDrawerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideDrawer);

// == Export
export default SideDrawerContainer;
