
const getIsFetching = ({ post }) => post.get('isFetching', false);
const getAllPost = ({ post }) => post.get('post', []);

const postSelector = {
    getIsFetching,
    getAllPost,
};

export default postSelector;