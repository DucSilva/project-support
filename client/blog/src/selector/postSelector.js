
const getIsFetching = ({ post }) => post.get('isFetching', false);
const getIsCreating = ({ post }) => post.get('isCreating', false);
const getIsUpdating = ({ post }) => post.get('isUpdating', false);
const getAllPost = ({ post }) => post.get('post', []);

const postSelector = {
    getIsFetching,
    getAllPost,
    getIsCreating,
    getIsUpdating
};

export default postSelector;