import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import userActions from '../redux/user/user.action';
import userSelectors from '../redux/user/user.selector';

// const mapStateToProps = (state) = ({
//     // isLoading: authSelectors.getIsLoading(state),
//     // errorMessage: authSelectors.selectErrorMessage(state),
// })

const mapDispatchToProps = {
    loginUser: userActions.loginUser,
}
export default connect(null, mapDispatchToProps)(Login);