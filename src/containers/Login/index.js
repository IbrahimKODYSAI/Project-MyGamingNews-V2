import { connect } from 'react-redux';

import Login from 'src/components/Login';
import { onSubmitLogin } from 'src/store/reducer';

const mapStateToProps = state => ({
  loginEmail: state.loginEmail,
  loginPassword: state.loginPassword,
});

const mapDispatchToProps = dispatch => ({
  onSubmitForm: () => {
    dispatch(onSubmitLogin());
  },
});


const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default LoginContainer;
