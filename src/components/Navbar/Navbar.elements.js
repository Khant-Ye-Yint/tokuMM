import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container } from '../../globalStyles';

export const Nav = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80px;
	font-size: 1.2rem;
	top: 0;
	background: #243441;
`;

export const NavContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80%;

	${Container}
`;

export const NavLogo = styled(Link)`
	color: #ebeced;
	font-size: 2rem;
	text-decoration: none;
	cursor: pointer;
`;

export const HumburgerIcon = styled.div`
	display: none;
	width: 50px;
	height: 50px;
	border-radius: 15px;
	box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
		-2px -2px 8px rgba(100, 100, 100, 0.15);

	&:focus {
		outline: none;
	}

	&:active {
		box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
			-2px -2px 8px rgba(100, 100, 100, 0.15),
			inset 4px 4px 8px rgba(0, 0, 0, 0.25),
			inset -2px -2px 8px rgba(100, 100, 100, 0.15);
	}

	@media screen and (max-width: 960px) {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-70%, 15%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	width: 35vw;
	list-style: none;
	justify-content: space-around;
	align-items: center;
	text-align: center;
	background: #243441;
	z-index: 999;

	@media screen and (max-width: 960px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 85vh;
		position: absolute;
		top: 60px;
		left: ${({ clicked }) => (clicked ? 0 : '-100%')};
		opacity: ${({ clicked }) => (clicked ? 1 : '0')};
		transition: all 0.5s ease;
		background: #243441;
	}
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	font-size: 1.3rem;
	color: #7c858d;
`;

export const ThemeIcon = styled.div`
	border-radius: 50%;
	width: 50px;
	height: 50px;
	background-color: #243441;
	display: flex;
	justify-content: center;
	align-items: center;
	-webkit-appearance: none;
	box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
		-2px -2px 8px rgba(100, 100, 100, 0.15);
	outline: none;
	cursor: pointer;

	&:active {
		box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
			-2px -2px 8px rgba(100, 100, 100, 0.15),
			inset 4px 4px 8px rgba(0, 0, 0, 0.25),
			inset -2px -2px 8px rgba(100, 100, 100, 0.15);
	}
`;
