import { connect } from 'react-redux';

import Login from 'src/components/Login';
// import { onInputChange } from 'src/store/reducer';

const mapStateToProps = state => ({
  loginEmail: state.loginEmail,
  loginPassword: state.loginPassword,
});

const mapDispatchToProps = {}


const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default LoginContainer;
