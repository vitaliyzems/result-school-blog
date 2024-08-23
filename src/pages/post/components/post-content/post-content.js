import styled from 'styled-components';
import { H2, Icon } from '../../../../components';

const PostContentContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => (
	<div className={className}>
		<img src={imageUrl} alt={title} />
		<H2>{title}</H2>
		<div className="special-panel">
			<div className="published-at">
				<Icon id="fa-calendar-o" size="18px" margin="-2px 5px 0 0" />
				{publishedAt}
			</div>
			<div className="buttons">
				<Icon id="fa-pencil-square-o" size="21px" />
				<Icon id="fa-trash-o" size="21px" margin="0 0 0 20px" />
			</div>
		</div>
		<div className="post-text">{content}</div>
	</div>
);

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .special-panel {
		display: flex;
		justify-content: space-between;
		margin: -20px 0 20px;
	}

	& .published-at {
		display: flex;
		align-items: center;
		font-size: 18px;
	}

	& .buttons {
		display: flex;
	}

	& .post-text {
		font-size: 18px;
	}
`;
