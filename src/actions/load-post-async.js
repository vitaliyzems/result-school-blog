import { setPostData } from './set-post-data';

export const loadPostAsync = (requestServer, postId) => (dispatch) => {
	requestServer('fetchPost', postId).then(({ res: postData }) => {
		dispatch(setPostData(postData));
	});
};
