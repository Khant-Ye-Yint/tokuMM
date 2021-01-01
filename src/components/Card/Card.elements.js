import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardWrapper = styled(Link)`
	width: 45%;
	height: 150px;
	border-radius: 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 50px;
	margin: 20px 0;
	text-decoration: none;
	box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25),
		-4px -4px 8px rgba(100, 100, 100, 0.15);

	@media screen and (max-width: 960px) {
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 130px;
		width: 130px;
		padding: 0 25px;
		border-radius: 20px;
		margin: 10px 0;
	}

	&:focus {
		outline: none;
	}

	&:active {
		box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25),
			-4px -4px 8px rgba(100, 100, 100, 0.15),
			inset 8px 8px 16px rgba(0, 0, 0, 0.25),
			inset -4px -4px 8px rgba(100, 100, 100, 0.15);
	}
`;

export const CardText = styled.h1`
	color: #ebeced;
	font-size: 2rem;

	@media screen and (max-width: 960px) {
		margin-top: 10px;
		font-size: 1rem;
	}
`;

export const CardImage = styled.img`
	height: 100%;
	width: auto;

	@media screen and (max-width: 960px) {
		width: 100%;
		height: auto;
	}
`;
