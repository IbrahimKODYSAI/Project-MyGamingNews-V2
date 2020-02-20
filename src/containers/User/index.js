import { connect } from 'react-redux';
import User from 'src/components/User';
import { getUserInfo } from 'src/store/reducer';


const mapStateToProps = state => ({
  userName: state.userInfo.userName,
  firstName: state.userInfo.firstName,
  lastName: state.userInfo.lastName,
  mail: state.userInfo.mail,
  role: state.userInfo.role,
  avatar: state.userInfo.avatar,
});

const mapDispatchToProps = dispatch => ({
  userInfo: () => {
    dispatch(getUserInfo());
  },
});

const UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);

export default UserContainer;
