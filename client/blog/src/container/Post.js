import { connect } from 'react-redux';
import Post from '../components/Post/Post';
import postActions from '../actions/postActions';
import postSelector from '../selector/postSelector';

const mapStateToProps = (state) => {
    const post = postSelector.getAllPost(state).toJS();
    const isFetching = postSelector.getIsFetching(state);

    return {
        post,
        isFetching,
    };
};

const mapDispatchToProps = {
    getAllPost: postActions.getAllPost
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);