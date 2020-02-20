// imports NPM
import { connect } from 'react-redux';

// imports locaux
import SignUp from 'src/components/SignUp';
import { onSubmitRegister } from 'src/store/reducer';

const mapStateToProps = state => ({
  registerEmail: state.registerEmail,
  registerPassword: state.registerPassword,
  registerUserName: state.registerUserName,
  registerLastName: state.registerLastName,
  registerFirstName: state.registerFirstName,

});
// const mapDispatchToProps = null;

const mapDispatchToProps = dispatch => ({
  onSubmitForm: () => {
    dispatch(onSubmitRegister());
  },
});

const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

// export
export default SignUpContainer;
