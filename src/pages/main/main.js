import { useEffect, useState } from 'react';
import { useServerRequest } from '../../hooks';
import styled from 'styled-components';
import { Pagination, PostCard } from './components';
import { PAGINATION_LIMIT } from '../../constants';
import { useParams } from 'react-router-dom';
import { getLastPageFromLinks } from './utils';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	useParams();

	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts', page, PAGINATION_LIMIT).then(
			({ res: { posts, links } }) => {
				setPosts(posts);
				setLastPage(getLastPageFromLinks(links));
			},
		);
	}, [requestServer, page]);

	return (
		<div className={className}>
			<div className="post-list">
				{posts.map(({ id, imageUrl, title, publishedAt, commentsCount }) => (
					<PostCard
						key={id}
						id={id}
						imageUrl={imageUrl}
						title={title}
						publishedAt={publishedAt}
						commentsCount={commentsCount}
					/>
				))}
			</div>
			{lastPage > 1 && (
				<Pagination setPage={setPage} page={page} lastPage={lastPage} />
			)}
		</div>
	);
};

export const Main = styled(MainContainer)`
	& .post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
	}
`;
