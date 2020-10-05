import { connect } from 'react-redux';
import AdminRoute from '../../components/Route/AdminRoute';
import authSelector from '../../selector/authSelector';

const mapStateToProps = (state) => ({
    authenticated: authSelector.checkAuthenticatedStatus(state),
});

export default connect(mapStateToProps)(AdminRoute);
