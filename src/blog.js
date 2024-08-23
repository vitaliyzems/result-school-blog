import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './components';
import { Footer } from './components';
import { Authorization, Post, Registration, Users } from './pages';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	background-color: #fff;
`;

const Page = styled.div`
	padding: 120px 0 20px;
`;

export const Blog = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(setUser(currentUserData));
	}, [dispatch]);

	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path={'/'} element={<div>Главная страница</div>} />
					<Route path={'/login'} element={<Authorization />} />
					<Route path={'/register'} element={<Registration />} />
					<Route path={'/users'} element={<Users />} />
					<Route path={'/post'} element={<div>Новая статья</div>} />
					<Route path={'/post/:id'} element={<Post />} />
					<Route path={'*'} element={<div>Ошибка</div>} />
				</Routes>
			</Page>
			<Footer />
		</AppColumn>
	);
};
