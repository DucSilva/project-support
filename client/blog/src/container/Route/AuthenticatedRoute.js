import { connect } from 'react-redux';
import AuthenticatedRoute from '../../components/Route/AuthenticatedRoute';
import authSelector from '../../selector/authSelector';
const mapStateToProps = (state) => ({
    authenticated: authSelector.checkAuthenticatedStatus(state),
    //   userRole: authSelectors.getUserRole(state),
});

export default connect(mapStateToProps)(AuthenticatedRoute);