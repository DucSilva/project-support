
const getIsFetching = ({ post }) => post.get('isFetching', false);
const getIsCreating = ({ post }) => post.get('isCreating', false);
const getAllPost = ({ post }) => post.get('post', []);

const postSelector = {
    getIsFetching,
    getAllPost,
    getIsCreating,
};

export default postSelector;