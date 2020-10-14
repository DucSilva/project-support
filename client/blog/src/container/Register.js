import { connect } from 'react-redux';
import RegisterPage from '../components/Register/RegisterPage';
import authSelector from '../selector/authSelector';
import authenticationActions from '../actions/authenticationActions';


const mapStateToProps = (state) => {
    const isRegister = authSelector.getIsRegister(state);
    const isSuccess = authSelector.getIsRegisterSuccess(state);

    return {
        isRegister,
        isSuccess,
    };
};

const mapDispatchToProps = {
    register: authenticationActions.register,
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);