import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *{
        box-sizing : border-box;
        padding: 0;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
		position: relative;

		&::selection {
			background-color : #425768;
			color: #AAFFFF;
		}
    }

    body {
        background-color: #243441;
    }
`;

export const Container = styled.div`
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding-right: 50px;
	padding-left: 50px;

	@media screen and (max-width: 991px) {
		padding-right: 30px;
		padding-left: 30px;
	}
`;

export const Division = styled.div`
	width: 80%;
	margin: 40px auto;

	@media screen and (max-width: 991px) {
		width: 100%;
		margin: 30px auto;
	}
`;

export const Title = styled.h1`
	font-size: 2rem;
	color: #7c858d;
	font-weight: bold;
	margin-bottom: 20px;
	text-transform: capitalize;

	@media screen and (max-width: 960px) {
		font-size: 1.5rem;
		margin-bottom: 10px;
	}
`;

export const CardContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;

	@media screen and (max-width: 991px) {
		flex-direction: row;
		justify-content: space-around;
		flex-wrap: wrap;
	}
`;

export default GlobalStyle;
