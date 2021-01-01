import React from 'react';
import { EpisodeCardContainer, EpisodeText } from './Serie';

const EpisodeCard = ({ epiNo, link }) => {
	return (
		<EpisodeCardContainer href={link} target='_blank'>
			<EpisodeText>{epiNo}</EpisodeText>
		</EpisodeCardContainer>
	);
};

export default EpisodeCard;
