import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../../../components';
import { useServerRequest } from '../../../../hooks';
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../../actions';
import styled from 'styled-components';

const SpecialPanelContainer = ({ id, className, publishedAt, editButton }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();

	const onPostRemove = (postId) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, postId)).then(() => {
						navigate('/');
					});
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="published-at">
				{publishedAt && (
					<Icon
						id="fa-calendar-o"
						size="18px"
						inactive={true}
						margin="-2px 5px 0 0"
					/>
				)}
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				{publishedAt && (
					<Icon
						id="fa-trash-o"
						size="21px"
						margin="0 0 0 10px"
						onClick={() => onPostRemove(id)}
					/>
				)}
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};

	& .published-at {
		display: flex;
		align-items: center;
		font-size: 18px;
	}

	& .buttons {
		display: flex;
	}
`;
