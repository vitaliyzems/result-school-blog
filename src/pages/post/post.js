import styled from 'styled-components';
import { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Comments, PostContent, PostForm } from './components';
import { useMatch, useParams } from 'react-router-dom';
import { useServerRequest } from '../../hooks';
import { loadPostAsync, RESET_POST_DATA } from '../../actions';
import { selectPost } from '../../selectors';

const PostContainer = ({ className }) => {
	const post = useSelector(selectPost);
	const isCreating = useMatch('/post');
	const isEditing = useMatch('/post/:id/edit');
	const { id } = useParams();
	const requestServer = useServerRequest();
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			return;
		}

		dispatch(loadPostAsync(requestServer, id));
	}, [isCreating, dispatch, requestServer, id]);

	return (
		<div className={className}>
			{isCreating || isEditing ? (
				<PostForm post={post} />
			) : (
				<>
					<PostContent post={post} />
					<Comments comments={post.comments} postId={post.id} />
				</>
			)}
		</div>
	);
};

export const Post = styled(PostContainer)`
	padding: 0 80px;
	margin: 40px 0;
`;
