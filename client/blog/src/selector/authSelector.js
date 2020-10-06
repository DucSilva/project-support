
const getIsLogin = ({ login }) => login.get('isLogin', false);
const getToken = ({ login }) => login.get('token', '');
const getUser = ({ login }) => login.get('existingUser', {});
const checkAuthenticatedStatus = ({ login }) => !!login.get('isLoggedIn');
const getIsRegister = ({ register }) => register.get('isRegister', false);
const getIsRegisterSuccess = ({ register }) => register.get('isSuccess', false);

const authSelector = {
    getIsLogin,
    checkAuthenticatedStatus,
    getIsRegister,
    getIsRegisterSuccess,
    getToken,
    getUser
};

export default authSelector;