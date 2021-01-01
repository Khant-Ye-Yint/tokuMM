import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Image = styled.img`
	width: 70%;
	height: 300px;
	margin: 40px 0;
	object-fit: cover;
	border-radius: 30px;
	box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25),
		-4px -4px 8px rgba(100, 100, 100, 0.15);
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 960px) {
		width: 90%;
		height: 200px;
		margin: 20px 0;
		border-radius: 15px;
	}

	@media screen and (max-width: 750px) {
		width: 100%;
		height: 150px;
		margin: 20px 0;
		border-radius: 15px;
	}
`;

export const Title = styled.h3`
	font-size: 5rem;
	text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
		-2px -2px 8px rgba(100, 100, 100, 0.15);
	color: #243441;
	text-align: center;

	@media screen and (max-width: 991px) {
		font-size: 3rem;
	}
`;

export const EpisodesContainer = styled.div`
	width: 90%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	margin: 40px auto;

	@media screen and (max-width: 991px) {
		width: 100%;
	}

	@media screen and (max-width: 991px) {
		margin: 20px auto;
	}
`;

export const EpisodeCardContainer = styled.a`
	width: 150px;
	height: 150px;
	box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
		-2px -2px 8px rgba(100, 100, 100, 0.15);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 30px;
	margin: 20px 20px;
	text-decoration: none;
	cursor: pointer;

	&:active {
		box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25),
			-4px -4px 8px rgba(100, 100, 100, 0.15),
			inset 8px 8px 16px rgba(0, 0, 0, 0.25),
			inset -4px -4px 8px rgba(100, 100, 100, 0.15);
	}

	@media screen and (max-width: 991px) {
		width: 70px;
		height: 70px;
		border-radius: 15px;
		margin: 15px 15px;
	}
`;

export const EpisodeText = styled.h3`
	font-size: 4rem;
	text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
		-2px -2px 8px rgba(100, 100, 100, 0.15);
	color: #243441;

	@media screen and (max-width: 991px) {
		font-size: 2rem;
	}
`;
