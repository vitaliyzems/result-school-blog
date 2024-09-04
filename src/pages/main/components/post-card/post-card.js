import PropTypes from 'prop-types';
import { Icon } from '../../../../components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostCardContainer = ({
	className,
	id,
	imageUrl,
	title,
	publishedAt,
	commentsCount,
}) => {
	return (
		<div className={className}>
			<Link to={`post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-card-footer">
					<h4>{title}</h4>
					<div className="post-card-info">
						<div className="published-at">
							<Icon
								id="fa-calendar-o"
								size="18px"
								inactive={true}
								margin="-2px 5px 0 0"
							/>
							{publishedAt}
						</div>
						<div className="comments-count">
							<Icon
								id="fa-comment-o"
								size="18px"
								inactive={true}
								margin="-2px 5px 0 0"
							/>
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)`
	display: flex;
	flex-direction: column;
	width: 280px;
	margin: 20px 20px;
	border: 1px solid #000;

	& a {
		height: 100%;
	}

	& img {
		display: block;
		width: 100%;
	}

	& .post-card-footer {
		height: calc(100% - 150px);
		display: flex;
		flex-direction: column;
		border-top: 1px solid #000;
		padding: 5px;
	}

	& h4 {
		margin: 0;
		flex: 1 0 auto;
	}

	& .post-card-info {
		display: flex;
		justify-content: space-between;
		margin-top: 5px;
	}

	& .published-at {
		display: flex;
	}

	& .comments-count {
		display: flex;
	}
`;

PostCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	commentsCount: PropTypes.number.isRequired,
};
