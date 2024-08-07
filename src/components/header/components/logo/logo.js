import styled from 'styled-components';
import { Icon } from '../../../../components';
import { Link } from 'react-router-dom';

const LargeText = styled.div`
	font-size: 48px;
	font-weight: 600;
	line-height: 48px;
`;

const SmallText = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

const LogoContainer = ({ className }) => (
	<Link className={className} to="/">
		<Icon id="fa-code" size="70px" margin="-10px 10px 0 0" />
		<div>
			<LargeText>Блог</LargeText>
			<SmallText>веб-разработчика</SmallText>
		</div>
	</Link>
);

export const Logo = styled(LogoContainer)`
	display: flex;
`;
