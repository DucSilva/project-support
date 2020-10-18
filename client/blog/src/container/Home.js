import { connect } from 'react-redux';
import Home from '../components/Home/Home';
import authSelector from '../selector/authSelector'

const mapStateToProps = (state) => {
    const token = authSelector.getToken(state);
    const user = authSelector.getUser(state).toJS();
    console.log(user);
    return {
        token,
        user,
    }
}

export default connect(mapStateToProps)(Home)