import { connect } from 'react-redux';
import Post from '../components/Post/Post';

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Post);