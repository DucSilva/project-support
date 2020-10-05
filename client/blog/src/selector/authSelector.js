
const getIsLogin = ({ login }) => login.get('isLogin', false);
const checkAuthenticatedStatus = ({ login }) => !!login.get('isLoggedIn');
const getIsRegister = ({ register }) => register.get('isRegister', false);

const authSelector = {
    getIsLogin,
    checkAuthenticatedStatus,
    getIsRegister
};

export default authSelector;