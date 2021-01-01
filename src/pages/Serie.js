import React from 'react';
import { Container } from '../globalStyles';
import {
	Image,
	Wrapper,
	Title,
	EpisodesContainer,
} from '../components/Serie/Serie';
import EpisodeCard from '../components/Serie/EpisodeCard';

import ziOImage from '../images/ziObackground.jpg';

const Serie = () => {
	return (
		<Container>
			<Wrapper>
				<Image src={ziOImage} />
				<Title>Kamen Rider Zi-O</Title>
				<EpisodesContainer>
					<EpisodeCard
						epiNo='1'
						link='https://drive.google.com/file/d/1FImvnqR0NeoOATHpd-NsKlD7TWpoJC17/view'
					/>
					<EpisodeCard epiNo='2' />
					<EpisodeCard epiNo='3' />
					<EpisodeCard epiNo='4' />
					<EpisodeCard epiNo='5' />
					<EpisodeCard epiNo='6' />
					<EpisodeCard epiNo='7' />
					<EpisodeCard epiNo='8' />
					<EpisodeCard epiNo='9' />
					<EpisodeCard epiNo='10' />
				</EpisodesContainer>
			</Wrapper>
		</Container>
	);
};

export default Serie;
