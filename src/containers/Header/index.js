// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from 'src/components/Header';

// Action Creators
import { setActiveItem, getPlateform, getGenres, getUserInfo } from 'src/store/reducer';

const mapStateToProps = state => ({
  categories: state.categories,
  activeItem: state.activeItem,
  genres: state.genres,
  navitems: state.navitems,
  avatar: state.userInfo.avatar,
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
  userInfo: () => {
    dispatch(getUserInfo());
  }
});

// Container
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

// == Export
export default HeaderContainer;
