import { connect } from 'react-redux';
import Post from '../components/Post/Post';
import postActions from '../actions/postActions';
import postSelector from '../selector/postSelector';
import authSelector from '../selector/authSelector';

const mapStateToProps = (state) => {
    const post = postSelector.getAllPost(state).toJS();
    const isFetching = postSelector.getIsFetching(state);
    const token = authSelector.getToken(state);
    return {
        post,
        isFetching,
        token
    };
};

const mapDispatchToProps = {
    getAllPost: postActions.getAllPost,
    createPost: postActions.createPost
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);