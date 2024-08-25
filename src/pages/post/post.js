import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Comments, PostContent } from './components';
import { useParams } from 'react-router-dom';
import { useServerRequest } from '../../hooks';
import { loadPostAsync } from '../../actions';
import { selectPost } from '../../selectors';

const PostContainer = ({ className }) => {
	const post = useSelector(selectPost);
	const { id } = useParams();
	const requestServer = useServerRequest();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, id));
	}, [dispatch, requestServer, id]);

	return (
		<div className={className}>
			<PostContent post={post} />
			<Comments comments={post.comments} postId={post.id} />
		</div>
	);
};

export const Post = styled(PostContainer)`
	padding: 0 80px;
	margin: 40px 0;
`;